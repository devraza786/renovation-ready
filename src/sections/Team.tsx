import { useState } from 'react';
import { X } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import aboutImg from '@/assets/about.jpg';

const teamMembers = [
  {
    name: 'Court',
    title: 'Founder & Owner',
    description:
      'With over 10 years of expertise in home remodeling, Court leads CFG Renovations with a passion for transforming houses into dream homes. His dedication to quality craftsmanship and customer satisfaction has earned the trust of hundreds of families across Minnesota. Court oversees every project personally, ensuring excellence from concept to completion.',
    image: aboutImg,
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null);

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-section">
        <SectionTitle
          subtitle="Our Leadership"
          title="Meet Our Team"
          description="Get to know the dedicated professionals behind CFG Renovations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {member.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(member);
                  }}
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-2">
                {selectedMember.name}
              </h2>
              <p className="text-primary font-semibold text-lg mb-6">
                {selectedMember.title}
              </p>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6">
                {selectedMember.description}
              </p>
              <Button
                variant="hero"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="#contact">Work With Court</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
