"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function ImageDisplay({
  src = "/placeholder.svg?height=400&width=600",
  alt = "Enlargeable PDF-like image",
}: {
  src?: string;
  alt?: string;
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = useCallback(() => {
    setIsEnlarged(true);
  }, []);

  const handleCloseClick = useCallback(() => {
    setIsEnlarged(false);
  }, []);

  const handleEnlargedImageClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="relative w-[170px] h-[220px] cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 mobile-image-display">
        <Image
          src={src}
          alt={alt}
          fill={true}
          sizes="100vw, 100vh"
          onClick={handleImageClick}
          className="rounded image-fit"
        />
      </div>
      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseClick}
        >
          <div
            className="enlarged-image relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={handleEnlargedImageClick}
          >
            <Image
              src={src}
              alt={alt}
              fill={true}
              sizes="(max-width: 170px) 170px, 220px"
              className="image-contain"
              onClick={handleCloseClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}
