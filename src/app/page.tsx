// app/page.tsx - Mobile-First Nurse Tools & Tech Landing
"use client";

import { useState } from 'react';

export default function Home() {
  const [isHardcoreTheme, setIsHardcoreTheme] = useState(true);
  return (
    <div style={{
      fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, -apple-system, sans-serif',
      margin: 0,
      background: isHardcoreTheme
        ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2a2a2a 50%, #ff0000 75%, #000000 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #f1f5f9 100%)',
      color: isHardcoreTheme ? '#ffffff' : '#1f2937',
      lineHeight: isHardcoreTheme ? 1.4 : 1.6,
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    }}>
      {/* Mobile-First Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isHardcoreTheme ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `3px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
        padding: '20px 25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: isHardcoreTheme ? '0 0 20px rgba(255, 0, 0, 0.3)' : '0 0 20px rgba(37, 99, 235, 0.2)',
        transition: 'all 0.3s ease'
      }}>
        {/* Animated Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            fontSize: '3rem',
            animation: isHardcoreTheme ? 'pulse 2s ease-in-out infinite' : 'none',
            filter: isHardcoreTheme ? 'drop-shadow(0 0 15px rgba(255, 0, 0, 0.8))' : 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))',
            textShadow: isHardcoreTheme ? '2px 2px 4px rgba(0, 0, 0, 0.8)' : '1px 1px 2px rgba(0, 0, 0, 0.3)'
          }}>⚕️</div>
          <div style={{
            fontSize: '2rem',
            fontWeight: '900',
            letterSpacing: '0.2em',
            color: isHardcoreTheme ? '#ff0000' : '#2563eb',
            textShadow: isHardcoreTheme ? '3px 3px 6px rgba(0, 0, 0, 0.9)' : '2px 2px 4px rgba(37, 99, 235, 0.3)',
            animation: isHardcoreTheme ? 'glow 3s ease-in-out infinite alternate' : 'none',
            fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
          }}>
            NURSE TOOLS & TECH
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          style={{
            display: 'block',
            background: isHardcoreTheme ? 'rgba(255, 0, 0, 0.2)' : 'rgba(37, 99, 235, 0.2)',
            border: `2px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
            color: isHardcoreTheme ? '#ffffff' : '#1f2937',
            padding: '10px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontWeight: '900',
            fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
          }}
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            }
          }}
        >
          <span style={{fontSize: '1.4rem'}}>☰</span>
        </button>

        {/* Desktop Navigation */}
        <div id="desktop-nav" style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px'
        }}>
          <a href="/" style={{
            color: isHardcoreTheme ? '#ffffff' : '#1f2937',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            padding: '10px 20px',
            borderRadius: '4px',
            transition: 'all 0.2s ease',
            border: '2px solid transparent',
            textTransform: 'uppercase',
            fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
          }}>HOME</a>
          <a href="/blogs" style={{
            color: isHardcoreTheme ? '#ffffff' : '#1f2937',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            padding: '10px 20px',
            borderRadius: '4px',
            transition: 'all 0.2s ease',
            border: '2px solid transparent',
            textTransform: 'uppercase',
            fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
          }}>BLOGS</a>
          <a href="/request-customer-product" style={{
            color: isHardcoreTheme ? '#ffffff' : '#ffffff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            padding: '10px 20px',
            borderRadius: '4px',
            transition: 'all 0.2s ease',
            border: `2px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
            background: isHardcoreTheme ? 'rgba(255, 0, 0, 0.1)' : 'rgba(37, 99, 235, 0.1)',
            textTransform: 'uppercase',
            fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
          }}>CUSTOM APPS</a>
          <button
            onClick={() => setIsHardcoreTheme(!isHardcoreTheme)}
            style={{
              background: isHardcoreTheme ? 'rgba(255, 0, 0, 0.2)' : 'rgba(37, 99, 235, 0.2)',
              border: `2px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
              color: isHardcoreTheme ? '#ffffff' : '#1f2937',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontWeight: '900',
              fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              letterSpacing: '0.05em'
            }}
          >
            {isHardcoreTheme ? '☀️ LIGHT' : '🌙 DARK'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" style={{
        display: 'none',
        position: 'fixed',
        top: '100%',
        left: 0,
        right: 0,
        background: isHardcoreTheme ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `3px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
        flexDirection: 'column',
        padding: '25px',
        zIndex: 999,
        boxShadow: isHardcoreTheme ? '0 0 20px rgba(255, 0, 0, 0.3)' : '0 0 20px rgba(37, 99, 235, 0.2)',
        transition: 'all 0.3s ease'
      }}>
        <a href="/" style={{
          color: isHardcoreTheme ? '#ffffff' : '#1f2937',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '900',
          padding: '15px 0',
          borderBottom: `1px solid ${isHardcoreTheme ? 'rgba(255, 0, 0, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
        }}>HOME</a>
        <a href="/blogs" style={{
          color: isHardcoreTheme ? '#ffffff' : '#1f2937',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '900',
          padding: '15px 0',
          borderBottom: `1px solid ${isHardcoreTheme ? 'rgba(255, 0, 0, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
        }}>BLOGS</a>
        <a href="/request-customer-product" style={{
          color: isHardcoreTheme ? '#ff0000' : '#2563eb',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '900',
          padding: '15px 0',
          borderBottom: `1px solid ${isHardcoreTheme ? 'rgba(255, 0, 0, 0.3)' : 'rgba(37, 99, 235, 0.3)'}`,
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
        }}>CUSTOM APPS</a>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes glow {
          from { 
            filter: brightness(1) drop-shadow(0 0 5px rgba(34, 197, 94, 0.3));
          }
          to { 
            filter: brightness(1.2) drop-shadow(0 0 15px rgba(34, 197, 94, 0.6));
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Mobile-First Responsive */
        @media (min-width: 768px) {
          #desktop-nav {
            display: flex !important;
          }
          #mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* HERO SECTION - Mobile First */}
      <section style={{
        padding: '120px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Effects */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: isHardcoreTheme
            ? 'radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 3s ease-in-out infinite',
          filter: 'blur(50px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: isHardcoreTheme
            ? 'radial-gradient(circle, rgba(255, 0, 0, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite reverse',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '80%',
          width: '150px',
          height: '150px',
          background: isHardcoreTheme
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite',
          filter: 'blur(30px)'
        }}></div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 0, 0, 0.2)',
            border: '2px solid #ff0000',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '1.2rem',
            fontWeight: '900',
            marginBottom: '32px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            fontFamily: '"Impact", "Arial Black", sans-serif'
          }}>
            <span style={{width: '12px', height: '12px', background: '#ff0000', borderRadius: '50%', animation: 'pulse 1s infinite'}}></span>
            PREMIUM DIGITAL TOOLS
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: '900',
            lineHeight: '1',
            marginBottom: '24px',
            color: isHardcoreTheme ? '#ffffff' : '#1f2937',
            textShadow: isHardcoreTheme
              ? '4px 4px 8px rgba(0, 0, 0, 1)'
              : '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif',
            textTransform: isHardcoreTheme ? 'uppercase' : 'none',
            letterSpacing: isHardcoreTheme ? '0.05em' : 'normal'
          }}>
            {isHardcoreTheme ? 'DOMINATE YOUR' : 'Master Your'}<br/>
            <span style={{
              color: isHardcoreTheme ? '#ff0000' : '#2563eb',
              textShadow: isHardcoreTheme
                ? '4px 4px 8px rgba(255, 0, 0, 0.8)'
                : '2px 2px 4px rgba(37, 99, 235, 0.3)'
            }}>
              {isHardcoreTheme ? 'NURSING SHIFT' : 'Nursing Workflow'}
            </span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
            color: isHardcoreTheme ? '#cccccc' : '#4b5563',
            lineHeight: '1.4',
            marginBottom: '50px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontWeight: '700',
            textShadow: isHardcoreTheme ? '1px 1px 2px rgba(0, 0, 0, 0.8)' : 'none'
          }}>
            {isHardcoreTheme
              ? 'GET UNLIMITED ACCESS TO THE PRO NURSE PDF BUNDLE. SHIFT SCHEDULER • SBAR HANDOFF • MED TIMELINE • FATIGUE TRACKER • SLEEP PLANNER • BRAIN TIPS. DOMINATE YOUR WORKFLOW LIKE A BOSS.'
              : 'Get unlimited access to the comprehensive Nurse PDF Bundle. Includes shift scheduling, handoff tools, medication tracking, fatigue monitoring, and productivity aids. Streamline your nursing workflow today.'
            }
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <button style={{
              background: isHardcoreTheme
                ? 'linear-gradient(135deg, #ff0000, #cc0000)'
                : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: '#ffffff',
              border: `3px solid ${isHardcoreTheme ? '#ffffff' : '#1e40af'}`,
              padding: '20px 40px',
              borderRadius: isHardcoreTheme ? '4px' : '8px',
              fontSize: '1.4rem',
              fontWeight: '900',
              cursor: 'pointer',
              boxShadow: isHardcoreTheme
                ? '0 0 30px rgba(255, 0, 0, 0.6)'
                : '0 4px 15px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.2s ease',
              minWidth: '300px',
              textTransform: isHardcoreTheme ? 'uppercase' : 'none',
              letterSpacing: isHardcoreTheme ? '0.1em' : 'normal',
              fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = isHardcoreTheme
                ? '0 0 40px rgba(255, 0, 0, 0.9)'
                : '0 8px 25px rgba(37, 99, 235, 0.4)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = isHardcoreTheme
                ? '0 0 30px rgba(255, 0, 0, 0.6)'
                : '0 4px 15px rgba(37, 99, 235, 0.3)';
            }}
            >
              {isHardcoreTheme ? '🔥 GRAB YOUR BUNDLE NOW' : '📥 Download PDF Bundle'}
            </button>

            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a href="/request-customer-product" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '900',
                padding: '12px 24px',
                border: '2px solid #ff0000',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                background: 'rgba(255, 0, 0, 0.1)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Impact", "Arial Black", sans-serif'
              }}>⚡ Custom Apps</a>
            </div>
          </div>

          {/* Urgency Banner */}
          <div style={{
            display: isHardcoreTheme ? 'inline-block' : 'none',
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #ff0000',
            color: '#ff0000',
            padding: '15px 30px',
            borderRadius: '4px',
            fontSize: '1.1rem',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
            fontFamily: '"Impact", "Arial Black", sans-serif'
          }}>
            🔥 LIMITED TIME: UNLIMITED PRINTS 🔥
          </div>
        </div>
      </section>

      {/* PDF BUNDLE SHOWCASE - Mobile First */}
      <section style={{
        padding: '60px 20px',
        background: isHardcoreTheme
          ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
        borderTop: `3px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 5s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 7s ease-in-out infinite reverse'
        }}></div>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '900',
              marginBottom: '20px',
              color: isHardcoreTheme ? '#ffffff' : '#1f2937',
              textShadow: isHardcoreTheme ? '3px 3px 6px rgba(0, 0, 0, 0.9)' : 'none',
              textTransform: isHardcoreTheme ? 'uppercase' : 'none',
              letterSpacing: isHardcoreTheme ? '0.05em' : 'normal',
              fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
            }}>
              {isHardcoreTheme ? 'PRO NURSE PDF BUNDLE' : 'Comprehensive Nurse PDF Bundle'}
            </h2>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              color: isHardcoreTheme ? '#cccccc' : '#4b5563',
              lineHeight: '1.4',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: '700',
              textShadow: isHardcoreTheme ? '1px 1px 2px rgba(0, 0, 0, 0.8)' : 'none'
            }}>
              {isHardcoreTheme
                ? 'DOMINATE YOUR SHIFT WITH THESE POWERFUL TOOLS. UNLIMITED PRINTS • DOWNLOAD NOW • CRUSH YOUR WORKFLOW.'
                : 'Access comprehensive tools designed for nursing professionals. Includes everything you need to streamline your workflow and enhance patient care.'
              }
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {/* Bundle Item 1 */}
            <div style={{
              background: isHardcoreTheme ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
              border: `2px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
              borderRadius: isHardcoreTheme ? '4px' : '8px',
              padding: '30px',
              transition: 'all 0.2s ease',
              boxShadow: isHardcoreTheme
                ? '0 0 15px rgba(255, 0, 0, 0.3)'
                : '0 4px 15px rgba(37, 99, 235, 0.1)'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = isHardcoreTheme
                ? '0 0 25px rgba(255, 0, 0, 0.6)'
                : '0 8px 25px rgba(37, 99, 235, 0.2)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = isHardcoreTheme
                ? '0 0 15px rgba(255, 0, 0, 0.3)'
                : '0 4px 15px rgba(37, 99, 235, 0.1)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>📅</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '900',
                marginBottom: '10px',
                color: isHardcoreTheme ? '#ffffff' : '#1f2937',
                textAlign: 'center',
                textTransform: isHardcoreTheme ? 'uppercase' : 'none',
                letterSpacing: isHardcoreTheme ? '0.05em' : 'normal',
                fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
              }}>Shift Scheduler</h3>
              <p style={{
                color: isHardcoreTheme ? '#cccccc' : '#4b5563',
                lineHeight: '1.4',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                {isHardcoreTheme
                  ? 'CRUSH YOUR SCHEDULE. TRACK HOURS. DOMINATE YOUR SHIFTS LIKE A BOSS.'
                  : 'Organize your work schedule, track hours, and plan your shifts efficiently.'
                }
              </p>
            </div>

            {/* Bundle Item 2 */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #ff0000',
              borderRadius: '4px',
              padding: '30px',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>📋</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '900',
                marginBottom: '10px',
                color: '#ffffff',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Impact", "Arial Black", sans-serif'
              }}>SBAR Handoff Tool</h3>
              <p style={{
                color: '#cccccc',
                lineHeight: '1.4',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                PERFECT HANDOFFS EVERY TIME. SITUATION • BACKGROUND • ASSESSMENT • RECOMMENDATION.
              </p>
            </div>

            {/* Bundle Item 3 */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #ff0000',
              borderRadius: '4px',
              padding: '30px',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>⏰</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '900',
                marginBottom: '10px',
                color: '#ffffff',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Impact", "Arial Black", sans-serif'
              }}>Med Timeline</h3>
              <p style={{
                color: '#cccccc',
                lineHeight: '1.4',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                NEVER MISS A MED. TRACK SCHEDULES. DOMINATE MEDICATION MANAGEMENT.
              </p>
            </div>

            {/* Bundle Item 4 */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #ff0000',
              borderRadius: '4px',
              padding: '30px',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>😴</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '900',
                marginBottom: '10px',
                color: '#ffffff',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Impact", "Arial Black", sans-serif'
              }}>Fatigue Tracker</h3>
              <p style={{
                color: '#cccccc',
                lineHeight: '1.4',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                BEAT FATIGUE BEFORE IT BEATS YOU. MONITOR • TRACK • RECOVER LIKE A CHAMP.
              </p>
            </div>

            {/* Bundle Item 5 */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #ff0000',
              borderRadius: '4px',
              padding: '30px',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>🌙</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '900',
                marginBottom: '10px',
                color: '#ffffff',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Impact", "Arial Black", sans-serif'
              }}>Sleep Recovery Planner</h3>
              <p style={{
                color: '#cccccc',
                lineHeight: '1.4',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                MAXIMIZE YOUR REST. PLAN RECOVERY. OPTIMIZE SLEEP. DOMINATE TOMORROW.
              </p>
            </div>

            {/* Bundle Item 6 */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #ff0000',
              borderRadius: '4px',
              padding: '30px',
              transition: 'all 0.2s ease',
              boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = '0 0 25px rgba(255, 0, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.3)';
            }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px',
                textAlign: 'center'
              }}>🧠</div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '900',
                marginBottom: '10px',
                color: '#ffffff',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Impact", "Arial Black", sans-serif'
              }}>Nurse Brain Tips</h3>
              <p style={{
                color: '#cccccc',
                lineHeight: '1.4',
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                MEMORY AIDS • ORGANIZATION SHEETS • PRODUCTIVITY HACKS • STAY SHARP.
              </p>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px'
          }}>
            <div style={{
              display: 'inline-block',
              background: isHardcoreTheme ? 'rgba(255, 0, 0, 0.2)' : 'rgba(37, 99, 235, 0.1)',
              border: `2px solid ${isHardcoreTheme ? '#ff0000' : '#2563eb'}`,
              color: isHardcoreTheme ? '#ffffff' : '#1f2937',
              padding: '15px 30px',
              borderRadius: isHardcoreTheme ? '4px' : '8px',
              fontSize: '1.2rem',
              fontWeight: '900',
              marginBottom: '30px',
              textTransform: isHardcoreTheme ? 'uppercase' : 'none',
              letterSpacing: isHardcoreTheme ? '0.05em' : 'normal',
              fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif',
              boxShadow: isHardcoreTheme ? '0 0 20px rgba(255, 0, 0, 0.5)' : '0 4px 15px rgba(37, 99, 235, 0.1)'
            }}>
              {isHardcoreTheme ? '⚡ PREMIUM.TENOL: EXECUTE ANY DOCUMENTS YOU NEED ⚡' : '📋 Premium.tenol: Custom document execution available'}
            </div>
            <button style={{
              background: isHardcoreTheme
                ? 'linear-gradient(135deg, #ff0000, #cc0000)'
                : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              color: '#ffffff',
              border: `3px solid ${isHardcoreTheme ? '#ffffff' : '#1e40af'}`,
              padding: '18px 36px',
              borderRadius: isHardcoreTheme ? '4px' : '8px',
              fontSize: '1.3rem',
              fontWeight: '900',
              cursor: 'pointer',
              boxShadow: isHardcoreTheme
                ? '0 0 25px rgba(255, 0, 0, 0.6)'
                : '0 4px 15px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.2s ease',
              textTransform: isHardcoreTheme ? 'uppercase' : 'none',
              letterSpacing: isHardcoreTheme ? '0.1em' : 'normal',
              fontFamily: isHardcoreTheme ? '"Impact", "Arial Black", sans-serif' : 'system-ui, sans-serif'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'scale(1.05)';
              target.style.boxShadow = isHardcoreTheme
                ? '0 0 35px rgba(255, 0, 0, 0.9)'
                : '0 8px 25px rgba(37, 99, 235, 0.4)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'scale(1)';
              target.style.boxShadow = isHardcoreTheme
                ? '0 0 25px rgba(255, 0, 0, 0.6)'
                : '0 4px 15px rgba(37, 99, 235, 0.3)';
            }}
            >
              {isHardcoreTheme ? '🔥 DOWNLOAD NOW - UNLIMITED PRINTS 🔥' : '📥 Download PDF Bundle'}
            </button>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS - Mobile First Grid */}
      <section style={{
        padding: '60px 20px',
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.5) 0%, rgba(17, 24, 39, 0.5) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '60px',
            background: 'linear-gradient(135deg, #ffffff, #e5e7eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Why Choose Nurse Tools & Tech?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}>
            {/* Feature Card 1 */}
            <div style={{
              background: 'rgba(31, 41, 55, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(-4px)';
              target.style.borderColor = 'rgba(34, 197, 94, 0.5)';
              target.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.1)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(0)';
              target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
              target.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #22c55e, #3b82f6)'
              }}></div>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>📋</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff'
              }}>Downloadable PDF Bundles</h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                fontSize: '1rem',
                marginBottom: '16px'
              }}>
                Professional PDF bundles with unlimited prints: Shift Scheduler, SBAR Handoff Tool, Med Timeline, Fatigue Tracker, Sleep Recovery Planner, and Nurse Brain Tips & Organization Sheets.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <span style={{
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#22c55e',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>✨ Unlimited Prints</span>
                <span style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  color: '#3b82f6',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>📄 Premium.tenol</span>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div style={{
              background: 'rgba(31, 41, 55, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(-4px)';
              target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
              target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.1)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(0)';
              target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
              target.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)'
              }}></div>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>🤝</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff'
              }}>Custom App Development</h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Tailored mobile and web applications designed specifically for nursing workflows and patient care needs.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div style={{
              background: 'rgba(31, 41, 55, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(-4px)';
              target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              target.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.1)';
            }}
            onMouseOut={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'translateY(0)';
              target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
              target.style.boxShadow = 'none';
            }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)'
              }}></div>
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>⚡</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff'
              }}>Nursing Technology Solutions</h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Comprehensive technology solutions including app implementations, digital tools, and workflow optimization for modern nursing practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '40px 20px',
        borderTop: `1px solid ${isHardcoreTheme ? 'rgba(55, 65, 81, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
        background: isHardcoreTheme ? 'rgba(12, 10, 9, 0.5)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '32px'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{
                fontSize: '2rem',
                filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))'
              }}>⚕️</div>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: '900',
                letterSpacing: '0.1em',
                background: 'linear-gradient(135deg, #22c55e, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>NURSE TOOLS & TECH</div>
            </div>
            <p style={{
              color: isHardcoreTheme ? '#9ca3af' : '#6b7280',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              Essential tools and technology solutions designed to help hardworking nurses thrive, from premium PDF templates to custom app designs and implementations.
            </p>
          </div>

          <div>
            <h4 style={{
              color: isHardcoreTheme ? '#ffffff' : '#1f2937',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '16px'
            }}>Quick Links</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <a href="/" style={{color: isHardcoreTheme ? '#9ca3af' : '#6b7280', textDecoration: 'none', fontSize: '0.95rem'}}>Home</a>
              <a href="/blogs" style={{color: isHardcoreTheme ? '#9ca3af' : '#6b7280', textDecoration: 'none', fontSize: '0.95rem'}}>Blogs</a>
              <a href="/request-customer-product" style={{color: isHardcoreTheme ? '#9ca3af' : '#6b7280', textDecoration: 'none', fontSize: '0.95rem'}}>Custom Requests</a>
            </div>
          </div>

          <div>
            <h4 style={{
              color: isHardcoreTheme ? '#ffffff' : '#1f2937',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '16px'
            }}>Connect</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <div style={{color: isHardcoreTheme ? '#9ca3af' : '#6b7280', fontSize: '0.95rem'}}>📧 support@nursegear.com</div>
              <div style={{color: isHardcoreTheme ? '#9ca3af' : '#6b7280', fontSize: '0.95rem'}}>📚 Resource Library</div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid ${isHardcoreTheme ? 'rgba(55, 65, 81, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
          paddingTop: '24px',
          textAlign: 'center',
          color: isHardcoreTheme ? '#6b7280' : '#9ca3af',
          fontSize: '0.9rem'
        }}>
          © 2026 Nurse Tools & Tech. All rights reserved. | Built for nurses, by nurses.
        </div>
      </footer>
    </div>
  );
}
