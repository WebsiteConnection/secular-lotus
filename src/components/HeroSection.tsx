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

      {/* Background Image and Original Seamless Bottom-Fade Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A Lotus blossom on calm water at dawn."
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          {/* Changed font-light to font-bold, tracking-wide to tracking-wider */}
          className="font-heading font-bold tracking-wider text-primary-foreground mb-6 leading-tight"
          style={{
            fontSize: 'var(--en-title-size)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)', // Keeps light text distinct from background image
          } as React.CSSProperties}>
          
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
            {/* Changed font-light to font-medium, removed opacity-90, fixed typo */}
            className="block font-medium mt-3 italic tracking-wide"
            style={{
              fontSize: 'var(--en-subtitle-size)',
            }}>
            in the Lotus Sutra Tradition
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
