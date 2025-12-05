import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import AddressSection from '@/components/AddressSection';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-section">
        <SectionTitle
          subtitle="Get Started"
          title="Request Your Free Quote"
          description="Ready to transform your home? Fill out the form below and we'll get back to you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Form - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Contact Info - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-2xl p-6 md:p-10 h-full">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-8">
                Contact Information
              </h3>
              <AddressSection />

              {/* Map Placeholder */}
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="font-heading font-semibold text-foreground mb-4">
                  Service Area
                </h4>
                <div className="aspect-[4/3] bg-secondary/10 rounded-xl flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45178.25982399689!2d-93.89059667832032!3d44.96359039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f610c14e9bd4e9%3A0x6ab0f6e6ef5d5f8a!2sWatertown%2C%20MN!5e0!3m2!1sen!2sus!4v1701792000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Area Map - Watertown, MN"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
