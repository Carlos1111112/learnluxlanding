import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import RSVP from "./sections/RSVP";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Enterprise from "./sections/Enterprise";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Trust from "./sections/Trust";

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <RSVP />
        <Features />
        <HowItWorks />
        <Enterprise />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


