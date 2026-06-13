import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

const HERO_EN = {
  taglinePart1: "Moves beyond traditional Buddhist",
  taglinePart2: "concepts to a direct affirmation of life."
} as const;

const HeroSection = () => {
  // Defining sizes here to ensure they are applied cleanly
  const sizes = {
    title: "clamp(2.8rem, 8vw, 5rem)",
    subtitle: "clamp(1.6rem, 4vw, 2.5rem)",
    tagline: "clamp(1.25rem, 2vw, 1.6rem)",
  };

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
      
      {/* LANGUAGE TOGGLE */}
      <a
        href="https://sezoku-hokke.vercel.app"
        className="absolute top-5 right-6 z-20 text-base text-white/90 hover:text-white transition-colors tracking-wide"
      >
        日本語
      </a>

      {/* Background Image with Darkened Overlay for Contrast */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A Lotus blossom on calm water at dawn."
          className="w-full h-full object-cover"
        />
        {/* Darker gradient (via-black/60) to force white text to pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        
        {/* Title and Subtitle with forced inline styles */}
        <h1
          style={{
            fontSize: sizes.title,
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 4px 12px rgba(0,0,0,0.8)',
          }}
        >
          Secular Buddhism
          <span
            style={{
              display: 'block',
              fontSize: sizes.subtitle,
              marginTop: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              opacity: '1',
              fontWeight: '300',
            }}
          >
            in the Lotus Sutra Tradition
          </span>
        </h1>

        {/* Decorative Accent Line */}
        <div className="w-16 h-px bg-white/70 mx-auto mb-8" />

        {/* Main Tagline */}
        <p 
          style={{ 
            fontSize: sizes.tagline,
            lineHeight: '1.4',
            maxWidth: '30rem',
            margin: '0 auto',
            fontWeight: '400',
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
