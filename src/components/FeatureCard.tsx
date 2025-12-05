import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group text-center p-6 md:p-8 rounded-xl bg-card hover:bg-primary transition-all duration-300 card-hover">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground transition-all duration-300 mb-5">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-heading font-bold text-lg text-card-foreground group-hover:text-primary-foreground mb-3 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
