import React from 'react'
import "./Button.css"

// set up our Button type
interface ButtonProps {

  // is this our principal button? [YES/NO BOOLEAN]
  primary?: boolean;

  // which bgcolor to use? [STRING]
  backgroundColor?: string;

  // size? [SMALL/MEDIUM/LARGE]
  size?: "small" | "medium" | "large";

  // button text? [STRING]
  label?: string;

  // button text color? [STRING]
  color?: string;

  // handler
  onClick?: () => void;
  
}

// build our rendered ui component
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      {/* define background-color and color CSS */}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${color};
        }
      `}</style>
    </button>
  );
};