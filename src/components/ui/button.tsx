import React from "react";

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "danger";
};

const variantClasses: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  success: "bg-green-500 text-white hover:bg-green-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: BtnProps) {
  const bgClass = variantClasses[variant];
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center px-6 py-6 rounded-full text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 
         ${bgClass} ${className}`.replace(/\s+/g, " ")}
    >
      {children}
    </button>
  );
}

export default Button;
