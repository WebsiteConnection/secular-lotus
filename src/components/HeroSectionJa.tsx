import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

const HeroSectionJa = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Link
        to="/"
        className="absolute top-5 right-6 z-20 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wide"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
        
        English
      </Link>
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="夜明けの静かな水面に浮かぶ蓮の花"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
        <h1 className="text-[2.5rem] md:text-7xl font-light tracking-normal md:tracking-wide text-primary-foreground mb-6 leading-tight whitespace-nowrap" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
          法華経に基づいて
          <span className="block font-light mt-2 italic opacity-90 whitespace-nowrap text-4xl" style={{ fontSize: 'clamp(1.4rem, 4vw, 1.875rem)', fontFamily: "'Noto Sans JP', sans-serif", textShadow: '0px 2px 4px rgba(0,0,0,0.4)' }}>
            仏教を未来へつなぐために
          </span>
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-6" />
        <p className="leading-relaxed max-w-xl mx-auto text-primary-foreground/85 font-semibold" style={{ fontSize: '1.4rem', fontFamily: "'Noto Sans JP', sans-serif", textShadow: '0px 2px 4px rgba(0,0,0,0.4)' }}>
          超自然の真実から、自然の秩序に根ざした普遍的倫理への架け橋。
        </p>
      </div>
    </section>);

};

export default HeroSectionJa;