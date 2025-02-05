import React from "react";

const sectionStyle = {
  padding: "40px",
  color: "rgba(255, 255, 255, 0.9)",
  maxWidth: "900px",
  margin: "0 auto",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(255, 255, 255, 0.05)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
};

export const AboutMeContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '800px',
    margin: '0 auto',
  }}>
    <div style={{
      display: 'flex',
      gap: '40px',
      marginBottom: '40px',
    }}>
      <div style={{
        fontSize: '120px',
        width: '200px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}>
        👩‍💻
      </div>
      
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '15px',
          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Sarah Clark
        </h1>
        <h2 style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '20px',
        }}>
          Frontend Developer & Security Engineer
        </h2>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {['Frontend', 'Security', 'React', 'UI/UX'].map(tag => (
            <span key={tag} style={{
              padding: '6px 12px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              fontSize: '14px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      padding: '30px',
      borderRadius: '20px',
      marginBottom: '30px',
    }}>
      <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        Hello! I'm a passionate frontend developer with a unique twist - I specialize in creating beautiful, 
        intuitive web interfaces while maintaining a strong focus on security. With experience in web development 
        and security practices, I bridge the gap between aesthetics and protection.

      </p>
      <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        I began studying cybersecurity and hacking while working as a caregiver for my father, then moved on to 
        REST APIs, full stack applications, and finally frontend design. This diverse background gives me a unique 
        perspective on creating secure, user-friendly applications.

      </p>
      <p style={{ lineHeight: '1.6' }}>
        When I'm not coding or exploring security concepts, I contribute to open-source projects and mentor 
        aspiring developers. I believe in making technology both beautiful and secure, ensuring that users can 
        trust the applications they interact with.

      </p>
    </div>
  </div>
);

export const SkillsContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '900px',
    margin: '0 auto',
  }}>
    <div style={{
      display: 'flex',
      gap: '40px',
      marginBottom: '40px',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '80px',
        width: '160px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}>
        ⚡
      </div>
      
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '15px',
          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Skills
        </h1>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {['Offensive Security', 'App Development', 'Network Architecture', 'Threat Analysis', 'System Design'].map(tag => (
            <span key={tag} style={{
              padding: '6px 12px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              fontSize: '14px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '30px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '15px' }}></div>
        <h2 style={{
          fontSize: '22px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Penetration Testing
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Master of network infiltration using custom-crafted exploits and sophisticated attack vectors. Expert in Metasploit, 
          Burp Suite, and cutting-edge wireless hacking tools. Capable of bypassing enterprise-grade security systems and 
          conducting thorough vulnerability assessments.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '15px' }}></div>
        <h2 style={{
          fontSize: '22px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Full Stack Engineering
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Architect of scalable, secure applications using React, Node.js, and Python. Specialized in building 
          high-performance systems with military-grade security protocols. Expert in implementing advanced authentication 
          systems and real-time data processing pipelines.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '15px' }}></div>
        <h2 style={{
          fontSize: '22px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Digital Forensics
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Elite-level expertise in digital evidence collection and analysis. Proficient with advanced memory forensics 
          tools and custom-built analysis solutions. Specialist in reconstructing digital crime scenes and tracing 
          sophisticated attack patterns.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '15px' }}></div>
        <h2 style={{
          fontSize: '22px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Cloud Infrastructure
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Advanced practitioner in AWS and Google Cloud security architectures. Expert in deploying zero-trust 
          networks and implementing comprehensive cloud security solutions. Specialized in building resilient, 
          scalable infrastructure with bulletproof security measures.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '15px' }}></div>
        <h2 style={{
          fontSize: '22px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Threat Intelligence
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Master of OSINT techniques and threat actor profiling. Expert in developing predictive threat models 
          and implementing proactive defense strategies. Specialized in tracking advanced persistent threats 
          and analyzing emerging attack patterns.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
      }}>
        <div style={{ fontSize: '28px', marginBottom: '15px' }}></div>
        <h2 style={{
          fontSize: '22px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Secure Development
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          Expert in implementing defense-in-depth strategies and secure coding practices. Master of application 
          hardening techniques and security-first architecture. Specialized in building systems that remain 
          impenetrable against sophisticated cyber threats.
        </p>
      </div>
    </div>
  </div>
);

export const SecurityContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '900px',
    margin: '0 auto',
  }}>
    <div style={{
      display: 'flex',
      gap: '40px',
      marginBottom: '40px',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '80px',
        width: '160px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}>
        🔐
      </div>
      
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '15px',
          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Security Expertise
        </h1>
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap'
        }}>
          {['Penetration Testing', 'Custom Malware', 'Network Forensics', 'Application Security', 'Security Counseling'].map(tag => (
            <span key={tag} style={{
              padding: '6px 12px',
              borderRadius: '15px',
              background: 'rgba(255, 255, 255, 0.1)',
              fontSize: '14px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.6',
      }}>
        <p>
          My journey into cybersecurity started with curiosity and quickly evolved into a deep passion for penetration 
          testing, app security, and network forensics. Over the past eight years, I have built and secured applications 
          with multiple layers of security, conducted full-stack security audits, and developed malware capable of 
          bypassing modern defenses. My expertise spans offensive security, defensive engineering, and forensic analysis.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.6',
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Real-World Incident Response
        </h2>
        <p>
          I have consulted on cases of real-world hacking to defend individuals and systems from serious threats. This includes 
          detecting and terminating connections on backdoored Android devices, implementing robust security hardening for victims, 
          and providing comprehensive security counseling to ensure ongoing protection. I also advised individuals on how to then
          contact and interact with law enforcement and legal representation to keep them safe for good. My experience also includes 
          businesses on identifying and remediating security vulnerabilities before they can be exploited, helping organizations 
          strengthen their security posture proactively.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.6',
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Offensive Security
        </h2>
        <p>
          On the offensive side, I have successfully exploited fully patched Windows 11 machines <strong>with 
          firewalls enabled</strong>, bypassing security measures through privilege escalation and memory manipulation 
          techniques. I've used <strong>Metasploit</strong> and <strong>custom malware</strong> to infiltrate secure 
          environments, scraping credentials from memory, and evading antivirus detection. I have also conducted 
          wireless penetration tests against routers and IoT devices, utilizing <strong>Aircrack-ng</strong> to analyze 
          WPA2 handshakes and assess network vulnerabilities.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.6',
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Application Security
        </h2>
        <p>
          In application security, I have built and secured full-stack applications with multiple security layers, 
          implementing CSRF protection, salted hashing for authentication, and advanced permission-based access control 
          systems. I've performed <strong>code audits and security assessments</strong> on web applications, identifying 
          vulnerabilities such as insecure API endpoints, misconfigured authentication flows, and improper input 
          validation that could lead to SQL injection or XSS attacks.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.6',
      }}>
        <h2 style={{
          fontSize: '24px',
          marginBottom: '15px',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          Digital Forensics
        </h2>
        <p>
          My forensic work includes packet analysis on a simulated wiretap to trace a cybercriminal operating from a VM 
          to send harassing messages. I used <strong>Wireshark</strong> and <strong>network traffic analysis</strong> 
          techniques to identify patterns, track IP movements, and correlate activity to the suspect. I've also 
          conducted <strong>memory scraping attacks</strong> to extract credentials from live systems, demonstrating 
          the risk of improperly secured process memory.
        </p>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        padding: '30px',
        borderRadius: '20px',
        lineHeight: '1.6',
      }}>
        <p>
          My work bridges offense and defense, allowing me to develop and deploy security solutions while continuously 
          refining my penetration testing methodologies. Whether securing applications, testing network defenses, or 
          investigating cyber threats, I remain committed to evolving my techniques and staying ahead of emerging threats.
        </p>
      </div>
    </div>
  </div>
);



export const NonprofitContent = () => (
  <div style={sectionStyle}>
    <h1 style={{ fontSize: "32px", textAlign: "center", marginBottom: "30px" }}>Digital Justice Initiative</h1>
    <p style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.7)" }}>
      Developing forensic software tools for law enforcement agencies.
    </p>

    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
      {[
        { name: "Evidence Tracker Pro", status: "Deployed" },
        { name: "Mobile Analysis Suite", status: "Development" },
        { name: "Community Security Platform", status: "Beta" },
      ].map((project, index) => (
        <div key={index} style={{ padding: "25px", borderRadius: "15px", background: "rgba(255, 255, 255, 0.05)" }}>
          <h3>{project.name}</h3>
          <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>{project.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export const SettingsContent = () => (
  <div style={sectionStyle}>
    <h1 style={{ fontSize: "32px", textAlign: "center", marginBottom: "30px" }}>Settings</h1>
    <div style={{ display: "grid", gap: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {["Dark Mode", "Startup Sound", "Notifications"].map((setting, index) => (
        <div key={index} style={{ padding: "20px", borderRadius: "15px", background: "rgba(255, 255, 255, 0.05)" }}>
          <span>{setting}</span>
        </div>
      ))}
    </div>
  </div>
);
