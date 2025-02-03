import React, { useState, useEffect } from "react";

const Dock = ({ apps, onAppClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Slide down the dock after a short delay
    setTimeout(() => setIsVisible(true), 2500);
  }, []);

  const handleAppClick = (app) => {
    onAppClick(app);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
          onClick={() => handleAppClick(app)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
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
              margin: "0",
              cursor: "pointer",
              fontSize: app.icon.includes("img") ? "0px" : "50px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: hoveredIndex === index ? "scale(1.3)" : "scale(1)",
              textShadow:
                hoveredIndex === index
                  ? "0 0 20px rgba(255, 255, 255, 0.8)"
                  : "none",
            }}
          >
            {typeof app.icon === "string" ? (
              app.icon
            ) : (
              <img
                src={app.icon.props.src}
                alt={app.icon.props.alt}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              />
            )}
          </div>
          <span
            style={{
              color: "white",
              fontFamily: "Roboto Condensed, sans-serif",
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