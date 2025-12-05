import { Shield, Award, Clock, Users } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description:
      'Fully licensed, bonded, and insured for your complete peace of mind. Your home is protected throughout the project.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description:
      'Meticulous attention to detail on every project. We use premium materials and proven techniques for lasting results.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Efficient project management ensures on-time completion. We respect your schedule and minimize disruption.',
  },
  {
    icon: Users,
    title: '10+ Years Experience',
    description:
      'A decade of transforming homes with expertise. Trust our seasoned team to handle any remodeling challenge.',
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-muted">
      <div className="container-section">
        <SectionTitle
          subtitle="Why Choose Us"
          title="The Premier Difference"
          description="We're not just contractors — we're partners in bringing your vision to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-up opacity-0 [animation-fill-mode:forwards]"
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
