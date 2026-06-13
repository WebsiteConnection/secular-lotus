import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

const HERO_EN = {
  taglinePart1: "Moves beyond traditional Buddhist",
  taglinePart2: "concepts to a direct affirmation of life."
} as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {/* LANGUAGE TOGGLE */}
      <a
        href="https://sezoku-hokke.vercel.app"
        className="absolute top-5 right-6 z-20 font-body text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors tracking-wide"
      >
        日本語
      </a>

      {/* Background Image and Enhanced Contrast Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A Lotus blossom on calm water at dawn."
          className="w-full h-full object-cover" 
        />
        {/* Darkened the middle overlay zone to instantly make white text pop against the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="font-heading font-light text-primary-foreground mb-6 leading-tight"
          style={{
            fontSize: 'var(--en-title-size)',
            color: '#ffffff',
            // Forces a dark backdrop drop-shadow so light font weights stay perfectly sharp
            textShadow: '0px 4px 15px rgba(0, 0, 0, 0.75), 0px 2px 4px rgba(0, 0, 0, 0.5)',
            // Spaces out the letters slightly to alter the visual shape of the title
            letterSpacing: '0.08em',
          } as React.CSSProperties}
        >
          
          <style>{`
            :root {
              --en-title-size: 2.8rem;
              --en-subtitle-size: 1.6rem;
              --en-tagline-size: 1.25rem;
            }
            @media (min-width: 768px) {
              :root {
                --en-title-size: 5rem;
                --en-subtitle-size: 2.5rem;
                --en-tagline-size: 1.6rem;
              }
            }
          `}</style>

          Secular Buddhism
          
          <span
            className="block font-light mt-4 not-italic"
            style={{
              fontSize: 'var(--en-subtitle-size)',
              color: '#ffffff',
              // Switched to uppercase to give it a clean, distinct layout texture separate from the tagline
              textTransform: 'uppercase',
              // Expanded letter-spacing to give it an elegant, editorial presence
              letterSpacing: '0.2em',
              textShadow: '0px 2px 8px rgba(0, 0, 0, 0.8)',
            }}
          >
            in the Lotus Sutra Tradtion
          </span>
        </h1>

        {/* Decorative Accent Line */}
        <div className="w-16 h-px bg-white mx-auto mb-8" />

        {/* Main Tagline */}
        <p 
          className="leading-relaxed max-w-2xl mx-auto text-primary-foreground font-medium font-[sans]" 
          style={{ 
            fontSize: 'var(--en-tagline-size)',
            lineHeight: '1.4' 
          }}
        >
          <span className="block">{HERO_EN.taglinePart1}</span>
          <span className="block">{HERO_EN.taglinePart2}</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
