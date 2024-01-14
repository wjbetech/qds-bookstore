import React from "react";
import "./Text.css"

// set up Text type
interface TextProps {
  
  // is this our principal text? [YES/NO BOOLEAN]
  primary?: boolean;

  // font size in pixels
  fontSize?: number

  // font color
  color?: string;

  // example text 
  text?: string;

}

// build our rendered ui component
export const Text = ({
  primary = false,
  fontSize = 16,
  color,
  text,
  ...props
}: TextProps) => {
  const mode = primary? "storybook-text--primary" : "storybook-text--secondary";
  return (
    <p
      className={["storybook-text", `storybook-text--${fontSize}`, mode].join(' ')}
      {...props}
    >
      {text}
      {/* define font-size and color CSS */}
      <style jsx>{`
        text {
          font-size: ${fontSize}px;
          color: ${color};
        }
      `}</style>
    </p>
  );
}