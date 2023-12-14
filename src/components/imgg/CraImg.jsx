import React from 'react';

const ImageLoop = ({ count }) => {
  const numberOfImages = count || 5;

  const defaultImage = (
    <img
      src="https://example.com/default-image.jpg" 
      alt="Default Alt Text"
      key="default-image"
    />
  );

  const images = [];
  for (let i = 0; i < numberOfImages; i++) {
    images.push(
      <img
        src={`https://example.com/image${i + 1}.jpg`}
        alt={`Image ${i + 1}`}
        key={`image-${i + 1}`}
      />
    );
  }

  return (
    <div>
      {defaultImage}
      {images}
    </div>
  );
};

export default ImageLoop;
