import React from "react";

interface ImageComponentProps {
  src: string;
  alt?: string;
  maxWidth?: string;
  height?: string;
}

const ResizableImage: React.FC<ImageComponentProps> = ({
  src,
  alt,
  maxWidth,
  height,
}) => {
  return (
    <img
      src={src}
      alt={alt ? alt : "image"}
      loading="lazy"
      style={{
        maxWidth: maxWidth || "100%", // Default to 100% if maxWidth is not provided
        maxHeight: "100%",
        width: "auto",
        height: height || "auto",
        objectFit: "cover",
      }}
    />
  );
};

export default ResizableImage;
