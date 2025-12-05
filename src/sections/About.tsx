import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImg from '@/assets/about.jpg';

const highlights = [
  'Licensed & Insured - Lic.# BC809478',
  'Transparent pricing with no hidden fees',
  'Quality materials from trusted suppliers',
  'Dedicated project manager for every job',
  'Clean job sites & minimal disruption',
  'Warranty on all workmanship',
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImg}
                alt="Our team at work"
                className="w-full h-auto object-cover"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary via-secondary/90 to-transparent">
                <div className="flex items-center gap-8">
                  <div>
                    <span className="block font-heading font-bold text-4xl text-primary">10+</span>
                    <span className="text-primary-foreground/80 text-sm">Years Experience</span>
                  </div>
                  <div className="w-px h-12 bg-primary-foreground/20" />
                  <div>
                    <span className="block font-heading font-bold text-4xl text-primary">500+</span>
                    <span className="text-primary-foreground/80 text-sm">Projects Done</span>
                  </div>
                  <div className="w-px h-12 bg-primary-foreground/20" />
                  <div>
                    <span className="block font-heading font-bold text-4xl text-primary">100%</span>
                    <span className="text-primary-foreground/80 text-sm">Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-primary rounded-2xl -z-10 hidden lg:block" />
          </div>

          {/* Content Column */}
          <div>
            <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Dreams,
              <span className="text-primary"> One Home</span> at a Time
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              CFG Renovations, LLC has been transforming homes across Minnesota 
              with exceptional craftsmanship and personalized service. We believe every home 
              deserves to be a sanctuary that reflects your unique style and needs.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of skilled craftsmen, designers, and project managers work together 
              to deliver stunning results on time and within budget. We handle everything 
              from concept to completion, ensuring a stress-free renovation experience.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
