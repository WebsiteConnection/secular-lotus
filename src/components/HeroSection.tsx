import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lotus.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lotus flower floating serenely on still water at dawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-light tracking-wide text-primary-foreground mb-6 leading-tight">
          Secular Buddhism
          <span className="block text-3xl md:text-4xl font-light mt-2 italic opacity-90">
            in the Lotus Tradition
          </span>
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-6" />
        <p className="font-body text-lg md:text-xl text-primary-foreground/85 font-light leading-relaxed max-w-xl mx-auto">
          A bridge from supernatural truth to a universal ethic grounded in the natural order.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
