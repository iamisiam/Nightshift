// app/page.tsx - Mobile-First Nurse Tools & Tech Landing
"use client";

export default function Home() {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      margin: 0,
      background: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 25%, #292524 50%, #3f3f46 75%, #18181b 100%)',
      color: '#fafaf9',
      lineHeight: 1.6,
      minHeight: '100vh'
    }}>
      {/* Mobile-First Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(12, 10, 9, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Animated Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            fontSize: '2.5rem',
            animation: 'pulse 3s ease-in-out infinite',
            filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))'
          }}>⚕️</div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            letterSpacing: '0.1em',
            background: 'linear-gradient(135deg, #22c55e, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
            animation: 'glow 4s ease-in-out infinite alternate'
          }}>
            NURSE TOOLS & TECH
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          id="mobile-menu-btn"
          style={{
            display: 'block',
            background: 'transparent',
            border: '2px solid #22c55e',
            color: '#22c55e',
            padding: '8px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
            }
          }}
        >
          <span style={{fontSize: '1.2rem'}}>☰</span>
        </button>

        {/* Desktop Navigation */}
        <div id="desktop-nav" style={{
          display: 'none',
          alignItems: 'center',
          gap: '32px'
        }}>
          <a href="/" style={{
            color: '#e5e7eb',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}>HOME</a>
          <a href="/blogs" style={{
            color: '#e5e7eb',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}>BLOGS</a>
          <a href="/request-customer-product" style={{
            color: '#e5e7eb',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            padding: '8px 16px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            border: '1px solid transparent'
          }}>REQUEST CUSTOMER PRODUCT</a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" style={{
        display: 'none',
        position: 'fixed',
        top: '100%',
        left: 0,
        right: 0,
        background: 'rgba(12, 10, 9, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(251, 191, 36, 0.2)',
        flexDirection: 'column',
        padding: '20px',
        zIndex: 999
      }}>
        <a href="/" style={{
          color: '#e5e7eb',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '600',
          padding: '12px 0',
          borderBottom: '1px solid rgba(55, 65, 81, 0.3)',
          marginBottom: '8px'
        }}>HOME</a>
        <a href="/blogs" style={{
          color: '#e5e7eb',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '600',
          padding: '12px 0',
          borderBottom: '1px solid rgba(55, 65, 81, 0.3)',
          marginBottom: '8px'
        }}>BLOGS</a>
        <a href="/request-customer-product" style={{
          color: '#e5e7eb',
          textDecoration: 'none',
          fontSize: '1.1rem',
          fontWeight: '600',
          padding: '12px 0',
          borderBottom: '1px solid rgba(55, 65, 81, 0.3)',
          marginBottom: '8px'
        }}>REQUEST CUSTOMER PRODUCT</a>
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
          top: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'pulse 6s ease-in-out infinite reverse'
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
            background: 'rgba(251, 191, 36, 0.1)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            color: '#fbbf24',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '600',
            marginBottom: '24px',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{width: '8px', height: '8px', background: '#fbbf24', borderRadius: '50%', animation: 'pulse 2s infinite'}}></span>
            NURSE EMPOWERMENT PLATFORM
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #d1d5db 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
          }}>
            Empowering Nurses<br/>
            <span style={{
              background: 'linear-gradient(135deg, #22c55e, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Through Innovation</span>
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            color: '#9ca3af',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            We provide hardworking nurses with the essential tools they need—premium PDF templates and custom app designs and implementations—to help them thrive in their demanding roles.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: '#ffffff',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.3s ease',
              minWidth: '250px'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'translateY(-2px)';
              target.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.4)';
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 10px 30px rgba(34, 197, 94, 0.3)';
            }}
            >
              🚀 Explore Nurse Tools & Tech
            </button>

            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a href="/blogs" style={{
                color: '#22c55e',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '8px 16px',
                border: '2px solid #22c55e',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>📚 Read Blogs</a>
              <a href="/request-customer-product" style={{
                color: '#3b82f6',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '8px 16px',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}>💬 Custom Requests</a>
            </div>
          </div>

          {/* Feature Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              color: '#22c55e',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>⚡ Real-Time Tools</div>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#3b82f6',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>🎓 Education Hub</div>
            <div style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#8b5cf6',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>🤝 Community Support</div>
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
              <div style={{fontSize: '3rem', marginBottom: '16px'}}>🧠</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '12px',
                color: '#ffffff'
              }}>Premium PDF Templates</h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Professional, customizable PDF templates for shift planning, documentation, and patient care management.
              </p>
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
        borderTop: '1px solid rgba(55, 65, 81, 0.3)',
        background: 'rgba(12, 10, 9, 0.5)',
        backdropFilter: 'blur(10px)'
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
              color: '#9ca3af',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              Essential tools and technology solutions designed to help hardworking nurses thrive, from premium PDF templates to custom app designs and implementations.
            </p>
          </div>

          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '16px'
            }}>Quick Links</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <a href="/" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem'}}>Home</a>
              <a href="/blogs" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem'}}>Blogs</a>
              <a href="/request-customer-product" style={{color: '#9ca3af', textDecoration: 'none', fontSize: '0.95rem'}}>Custom Requests</a>
            </div>
          </div>

          <div>
            <h4 style={{
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '700',
              marginBottom: '16px'
            }}>Connect</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <div style={{color: '#9ca3af', fontSize: '0.95rem'}}>📧 support@nursegear.com</div>
              <div style={{color: '#9ca3af', fontSize: '0.95rem'}}>📱 Community Forum</div>
              <div style={{color: '#9ca3af', fontSize: '0.95rem'}}>📚 Resource Library</div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(55, 65, 81, 0.3)',
          paddingTop: '24px',
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.9rem'
        }}>
          © 2026 Nurse Tools & Tech. All rights reserved. | Built for nurses, by nurses.
        </div>
      </footer>
    </div>
  );
}
