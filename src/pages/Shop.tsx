
import { useState } from "react";
import ProductCard from "../components/Shop/ProductCard";
import TondFitImage from "/public/new/tond2.jpeg";
import pcod from "/public/new/pcod.jpeg";
import hairfall from "/public/new/hairoil.jpeg";
import thyroid from "/public/new/thyroid.jpeg";
import Gastric from "/public/new/gastric.jpeg";
import Diabetes from "/public/new/suger.jpeg";
import Immunity from "/public/new/immunity-booster.jpeg";
import bgimage from "/public/images/hg.jpg";



const Shop = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Tond & Fit",
      price: 6999,
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

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(product => product.category === filter);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "weight-loss", name: "Weight Loss" },
    { id: "hair-care", name: "Hair Care" },
    { id: "women-health", name: "Women's Health" },
    { id: "hormonal-health", name: "Hormonal Health" },
    { id: "digestive-health", name: "Digestive Health" },
    { id: "metabolic-health", name: "Metabolic Health" },
    { id: "immunity", name: "Immunity" },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-[100vh] bg-cover bg-center"style={{ backgroundImage: `url(${bgimage})`  }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Shop Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our range of authentic Ayurvedic solutions for your wellness journey
            </p>
          </div>  
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    filter === category.id
                      ? "bg-ayurveda text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No products found in this category.</h3>
              <p className="text-gray-500 mt-2">Please try another category or check back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
