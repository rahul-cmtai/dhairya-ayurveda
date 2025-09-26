import { Star } from "lucide-react";
import CustomButton from "../UI/CustomButton";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  isRealProduct: boolean;
  description: string;
}

const ProductCard = ({
  id,
  name,
  price,
  rating,
  image,
  isRealProduct,
  description,
}: ProductProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-2">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="mb-4 min-h-[36px] flex items-center">
          {isRealProduct ? (
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-bold text-ayurveda">
                ₹{price.toLocaleString()}
              </span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">
                  <Star className="h-4 w-4 fill-current" />
                </span>
                <span className="text-sm text-gray-600">{rating}/5</span>
              </div>
            </div>
          ) : null}
        </div>

        {/* Push button to bottom */}
        <div className="mt-auto">
          <CustomButton
            href="https://wa.me/919211627274"
            external
            variant="primary"
            size="sm"
            className="w-full"
          >
            {isRealProduct ? "Buy Now" : "Consult Now"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
