
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const CustomButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none";
  
  const variantStyles = {
    primary: "bg-ayurveda text-white hover:bg-ayurveda-dark",
    secondary: "bg-ayurveda-light text-ayurveda hover:bg-ayurveda-lightGreen",
    outline: "border-2 border-ayurveda text-ayurveda hover:bg-ayurveda hover:text-white",
  };
  
  const sizeStyles = {
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-5",
    lg: "text-lg py-3 px-7",
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  
  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link to={href} className={buttonStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonStyles} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
