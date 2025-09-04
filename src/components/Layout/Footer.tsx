import { Link } from "react-router-dom";
import Logo from "/public/images/logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-ayurveda-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src="/logo.png    "
                alt="Dhairya Ayurveda Logo"
                className="h-20 w-22 rounded-xl object-cover"
              />
              <h3 className="font-serif text-2xl font-bold">Dhairya Ayurveda</h3>
            </div>
            <p className="text-white/80 max-w-md">
              Dhairya Ayurveda brings you time-tested Ayurvedic solutions crafted with pure herbs to support your wellness journey — naturally and holistically.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold mb-4">Useful Links</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About" />
              <FooterLink to="/shop" label="Shop" />
              <FooterLink to="/contact" label="Contact" />
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-white/80">
              <p className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>Sanjay Nagar, Sector-23, Ghaziabad 201001</span>
              </p>
              <p className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+91 9211217600</span>
              </p>
              <p className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>dhairyaayurveda@gmail.com</span>
              </p>
              {/* hello */}
              <a 
                href="https://wa.me/919211627274" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-green-300 transition duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/share/1DC2dRpSsS/?mibextid=wwXIfr" // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-pink-400 transition duration-300"
              >
                <InstagramIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Follow on Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/share/1DC2dRpSsS/?mibextid=wwXIfr" // Replace with your Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-400 transition duration-300"
              >
                <FacebookIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Like on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} CMT AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <Link to={to} className="text-white/80 hover:text-white transition duration-300">
      {label}
    </Link>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
</svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.5 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.9.2 1.9.2v2.1h-1.1c-1 0-1.3.6-1.3 1.2v1.6h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
  </svg>
);

export default Footer;
