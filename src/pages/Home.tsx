import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedSection from "../components/TrustedSection";
import Products from "../components/Products";
import Stats from "../components/Stats";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <Products />
      <Stats />
      <Features />
      <CTA />
      <Contact />
    </>
  );
}

export default Home;
