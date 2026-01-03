import React, { useState } from 'react';

export default function Dropdown({ 
  label, 
  items = [], 
  onSelect,
  variant = 'default',
  align = 'left'
}) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    default: 'px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100',
    primary: 'px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700'
  };

  const alignments = {
    left: 'left-0',
    right: 'right-0'
  };

  const handleItemClick = (item) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={`${variants[variant]} transition flex items-center gap-1`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} <span className="text-xs">▼</span>
      </button>
      
      {isOpen && (
        <div className={`absolute ${alignments[align]} top-full mt-2 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg z-50`}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleItemClick(item)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label || item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Alternative controlled dropdown for more complex cases
export function ControlledDropdown({ 
  label, 
  items = [], 
  isOpen,
  onToggle,
  onSelect,
  variant = 'default',
  align = 'left',
  className = ''
}) {
  const variants = {
    default: 'px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100',
    primary: 'px-4 py-2 rounded-lg text-sm font-medium bg-purple-600 text-white hover:bg-purple-700'
  };

  const alignments = {
    left: 'left-0',
    right: 'right-0'
  };

  return (
    <div className={`relative ${className}`}>
      <button 
        className={`${variants[variant]} transition flex items-center gap-1`}
        onClick={onToggle}
      >
        {label} <span className="text-xs">▼</span>
      </button>
      
      {isOpen && (
        <div className={`absolute ${alignments[align]} top-full mt-2 min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg z-50`}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition first:rounded-t-lg last:rounded-b-lg"
            >
              {item.label || item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}