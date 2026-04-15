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
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.5rem',
          letterSpacing: '.12em',
          display: 'flex',
          gap: '.2em',
          alignItems: 'center'
        }}>
          <span style={{color: '#B83232'}}>Leon</span>
          <span style={{color: '#636D7E'}}>—</span>
          <span style={{color: '#2B4C9E'}}>Link</span>
        </div>
        <button 
          onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
          style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '.85rem',
            fontWeight: 600,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            background: '#B83232',
            color: '#fff',
            padding: '9px 20px',
            border: 'none',
            cursor: 'pointer',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
          }}
        >
          Get the Bundle — $12.99
        </button>
      </nav>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* BEFORE */}
        <div style={{
          margin: '120px 0 60px 0'
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
          <span style={{color: '#B83232'}}>Leon</span>
          <span style={{color: '#636D7E'}}>—</span>
          <span style={{color: '#2B4C9E'}}>Link</span>
        </div>
        <p style={{
          fontSize: '.8rem',
          color: '#636D7E',
          fontFamily: 'Barlow Condensed, sans-serif',
          letterSpacing: '.06em'
        }}>
          © 2026 Leon-Link · Built for night shift heroes · All rights reserved
        </p>
      </footer>
    </div>
  );
}
