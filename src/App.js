import React, { useState } from "react";
import Dock from "./components/Dock";
import Window from "./components/Window";
import DesktopIcon from "./components/DesktopIcon";
import {
  AboutMeContent,
  SkillsContent,
  SecurityContent,
  NonprofitContent,
  SettingsContent,
} from "./components/WindowContent";
import "./App.css";
import HackerTerminal from "./components/HackerTerminal";

const App = () => {
  const dockHeight = 50;
  const [windows, setWindows] = useState([]);
  const [icons, setIcons] = useState([
    { id: 1, name: "Terminal", icon: "💻", content: "Documents Content", position: { x: 20, y: 130 } },
    { id: 2, name: "Browser", icon: "🌐", content: "Projects Content", position: { x: 20, y: 230 } },
    { id: 3, name: "Downloads", icon: "⬇️", content: "Downloads Content", position: { x: 20, y: 330 } },
    { id: 4, name: "Recycle Bin", icon: "🗑️", content: "I'm out of cute easter egg ideas...for now. Until then, enjoy this empty space XD", position: { x: 20, y: 430 } },
  ]);
  const [booted, setBooted] = useState(false);
  const [fadeInStage, setFadeInStage] = useState(0);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [blackScreenOpacity, setBlackScreenOpacity] = useState(1);

  const openWindow = (app) => {
    let content = app.content;
    let width = 625;
    let height = 600;
  
    if (app.name === "About Me") {
      content = <AboutMeContent />;
    } else if (app.name === "Skills") {
      content = <SkillsContent />;
    } else if (app.name === "Security") {
      content = <SecurityContent />;
    } else if (app.name === "Nonprofit") {
      content = <NonprofitContent />;
    } else if (app.name === "Settings") {
      content = <SettingsContent />;
    } else if (app.name === "Terminal") { // ✅ Open hacker terminal when clicking Documents
      content = (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>Type fast to hack! (This is really how it works btw)</h2>
          <HackerTerminal />
        </div>
      );
    } else if (app.name === "Browser") { // ✅ Rickroll when clicking Projects
      content = (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>The only web page you need</h2>
          <img 
            src={`${process.env.PUBLIC_URL}/rickroll.gif`}  // ✅ Show Rickroll GIF
            alt="Rickroll" 
            style={{ maxWidth: "100%", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
          />
        </div>
      );
    } else if (app.name === "Downloads") { // ✅ Fake file explorer with The Game joke
      content = (
        <div style={{ padding: "20px" }}>
          <h2>Downloads</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "10px",
            marginTop: "15px"
          }}>
            {["You.txt", "Have", "Just", "Lost.txt", "The.txt", "Game.txt"].map((file, index) => (
              <div key={index} style={{
                padding: "10px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.1)",
                textAlign: "center",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background 0.2s",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
              }}
              onClick={() => alert("You lost The Game.")} // 😂 Clicking any file triggers The Game joke
              >
                📄 {file}
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    // ✅ Single state update, removed duplicate `setWindows` call
    setWindows((prev) => [
      ...prev,
      { id: Date.now(), title: app.name, content: content, width: width, height: height },
    ]);
  };
  
    

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  const handleIconDrag = (id, e) => {
    const iconIndex = icons.findIndex((icon) => icon.id === id);
    if (iconIndex === -1) return;

    const newIcons = [...icons];
    const newX = newIcons[iconIndex].position.x + e.movementX;
    const newY = newIcons[iconIndex].position.y + e.movementY;

    if (newY < dockHeight) {
      newIcons[iconIndex].position.y = newIcons[iconIndex].position.y;
    } else {
      newIcons[iconIndex].position.x = newX;
      newIcons[iconIndex].position.y = newY;
    }

    setIcons(newIcons);
  };

  const handleBoot = () => {
    setTimeout(() => setFadeInStage(1), 100);
    setTimeout(() => setFadeInStage(2), 1800);
    setTimeout(() => setFadeInStage(3), 1900);

    setTimeout(() => setBlackScreenOpacity(0), 800);
    setTimeout(() => setButtonVisible(false), 100);
    setTimeout(() => setBooted(true), 3000);
  };

  return (
    <div className="desktop">
      {!booted && (
        <div
          className="fixed inset-0 bg-black flex justify-center items-center"
          style={{
            zIndex: 1000,
            opacity: blackScreenOpacity,
            transition: "opacity 2s ease-in-out",
          }}
        >
          {buttonVisible && (
            <button
              onClick={handleBoot}
              style={{
                padding: "20px 50px",
                fontSize: "24px",
                color: "white",
                backgroundColor: "#1a73e8",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, opacity 1s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Click to Boot Up My Portfolio
            </button>
          )}
        </div>
      )}

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        style={{
          opacity: fadeInStage >= 1 ? 1 : 0,
          transition: "opacity 2s ease-in-out",
          zIndex: 40,
        }}
      >
        <h1 className="text-white text-8xl font-bold text-center">
          <span>Sarah</span>
          <span style={{ fontSize: "130%", display: "inline-block", marginLeft: "8px" }}>OS</span>
        </h1>
        <p
          className="subheading"
          style={{
            fontSize: '25px',
            fontWeight: 100,
          }}>Aesthetics and Security</p>
      </div>

      <div
        className="desktop-icons"
        style={{
          opacity: fadeInStage >= 2 ? 1 : 0,
          transition: "opacity 2s ease-in-out",
        }}
      >
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="absolute cursor-pointer"
            style={{
              left: `${icon.position.x}px`,
              top: `${icon.position.y}px`,
            }}
            onMouseDown={(e) => {
              const onDrag = (event) => handleIconDrag(icon.id, event);
              const onDragEnd = () => {
                document.removeEventListener("mousemove", onDrag);
                document.removeEventListener("mouseup", onDragEnd);
              };
              document.addEventListener("mousemove", onDrag);
              document.addEventListener("mouseup", onDragEnd);
            }}
          >
            <DesktopIcon
              name={icon.name}
              icon={icon.icon}
              onDoubleClick={() => openWindow(icon)}
            />
          </div>
        ))}
      </div>

      <div
      >
    <Dock
      apps={[
        { name: "About Me", icon: "📜", content: "About Me Content" },
        { name: "Skills", icon: "📂", content: "Skills Content" },
        { name: "Security", icon: "🛡️", content: "Security Content" },
        { name: "Nonprofit", icon: "🌍", content: "Nonprofit Content" },
        { name: "Settings", icon: "⚙️", content: "Settings Content" },
      ]}
      onAppClick={openWindow}
      booted={booted} // Pass booted state
    />

      </div>

      {windows.map((win) => (
        <Window
          key={win.id}
          title={win.title}
          content={win.content}
          width={win.width}
          height={win.height}
          onClose={() => closeWindow(win.id)}
        />
      ))}
    </div>
  );
};

export default App;