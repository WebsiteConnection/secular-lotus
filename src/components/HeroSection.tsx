import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

const HeroSection = () => {
  return (
    /* Responsive Height Fix: 75% on mobile / 85% on desktop */
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {/* LANGUAGE TOGGLE */}
      <a
        href="https://sezoku-hokke.vercel.app"
        className="absolute top-5 right-6 z-20 font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide"
      >
        日本語
      </a>

      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lotus flower floating serenely on still water at dawn"
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="font-heading font-light tracking-wide text-primary-foreground mb-6 leading-tight"
          style={{
            fontSize: 'var(--en-title-size)',
          } as React.CSSProperties}>
          
          <style>{`
            :root {
              --en-title-size: 2.8rem;
              --en-subtitle-size: 1.6rem;
            }
            @media (min-width: 768px) {
              :root {
                --en-title-size: 5rem;
                --en-subtitle-size: 2.5rem;
              }
            }
          `}</style>

          Secular Buddhism
          <span
            className="block font-light mt-2 italic opacity-90"
            style={{
              fontSize: 'var(--en-subtitle-size)',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
            in the Lotus Sutra Tradition
          </span>
        </h1>

        {/* Decorative Accent Line */}
        <div className="w-16 h-px bg-accent mx-auto mb-8" />

        {/* Main Tagline: Reduced to max-w-xl to rein in the width */}
        <p className="leading-relaxed max-w-xl mx-auto text-primary-foreground/90 shadow-none font-medium font-[sans]" 
           style={{ 
             fontSize: '1.25rem',
             textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
             lineHeight: '1.6'
           }}>
          A contemporary teaching that replaces traditional Mahayana concepts 
          <span className="hidden md:inline"><br /></span> {/* Forced break for desktop only */}
          with a direct affirmation of life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
