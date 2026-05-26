import { useCallback, useEffect } from "react";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

let isScriptLoading = false;
let isScriptLoaded = false;

function loadRecaptchaScript() {
  if (isScriptLoading || isScriptLoaded || typeof document === "undefined") return;
  if (!SITE_KEY) return;
  
  isScriptLoading = true;
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    isScriptLoaded = true;
    isScriptLoading = false;
  };
  script.onerror = () => {
    isScriptLoading = false;
  };
  document.head.appendChild(script);
}

// Trigger load on first user interaction to improve initial page load speed
if (typeof window !== "undefined") {
  const triggerLoad = () => {
    loadRecaptchaScript();
    window.removeEventListener("touchstart", triggerLoad);
    window.removeEventListener("mousedown", triggerLoad);
    window.removeEventListener("keydown", triggerLoad);
    window.removeEventListener("scroll", triggerLoad);
  };
  window.addEventListener("touchstart", triggerLoad, { passive: true });
  window.addEventListener("mousedown", triggerLoad, { passive: true });
  window.addEventListener("keydown", triggerLoad, { passive: true });
  window.addEventListener("scroll", triggerLoad, { passive: true });
}

/**
 * Hook to execute reCAPTCHA v3 and get a token.
 * Usage:
 *   const executeRecaptcha = useRecaptcha();
 *   const token = await executeRecaptcha("contact_form");
 *
 * This hook automatically lazy-loads the reCAPTCHA v3 script when called or interacted with.
 */
export function useRecaptcha() {
  useEffect(() => {
    // If the hook is active on a page, pre-trigger script load
    loadRecaptchaScript();
  }, []);

  const execute = useCallback(async (action: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const checkAndExecute = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(async () => {
            try {
              const token = await window.grecaptcha.execute(SITE_KEY, { action });
              resolve(token);
            } catch (error) {
              reject(error);
            }
          });
          return true;
        }
        return false;
      };

      if (checkAndExecute()) return;

      // Not loaded yet, force load and poll for readiness
      loadRecaptchaScript();
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (checkAndExecute()) {
          clearInterval(interval);
        } else if (attempts > 50) { // 5 seconds timeout
          clearInterval(interval);
          reject(new Error("reCAPTCHA script failed to load in time"));
        }
      }, 100);
    });
  }, []);

  return execute;
}
