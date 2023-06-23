import React, { useState, useEffect } from 'react';
import { Picture } from "@astrojs/image/components";

export default function Slideshow({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => {
        const newIndex = (images.indexOf(prevImage) + 1) % images.length;
        return images[newIndex];
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <Picture
      src={currentImage}
      alt="Cool people"
      
      aspectRatio="4:3"
      sizes="(max-width: 800px) 100vw, 620px"
      loading="eager"
      class="w-full rounded-xl shadow-xl transition hover:-translate-y-2 hover:shadow-xl"
    />
  );
}