import React from 'react';

export function Card({ children, className = '', hover = false, onClick }) {
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-300 cursor-pointer' : '';
  const clickStyles = onClick ? 'cursor-pointer active:scale-[0.98] transition-transform' : '';
  
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${hoverStyles} ${clickStyles} ${className}`}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className = '' }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-56 object-cover ${className}`}
    />
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`flex justify-between items-start mb-3 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h4 className={`text-2xl font-bold text-gray-900 ${className}`}>
      {children}
    </h4>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-gray-600 mb-4 ${className}`}>
      {children}
    </p>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
}

// Export all as named exports
export default Card;