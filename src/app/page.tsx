// app/page.tsx
"use client";

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      background: '#0f172a',
      color: '#e2e8f0',
      lineHeight: 1.6,
      minHeight: '100vh'
    }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 40px',
        background: 'rgba(10,12,18,.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1E2535'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Animated Nurse Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              fontSize: '2rem',
              animation: 'bounce 2s infinite'
            }}>👩‍⚕️</div>
            <div style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '1.8rem',
              letterSpacing: '.12em',
              background: 'linear-gradient(45deg, #22c55e, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'glow 3s ease-in-out infinite alternate'
            }}>
              Nurse Gear
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <a href="/" style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 500,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#A8B0BF',
              transition: 'color .2s'
            }}>Home</a>
            <a href="/blogs" style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 500,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#A8B0BF',
              transition: 'color .2s'
            }}>Blogs</a>
            <a href="#offer" style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 500,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#A8B0BF',
              transition: 'color .2s'
            }}>Shop</a>
          </div>
          
          {/* Theme Switcher */}
          <button 
            style={{
              background: 'transparent',
              border: '1px solid #334155',
              color: '#e2e8f0',
              padding: '8px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🌙 Dark
          </button>
          
          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 600,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              background: '#22c55e',
              color: '#000',
              padding: '9px 20px',
              border: 'none',
              cursor: 'pointer',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
            }}
          >
            Get Nurse Gear — $12.99
          </button>
        </div>
      </nav>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
          60% { transform: translateY(-2px); }
        }
        
        @keyframes glow {
          from { filter: brightness(1); }
          to { filter: brightness(1.2); }
        }
      `}</style>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* HERO */}
        <div style={{
          textAlign: 'center',
          padding: '100px 20px',
          marginBottom: '40px'
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '3rem',
            marginBottom: '20px'
          }}>Welcome to Nurse Gear</h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Essential tools and insights for nurses. From shift organization to fatigue management, 
            we've got everything you need to thrive in healthcare.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <a href="/blogs" style={{
              background: '#22c55e',
              color: '#000',
              padding: '12px 24px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}>Read Our Blogs</a>
            <button 
              onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
              style={{
                background: '#3b82f6',
                color: '#fff',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Shop Nurse Gear
            </button>
          </div>
        </div>

        {/* BEFORE */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>Before</h2>
          <div style={{
            background: '#1e293b',
            padding: '30px',
            borderRadius: '8px',
            border: '1px solid #334155'
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#ef4444',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✕</span>
                <span>Scribbling handoff notes on random paper scraps that fall out of your pocket</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#ef4444',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✕</span>
                <span>Forgetting which meds are due at 0200 when the fatigue hits hardest</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#ef4444',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✕</span>
                <span>Getting home and lying awake at 0900 despite being exhausted</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#ef4444',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✕</span>
                <span>No system to track your rotation — always reacting, never planning</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #334155',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#ef4444',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✕</span>
                <span>Fumbling through SBAR in front of a physician at shift change</span>
              </li>
              <li style={{
                padding: '12px 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#ef4444',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✕</span>
                <span>Burnout creeping in because you don't know what's working or breaking you</span>
              </li>
            </ul>
          </div>
        </div>

        {/* AFTER */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>After</h2>
          <div style={{
            background: '#0f5132',
            padding: '30px',
            borderRadius: '8px',
            border: '1px solid #059669'
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #059669',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#22c55e',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✓</span>
                <span>Structured SBAR sheet — complete, confident handoffs every single shift</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #059669',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#22c55e',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✓</span>
                <span>1900–0700 medication & task timeline so nothing slips at 0230</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #059669',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#22c55e',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✓</span>
                <span>Post-shift wind-down checklist that actually gets you to sleep in daylight</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #059669',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#22c55e',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✓</span>
                <span>3-week rotating scheduler — see your pattern, protect your recovery days</span>
              </li>
              <li style={{
                padding: '12px 0',
                borderBottom: '1px solid #059669',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#22c55e',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✓</span>
                <span>Nurse brain reference card always in your pocket for fast assessment</span>
              </li>
              <li style={{
                padding: '12px 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}>
                <span style={{
                  color: '#22c55e',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>✓</span>
                <span>Fatigue tracker reveals exactly what's draining you — and what fixes it</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          margin: '60px 0',
          textAlign: 'center'
        }} id="offer">
          <div 
            dangerouslySetInnerHTML={{
              __html: `<stripe-buy-button
                buy-button-id="buy_btn_1TLfalDmD8jmsJxFRrGnfU9r"
                publishable-key="pk_live_51RQh85DmD8jmsJxFIX38XYfCkF655F4phTR6McqYqmbMfdU6w0iVy8LUtkTWQc8yupZMu8jwKud8J7mVRsBKoEXQ00pbqDp1Mq"
              ></stripe-buy-button>`
            }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        padding: '40px',
        borderTop: '1px solid #1E2535',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.3rem',
          letterSpacing: '.12em'
        }}>
          <span style={{color: '#22c55e'}}>Nurse</span>
          <span style={{color: '#3b82f6'}}>Gear</span>
        </div>
        <p style={{
          fontSize: '.8rem',
          color: '#636D7E',
          fontFamily: 'Barlow Condensed, sans-serif',
          letterSpacing: '.06em'
        }}>
          © 2026 Nurse Gear · Essential tools for nurses · All rights reserved
        </p>
      </footer>
    </div>
  );
}
