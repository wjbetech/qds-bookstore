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

  // set bold
  decoration?: string;

  // example text 
  fontWeight?: string;

  // text
  text?: string;

}

// build our rendered ui component
export const Text = ({
  primary = false,
  fontSize,
  color,
  fontWeight,
  text,
  ...props
}: TextProps) => {
  return (
    <div
      className={["storybook-text"].join(' ')}
      {...props}
    >
      {text}
      {/* define font-size and color CSS */}
      <style jsx>{`
        div {
          font-size: ${fontSize}px;
          color: ${color};
          font-weight: ${fontWeight};
        }
      `}</style>
    </div>
  );
}