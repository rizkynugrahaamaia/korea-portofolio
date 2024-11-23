import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 font-semibold rounded-lg shadow-md bg-white text-slate-950 hover:text-[#fff] hover:bg-[#288BE7] ${className}`}>
      {children}
    </button>
  );
};

export default Button;
