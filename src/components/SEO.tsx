import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

function removeMetaTag(attr: string, key: string) {
  const el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (link) {
    link.href = url;
  } else {
    link = document.createElement("link");
    link.rel = "canonical";
    link.href = url;
    document.head.appendChild(link);
  }
}

function removeCanonical() {
  const link = document.querySelector('link[rel="canonical"]');
  if (link) link.remove();
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogType = "website",
  canonicalUrl,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Standard meta
    setMetaTag("name", "description", description);

    if (keywords) {
      setMetaTag("name", "keywords", keywords);
    } else {
      removeMetaTag("name", "keywords");
    }

    // Open Graph
    setMetaTag("property", "og:type", ogType);

    if (ogTitle) {
      setMetaTag("property", "og:title", ogTitle);
    } else {
      setMetaTag("property", "og:title", title);
    }

    if (ogDescription) {
      setMetaTag("property", "og:description", ogDescription);
    } else {
      setMetaTag("property", "og:description", description);
    }

    if (ogUrl) {
      setMetaTag("property", "og:url", ogUrl);
    } else {
      removeMetaTag("property", "og:url");
    }

    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
    } else {
      removeMetaTag("property", "og:image");
    }

    // Canonical
    if (canonicalUrl) {
      setCanonical(canonicalUrl);
    } else if (ogUrl) {
      setCanonical(ogUrl);
    } else {
      removeCanonical();
    }

    // Cleanup on unmount — restore defaults
    return () => {
      document.title = "Ardira — 100% Native Salesforce Applications";
      removeMetaTag("name", "keywords");
      removeMetaTag("property", "og:title");
      removeMetaTag("property", "og:description");
      removeMetaTag("property", "og:url");
      removeMetaTag("property", "og:image");
      removeMetaTag("property", "og:type");
      removeCanonical();
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl, ogImage, ogType, canonicalUrl]);

  return null;
}
