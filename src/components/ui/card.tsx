import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, className = "", ...props }: DivProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }: DivProps) {
  return (
    <div className={`p-6 ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
