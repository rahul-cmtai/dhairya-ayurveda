import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "../components/Contact/ContactForm";
import bgimage from "/public/images/hg.jpg";

const Contact = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We'd love to hear from you. Reach out with any questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-ayurveda-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8">
                Have questions about our products or need personalized advice? Our team is here to help. 
                Fill out the form or use any of our contact methods below to reach us.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ayurveda/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-ayurveda" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ayurveda-dark mb-1">
                      Our Location
                    </h3>
                    <p className="text-gray-700">
                      Sanjay Nagar, Sector-23, Ghaziabad 201001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ayurveda/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-ayurveda" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ayurveda-dark mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-700">
                      +91 9211217600
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ayurveda/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-ayurveda" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ayurveda-dark mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-700">
                    info.dhairyaayurveda@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-serif text-lg font-bold text-ayurveda-dark mb-4">
                  Connect with Us
                </h3>
                <a 
                  href="https://wa.me/919211627274" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5 mr-2"
                  >
                    <path d="...Whatsapp Icon Path..." />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
          

        </div>
      </section>
    </div>
  );
};

export default Contact;
