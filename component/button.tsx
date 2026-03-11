import React from "react";

type ButtonProps = {
    text?: string; // Button ka text, default "Click Me"
    onClick?: () => void; // Button click handler
    href?: string; // Optional link
    disabled?: boolean; // Button disable karne ke liye
    variant?: "primary" | "secondary" | "secondaryBlack" | "danger" | "white" | "outline"; // Button ka type
    size?: "small" | "medium" | "large"; // Size of button
    iconLeft?: React.ReactNode;  // Left side icon
    iconRight?: React.ReactNode; // Right side icon
    className?: string; // Extra Tailwind classes
};

const Button: React.FC<ButtonProps> = ({
    text = "Click Me",
    onClick,
    href,
    disabled = false,
    variant = "primary",
    size = "medium",
    iconLeft,
    iconRight,
    className = "",
}) => {
    // Variant classes
    const variantClasses: Record<string, string> = {
        primary: "bg-primary hover:bg-primary-600 text-white",
        secondary: "bg-secondary hover:bg-secondary-600 text-white",
        secondaryBlack: "bg-secondary hover:bg-secondary-600 text-black",
        danger: "bg-danger hover:bg-danger-600 text-white",
        white: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300",
        outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
        
    };

    // Size classes
    const sizeClasses: Record<string, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-6 py-3 text-lg",
    };

    const commonClasses = `
        rounded-md font-medium transition 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
    `;

    // If href is provided, render as <a>
    if (href) {
        return (
            <a
                href={href}
                className={commonClasses}
                target="_blank"
                rel="noopener noreferrer"
            >
                {iconLeft && <span className="flex items-center mr-1">{iconLeft}</span>}
                {text}
                {iconRight && <span className="flex items-center ml-1">{iconRight}</span>}
            </a>
        );
    }

    // Otherwise, normal button
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={commonClasses}
        >
            {iconLeft && <span className="flex items-center mr-1">{iconLeft}</span>}
            {text}
            {iconRight && <span className="flex items-center ml-1">{iconRight}</span>}
        </button>
    );
};

export default Button;