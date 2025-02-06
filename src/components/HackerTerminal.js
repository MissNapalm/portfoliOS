import React, { useEffect, useState } from "react";

const fakeCommands = [
  "Initializing backdoor access...",
  "Bypassing firewall ⏳...",
  "Injecting payload into memory...",
  "Brute-forcing SSH credentials...",
  "Decrypting RSA-4096 🔑...",
  "Exploiting zero-day vulnerability...",
  "Establishing reverse shell connection...",
  "Uploading rootkit 📤...",
  "Accessing darknet market...",
  "Intercepting secure communications...",
  "Deploying AI-powered exploit...",
  "Compiling malware binaries...",
  "Exfiltrating sensitive data...",
  "Scraping credentials from RAM...",
  "Decoding base64-encoded payload...",
  "Executing privilege escalation...",
  "Wiping logs to cover tracks...",
  "Deploying botnet instance...",
  "Escaping virtualized sandbox environment...",
  "Access granted. Root privileges enabled. ✅",
];

const HackerTerminal = () => {
  const [logs, setLogs] = useState(["Booting up hacker console...\n"]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = fakeCommands[Math.floor(Math.random() * fakeCommands.length)];
      setLogs((prevLogs) => [...prevLogs, newLog]);
    }, 500); // Generates a new line every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "limegreen",
        fontFamily: "monospace",
        padding: "20px",
        height: "400px",
        overflowY: "auto",
        whiteSpace: "pre-wrap",
        borderRadius: "10px",
        border: "2px solid limegreen",
        boxShadow: "0 0 10px limegreen",
      }}
    >
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </div>
  );
};

export default HackerTerminal;
