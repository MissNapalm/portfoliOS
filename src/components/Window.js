import React, { useState, useRef, useEffect } from "react";

const Window = ({ title, content, onClose }) => {
  const [position, setPosition] = useState({
    x: (window.innerWidth - 665) / 2,
    y: (window.innerHeight - 630) / 2
  });
  const [size, setSize] = useState({ width: 650, height: 630 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y
        });
      } else if (resizing) {
        const newWidth = Math.max(400, e.clientX - position.x);
        const newHeight = Math.max(400, e.clientY - position.y);

        setSize({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
      setResizing(false);
      document.body.style.userSelect = "auto";
    };

    if (dragging || resizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, resizing, position.x, position.y]);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-header-buttons') || e.target.closest('.resize-handle')) return;
    setDragging(true);
    document.body.style.userSelect = "none";
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    e.preventDefault();
  };

  const handleResizeStart = (e) => {
    setResizing(true);
    document.body.style.userSelect = "none";
    resizeStart.current = { x: e.clientX, y: e.clientY };
    e.stopPropagation();
  };

  return (
    <div
      className="window"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        borderRadius: "16px",
        background: "rgba(28, 28, 28, 0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        animation: "fadeIn 0.4s ease-in-out",
        userSelect: "none",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div
        className="window-header"
        onMouseDown={handleMouseDown}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          padding: "12px 16px",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "grab",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          height: "45px"
        }}
      >
        <span>{title}</span>
        <div className="window-header-buttons" style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={onClose}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background: "linear-gradient(135deg, #ff4b4b, #d32f2f)",
              cursor: "pointer",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              opacity: 0.8,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "1")}
            onMouseLeave={(e) => (e.target.style.opacity = "0.8")}
          />
        </div>
      </div>

      <div
        className="window-content"
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
          overflowX: "hidden",
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: "14px",
          background: "rgba(0, 0, 0, 0.2)"
        }}
      >
        {content}
      </div>

      <div
        className="resize-handle"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "20px",
          height: "20px",
          cursor: "se-resize",
          zIndex: 1000,
          background: "linear-gradient(135deg, transparent 6px, rgba(255, 255, 255, 0.1) 6px)"
        }}
        onMouseDown={handleResizeStart}
      />
    </div>
  );
};

export default Window;
