import React, { useState } from "react";
import Img from "../assets/tobedeleted/room.jpg";
import ImgTwo from "../assets/tobedeleted/hotelroom2.jpg";

const ImageCarousel = () =>
  // { images }
  {
    const images = [Img, ImgTwo, Img];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleDotClick = (index) => {
      setCurrentImageIndex(index);
    };

    return (
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: "1",
          }}
          onClick={prevImage}
        >
          &#10094;
        </button>
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: "1",
          }}
          onClick={nextImage}
        >
          &#10095;
        </button>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentImageIndex * 300 + 300}px)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`imag-${index}`}
              style={{ minWidth: "300px", height: "200px" }}
              //   className={currentImageIndex === index ? "active" : ""}
            />
          ))}
          {/* Duplicating images for infinite scroll */}
          {images.map((image, index) => (
            <img
              key={index + images.length}
              src={image}
              alt={`img-${index}`}
              style={{ minWidth: "300px", height: "200px" }}
              className={
                currentImageIndex === index + images.length ? "active" : ""
              }
            />
          ))}
        </div>
        {/* Dots for each image */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {[...Array(images.length)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: currentImageIndex === index ? "black" : "gray",
                margin: "0 5px",
                cursor: "pointer",
                color: "#000000",
                fontWeight: currentImageIndex === index ? "bold" : "normal",
                zIndex: 1,
              }}
            />
          ))}
        </div>
      </div>
    );
  };

export default ImageCarousel;
