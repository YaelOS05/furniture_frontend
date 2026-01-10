import React from 'react'
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}
export default function Button({ 
  type = "button",
  onClick,
  children,}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="submit-button"
    >
      {children}
    </button>
  )
}
