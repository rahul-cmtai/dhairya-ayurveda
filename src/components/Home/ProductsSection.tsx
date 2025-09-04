
import { Link } from "react-router-dom";
import ProductCard from "../Shop/ProductCard";
import { ArrowRight } from "lucide-react";
import TondFitImage from "/public/new/tond.jpeg";
import hairloss from "/public/images/thyroid.png";
import pcod from "/public/new/pcod.jpeg";
import hairfall from "/public/new/hairoil.jpeg";
import thyroid from "/public/new/thyroid.jpeg";
import Gastric from "/public/images/www/444.jpeg";
import Diabetes from "/public/new/diabetes.jpeg";
import Immunity from "/public/new/healthy.png";
import bgimage from "/public/images/hg.jpg"


const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Tond & Fit",
      price: 5999,
      rating: 4.5,
      image: TondFitImage,
      isRealProduct: true,
      category: "weight-loss",
      description: "A premium Ayurvedic supplement crafted to support fat metabolism, digestion, and energy.",
    },

    {
      id: 2,
      name: "PCOD",
      price: 5999,
      rating: 4.3,
      image: pcod,
      
      isRealProduct: false,
      category: "women-health",
      description: "Holistic Ayurvedic approach to manage PCOD symptoms and restore hormonal balance.",
    },

    {
      id: 3,
      name: "Hairfall",
      price: 5999,
      rating: 4.4,
      image: hairfall,
      isRealProduct: false,
      category: "hair-care",
      description: "Advanced formula to strengthen hair roots and prevent excessive hair fall naturally.",
    },


    {
      id: 4,
      name: "Thyroid",
      price: 5999,
      rating: 4.1,
      image: thyroid,
      isRealProduct: false,
      category: "hormonal-health",
      description: "Balancing herbal blend to support thyroid function and metabolic health.",
    },

    
    {
      id: 5,
      name: "Gastric & Constipation",
      price: 5999,
      rating: 4.3,
      image: Gastric,
      isRealProduct: false,
      category: "digestive-health",
      description: "Gentle yet effective formula to improve digestion and relieve constipation naturally.",
    },



    {
      id: 6,
      name: "Diabetes",
      price: 5999,
      rating: 4.2,
      image: Diabetes,
      isRealProduct: false,
      category: "metabolic-health",
      description: "Supportive herbal blend to help maintain healthy blood sugar levels and metabolism.",
    },
    {
      id: 7,
      name: "Immunity Booster",
      price: 5999,
      rating: 4.6,
      image: Immunity,
      isRealProduct: false,
      category: "immunity",
      description: "Powerful blend of immune-enhancing herbs to strengthen natural defenses and vitality.",
    },

    

  ];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark">
            Our Featured Products
          </h2>
 
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
