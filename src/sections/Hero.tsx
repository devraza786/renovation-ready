import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Home remodeling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-6 animate-fade-up">
            Premium Home Remodeling
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up-delay-1">
            Transform Your
            <span className="block text-primary">Dream Home</span>
            Into Reality
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl animate-fade-up-delay-2">
            Expert kitchen, bathroom, and basement remodeling services. 
            Quality craftsmanship backed by 10+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+16122445055">
                <Phone className="w-5 h-5" />
                (612) 244-5055
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">10+</span>
              </div>
              <div className="text-primary-foreground/80">
                <span className="block font-heading font-semibold">Years</span>
                <span className="text-sm">Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">500+</span>
              </div>
              <div className="text-primary-foreground/80">
                <span className="block font-heading font-semibold">Projects</span>
                <span className="text-sm">Completed</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">5★</span>
              </div>
              <div className="text-primary-foreground/80">
                <span className="block font-heading font-semibold">Rated</span>
                <span className="text-sm">On Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
