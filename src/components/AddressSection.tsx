import { Phone, MapPin, Clock } from 'lucide-react';

const AddressSection = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
          <Phone className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg text-foreground mb-1">
            Call Us Today
          </h4>
          <a
            href="tel:+15551234567"
            className="text-muted-foreground hover:text-primary transition-colors text-lg 
            block"
          >
            612-244-5055
          </a>
           <a
            href="mail:cgrenovations323@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors text-lg"
          >
           cgrenovations323@gmail.com

          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg text-foreground mb-1">
            Visit Our Office
          </h4>
          <p className="text-muted-foreground">
            Watertown, MN, United States.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg text-foreground mb-1">
            Business Hours
          </h4>
          <p className="text-muted-foreground">
            Monday - Friday: 8:00 AM - 6:00 PM<br />
            Saturday: 9:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
