  import React, { useState } from "react";  // ✅ Correct import

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
            {['Frontend Development', 'Full Stack Engineering', 'UI/UX Design', 'Security Engineering', 'Database Architecture'].map(tag => (
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
            Frontend Development
          </h2>
          <p style={{ lineHeight: '1.6' }}>
            Proficient in modern React.js development with a focus on building beautiful, responsive interfaces. 
            Skilled in state management, hooks, and component architecture. Proficient in creating 
            pixel-perfect designs and implementing complex UI/UX patterns with optimal performance.
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
            Backend Engineering
          </h2>
          <p style={{ lineHeight: '1.6' }}>
            Proficient in Node.js and Express.js for building robust server applications. Experienced in designing 
            and implementing RESTful APIs, handling authentication, and managing complex database operations with 
            PostgreSQL. Strong focus on scalable and maintainable architectures.
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
            Database Architecture
          </h2>
          <p style={{ lineHeight: '1.6' }}>
            Advanced experience with PostgreSQL database design and management. Skilled in cleaning and preparing data for use in databases,
            deploying and integrating databases into full stack projects, and implementing secure data access patterns.
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
            Offensive Security
          </h2>
          <p style={{ lineHeight: '1.6' }}>
            Experienced in penetration testing and vulnerability assessment. Skilled in identifying and exploiting 
            web application vulnerabilities, conducting security audits, and developing custom security tools. 
            Proficient with industry-standard penetration testing frameworks.
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
            Defensive Security
          </h2>
          <p style={{ lineHeight: '1.6' }}>
            Skilled in implementing secure coding practices and building robust defense mechanisms. Skilled in 
            securing web applications against common attack vectors, implementing authentication systems, and 
            developing security-first architectures with multiple layers of protection.
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
            Full Stack Integration
          </h2>
          <p style={{ lineHeight: '1.6' }}>
            Skilled in connecting frontend and backend systems with secure, efficient architectures. Experienced 
            in developing full stack applications from conception to deployment, with expertise in both client-side 
            and server-side optimization techniques.
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
            {['Penetration Testing', 'Custom Malware', 'Digital Forensics', 'Application Security', 'Security Counseling'].map(tag => (
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
            Penetration Testing
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
            to send harassing messages. I used <strong>Wireshark</strong> and <strong>network traffic analysis </strong> 
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
          ⚖️
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
            Digital Justice Initiative
          </h1>
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            {['Forensic Technology', 'Machine Learning', 'Public Safety', 'Predictive Analysis', 'Social Impact'].map(tag => (
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
            The Digital Justice Initiative is a pioneering nonprofit organization dedicated to reducing violent crime 
            in underserved communities through advanced forensic technology. Our mission focuses on leveraging 
            cutting-edge data analysis and machine learning to protect vulnerable populations and enhance public safety.
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
            RogueHunter: Predictive Analysis Platform
          </h2>
          <p>
            Our flagship software, RogueHunter, represents a breakthrough in predictive crime analysis. Using advanced 
            Granger causality testing combined with sophisticated machine learning algorithms, the platform analyzes 
            complex time series data to predict potential criminal activity. Prototypes of our algorithm have already demonstrated remarkable 
            accuracy, successfully predicting crime rates a month in advance with 95-100% accuracy.
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
            Impact & Mission
          </h2>
          <p>
            A primary focus of our work is addressing the missing and murdered Indigenous women crisis. By combining 
            historical data analysis with real-time information processing, RogueHunter helps law enforcement agencies 
            allocate resources more effectively and implement preventive measures in high-risk areas. This data-driven 
            approach has already shown promising results in early intervention and crime prevention.
          </p>
        </div>
  
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '30px',
          borderRadius: '20px',
        }}>
          <h2 style={{
            fontSize: '24px',
            marginBottom: '15px',
            color: 'rgba(255, 255, 255, 0.9)',
          }}>
            Current Project
          </h2>
          <div style={{
            marginTop: '20px',
          }}>
            <div style={{
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
              <h3 style={{
                fontSize: '18px',
                marginBottom: '8px',
                color: 'rgba(255, 255, 255, 0.9)',
              }}>RogueHunter Platform</h3>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '8px',
              }}>In Development</div>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
              }}>Advanced predictive crime analysis system using machine learning and time series forecasting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default NonprofitContent;

  export const SettingsContent = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [startupSound, setStartupSound] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [sliderValue, setSliderValue] = useState(42);
    const [dropdownValue, setDropdownValue] = useState("Waffles");
    const [mysteryToggle, setMysteryToggle] = useState(false);
    const [selfDestruct, setSelfDestruct] = useState(false);

    return (
      <div style={{
        padding: '40px',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: "center"
      }}>
        {/* Title */}
        <div style={{ fontSize: '60px', marginBottom: '20px' }}>⚙️</div>
        <h1 style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
          background: "linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Useless Settings
        </h1>

        <div style={{
          display: "grid",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}>

          {/* Dark Mode */}
          <div style={settingStyle}>
            <span>Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={buttonStyle(darkMode)}
            >
              {darkMode ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Startup Sound */}
          <div style={settingStyle}>
            <span>Startup Sound</span>
            <button
              onClick={() => setStartupSound(!startupSound)}
              style={buttonStyle(startupSound)}
            >
              {startupSound ? "Enabled" : "Muted"}
            </button>
          </div>

          {/* Notifications */}
          <div style={settingStyle}>
            <span>Notifications</span>
            <button
              onClick={() => setNotifications(!notifications)}
              style={buttonStyle(notifications)}
            >
              {notifications ? "ON" : "OFF"}
            </button>
          </div>


          {/* Mystery Toggle */}
          <div style={settingStyle}>
            <span>Mystery Setting</span>
            <button
              onClick={() => setMysteryToggle(!mysteryToggle)}
              style={buttonStyle(mysteryToggle)}
            >
              {mysteryToggle ? "Activated" : "Inactive"}
            </button>
          </div>

          {/* Self Destruct */}
          <div style={settingStyle}>
            <span>Self-Destruct Mode</span>
            <button
              onClick={() => setSelfDestruct(!selfDestruct)}
              style={{
                ...buttonStyle(selfDestruct),
                backgroundColor: selfDestruct ? "red" : "black",
                color: selfDestruct ? "yellow" : "white",
              }}
            >
              {selfDestruct ? "RUN" : "Press Me"}
            </button>
          </div>

        </div>
      </div>
    );
  };

  /* ✅ Keep only one declaration of `settingStyle` */
  const settingStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "15px 20px",
    borderRadius: "10px",
    fontSize: "18px",
  };

  const buttonStyle = (active) => ({
    padding: "8px 15px",
    borderRadius: "8px",
    background: active ? "limegreen" : "gray",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  });
