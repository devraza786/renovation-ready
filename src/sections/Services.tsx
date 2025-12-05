import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import kitchenImg from '@/assets/kitchen.jpg';
import bathroomImg from '@/assets/bathroom.jpg';
import basementImg from '@/assets/basement.jpg';
import flooringImg from '@/assets/flooring.jpg';
import additionImg from '@/assets/addition.jpg';

const services = [
  {
    image: kitchenImg,
    title: 'Kitchen Remodeling',
    description:
      'Transform your kitchen into a stunning culinary space. From custom cabinetry to modern appliances, we create kitchens that inspire.',
  },
  {
    image: bathroomImg,
    title: 'Bathroom Remodeling',
    description:
      'Create your personal spa retreat. We specialize in luxury bathroom renovations with premium fixtures and elegant designs.',
  },
  {
    image: basementImg,
    title: 'Basement Finishing',
    description:
      'Unlock your basement\'s potential. Convert unused space into entertainment rooms, home offices, or additional living areas.',
  },
  {
    image: additionImg,
    title: 'Home Additions',
    description:
      'Expand your living space seamlessly. Our expert team designs and builds additions that blend perfectly with your existing home.',
  },
  {
    image: flooringImg,
    title: 'Flooring Installation',
    description:
      'Beautiful floors that last a lifetime. We install hardwood, tile, laminate, and luxury vinyl with precision craftsmanship.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-section">
        <SectionTitle
          subtitle="What We Do"
          title="Our Remodeling Services"
          description="From kitchens to basements, we handle every aspect of your home renovation with precision and care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-up opacity-0 [animation-fill-mode:forwards]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
