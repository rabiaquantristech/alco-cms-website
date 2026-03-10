import React from "react";

type ButtonProps = {
    text?: string; // Button ka text, default "Click Me"
    onClick?: () => void; // Button click handler
    disabled?: boolean; // Button disable karne ke liye
    variant?: "primary" | "secondary" | "danger" | "outline"; // Button ka type
    size?: "small" | "medium" | "large"; // Size of button
    iconLeft?: React.ReactNode;  // Left side icon
    iconRight?: React.ReactNode; // Right side icon
    className?: string; // Extra Tailwind classes
};

const Button: React.FC<ButtonProps> = ({
    text = "Click Me",
    onClick,
    disabled = false,
    variant = "primary",
    size = "medium",
    iconLeft,
    iconRight,
    className = "",
}) => {
    // Variant classes
    const variantClasses: Record<string, string> = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white",
        outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
    };

    // Size classes
    const sizeClasses: Record<string, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        rounded-md font-medium transition 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
        >
            {iconLeft && <span className="flex items-center">{iconLeft}</span>}
            {text}
            {iconRight && <span className="flex items-center">{iconRight}</span>}
        </button>
    );
};

export default Button;