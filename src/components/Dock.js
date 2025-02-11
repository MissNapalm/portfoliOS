import React, { useState, useEffect } from "react";

const Dock = ({ apps, onAppClick, booted }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (booted) {
      setTimeout(() => setIsVisible(true), 0); // Delay after boot-up
    }
  }, [booted]); // Only runs when `booted` changes

  return (
    <div
      className="dock"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.28)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.8s ease-out",
      }}
    >
      {apps.map((app, index) => (
        <div
          key={index}
          className="dock-icon-container"
          onClick={() => onAppClick(app)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 15px",
            cursor: "pointer",
            fontFamily: "Tahoma, serif",
          }}
        >
          <div
            className="dock-icon"
            style={{
              fontSize: "50px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: hoveredIndex === index ? "scale(1.3)" : "scale(1)",
              textShadow: hoveredIndex === index ? "0 0 20px rgba(255, 255, 255, 0.8)" : "none",
            }}
          >
            {app.icon}
          </div>
          <span
            style={{
              color: "white",
              fontSize: "15px",
              marginTop: "8px",
              opacity: hoveredIndex === index ? 1 : 0.7,
              transition: "opacity 0.3s ease",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {app.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Dock;
