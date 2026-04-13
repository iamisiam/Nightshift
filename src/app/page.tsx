// app/page.tsx
"use client";

export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: '#0A1729', color: '#EDE9E3', fontFamily: 'Barlow, sans-serif', fontWeight: 400, lineHeight: 1.6, overflowX: 'hidden'}}>
      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
        opacity: 0.35,
        pointerEvents: 'none',
        zIndex: 999,
        mixBlendMode: 'overlay'
      }}></div>

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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }}>
          <a href="#whats-inside" style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '.85rem',
            fontWeight: 500,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: '#A8B0BF',
            transition: 'color .2s'
          }}>Inside</a>
          <a href="#proof" style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '.85rem',
            fontWeight: 500,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: '#A8B0BF',
            transition: 'color .2s'
          }}>Reviews</a>
          <a href="#offer" style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '.85rem',
            fontWeight: 500,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: '#A8B0BF',
            transition: 'color .2s'
          }}>Pricing</a>
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
            transition: 'background .2s, transform .15s',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
          }}
          onMouseOver={(e) => {
            const target = e.target as HTMLElement;
            target.style.background = '#D44040';
          }}
          onMouseOut={(e) => {
            const target = e.target as HTMLElement;
            target.style.background = '#B83232';
          }}
        >
          Get the Bundle — $12.99
        </button>
      </nav>

      {/* HERO */}
      <section>
        <div style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '120px 40px 80px',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '60px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.8rem',
              fontWeight: 600,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: '#C9943A',
              marginBottom: '22px'
            }}>
              <div style={{
                width: '28px',
                height: '2px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)'
              }}></div>
              2026 Night Shift Edition &nbsp;·&nbsp; Instant Download
            </div>
            
            <h1 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(4rem, 8vw, 7.5rem)',
              lineHeight: '.92',
              letterSpacing: '.03em',
              marginBottom: '28px'
            }}>
              <span style={{color: '#EDE9E3'}}>Own Your</span><br/>
              <span style={{
                background: 'linear-gradient(95deg, #B83232 0%, #D44040 40%, #2B4C9E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Night Shift.</span><br/>
              <span style={{color: '#EDE9E3'}}>Finally.</span>
            </h1>
            
            <p style={{
              fontSize: '1.1rem',
              fontWeight: 300,
              color: '#A8B0BF',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '440px'
            }}>
              The <strong style={{color: '#EDE9E3', fontWeight: 500}}>complete organizational system</strong> for 12-hour night shift RNs.
              Stop duct-taping scattered notes together. One bundle replaces it all —
              <strong style={{color: '#EDE9E3', fontWeight: 500}}>8 printable pages</strong> built from real shifts.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 400,
              letterSpacing: '.06em',
              color: '#636D7E',
              marginBottom: '20px'
            }}>
              <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <span style={{color: '#0D6B72'}}>✓</span> Instant PDF download
              </span>
              <div style={{
                width: '4px',
                height: '4px',
                background: '#252D3F',
                borderRadius: '50%'
              }}></div>
              <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <span style={{color: '#0D6B72'}}>✓</span> Print unlimited
              </span>
              <div style={{
                width: '4px',
                height: '4px',
                background: '#252D3F',
                borderRadius: '50%'
              }}></div>
              <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <span style={{color: '#0D6B72'}}>✓</span> 30-day guarantee
              </span>
            </div>

            <button 
              onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #B83232 0%, #2B4C9E 100%)',
                color: '#fff',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '18px 40px',
                border: 'none',
                cursor: 'pointer',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                transition: 'opacity .2s, transform .15s'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = '0.88';
                target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLElement;
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
              }}
            >
              ↓ &nbsp; Get Instant Access — $12.99
            </button>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px'
            }}>
              <div style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(135deg, #B83232, transparent 40%, #2B4C9E)',
                zIndex: 0
              }}></div>
              <img
                src="/mockups/stack.jpg"
                alt="Night Shift Nurse Bundle printout stack"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  filter: 'grayscale(10%) contrast(1.05)',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  display: 'block'
                }}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const fallback = document.getElementById('hero-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              {/* Fallback visual */}
              <div id="hero-fallback" style={{
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(135deg, #0F1724 0%, #161C2A 100%)',
                aspectRatio: '1',
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                border: '1px solid #1E2535',
                borderRadius: '24px'
              }}>
                <div style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '1.4rem',
                  letterSpacing: '.12em',
                  color: '#C9943A'
                }}>NIGHT SHIFT</div>
                <div style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '3.5rem',
                  lineHeight: '.9',
                  textAlign: 'center',
                  letterSpacing: '.05em'
                }}>NURSE<br/>SURVIVAL<br/>BUNDLE</div>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '.75rem',
                  letterSpacing: '.2em',
                  color: '#636D7E',
                  textTransform: 'uppercase'
                }}>8 Pages · 4 PDFs · $12.99</div>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-16px',
                zIndex: 2,
                background: '#C9943A',
                color: '#0A0C12',
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '1.2rem',
                letterSpacing: '.1em',
                padding: '14px 18px',
                lineHeight: 1.1,
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'
              }}>
                8 PAGES
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '.7rem',
                  fontWeight: 600,
                  letterSpacing: '.15em',
                  opacity: 0.8
                }}>4 PDF Files</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #252D3F, transparent)',
        margin: '0 40px'
      }}></div>

      {/* BEFORE / AFTER */}
      <section style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '.78rem',
          fontWeight: 600,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: '#636D7E',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '20px',
            height: '1px',
            background: '#252D3F'
          }}></div>
          The Transformation
        </div>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          letterSpacing: '.04em',
          lineHeight: '.95',
          marginBottom: '60px'
        }}>
          Before this bundle.<br/>After this bundle.
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 80px 1fr',
          gap: 0,
          alignItems: 'start'
        }}>
          <div style={{
            background: '#0F1520',
            border: '1px solid rgba(184, 50, 50, .3)'
          }}>
            <div style={{
              padding: '16px 24px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 700,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(184, 50, 50, .12)',
              color: '#D44040'
            }}>
              <span style={{fontSize: '1rem'}}>✕</span> Before — Your Night Shifts Now
            </div>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 24px',
                borderBottom: '1px solid #1E2535',
                fontSize: '.95rem',
                color: '#A8B0BF',
                lineHeight: 1.5
              }}>
                <span style={{
                  fontSize: '.8rem',
                  flexShrink: 0,
                  marginTop: '3px',
                  color: '#B83232',
                  opacity: 0.7
                }}>✕</span>
                Scribbling handoff notes on random paper scraps that fall out of your pocket
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 24px',
                borderBottom: '1px solid #1E2535',
                fontSize: '.95rem',
                color: '#A8B0BF',
                lineHeight: 1.5
              }}>
                <span style={{
                  fontSize: '.8rem',
                  flexShrink: 0,
                  marginTop: '3px',
                  color: '#B83232',
                  opacity: 0.7
                }}>✕</span>
                Forgetting which meds are due at 0200 when the fatigue hits hardest
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 24px',
                borderBottom: '1px solid #1E2535',
                fontSize: '.95rem',
                color: '#A8B0BF',
                lineHeight: 1.5
              }}>
                <span style={{
                  fontSize: '.8rem',
                  flexShrink: 0,
                  marginTop: '3px',
                  color: '#B83232',
                  opacity: 0.7
                }}>✕</span>
                Getting home and lying awake at 0900 despite being exhausted
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '120px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #B83232, #2B4C9E)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>→</div>
          </div>

          <div style={{
            background: '#0F1520',
            border: '1px solid rgba(43, 76, 158, .3)'
          }}>
            <div style={{
              padding: '16px 24px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.85rem',
              fontWeight: 700,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(43, 76, 158, .12)',
              color: '#4068C8'
            }}>
              <span style={{fontSize: '1rem'}}>✓</span> After — With the Bundle
            </div>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 24px',
                borderBottom: '1px solid #1E2535',
                fontSize: '.95rem',
                color: '#A8B0BF',
                lineHeight: 1.5
              }}>
                <span style={{
                  fontSize: '.8rem',
                  flexShrink: 0,
                  marginTop: '3px',
                  color: '#0D6B72'
                }}>✓</span>
                Structured SBAR sheet — complete, confident handoffs every single shift
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 24px',
                borderBottom: '1px solid #1E2535',
                fontSize: '.95rem',
                color: '#A8B0BF',
                lineHeight: 1.5
              }}>
                <span style={{
                  fontSize: '.8rem',
                  flexShrink: 0,
                  marginTop: '3px',
                  color: '#0D6B72'
                }}>✓</span>
                1900–0700 medication & task timeline so nothing slips at 0230
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '14px 24px',
                borderBottom: '1px solid #1E2535',
                fontSize: '.95rem',
                color: '#A8B0BF',
                lineHeight: 1.5
              }}>
                <span style={{
                  fontSize: '.8rem',
                  flexShrink: 0,
                  marginTop: '3px',
                  color: '#0D6B72'
                }}>✓</span>
                Post-shift wind-down checklist that actually gets you to sleep in daylight
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #252D3F, transparent)',
        margin: '0 40px'
      }}></div>

      {/* CONTENTS */}
      <section style={{
        padding: '100px 40px',
        background: '#0F1520',
        borderTop: '1px solid #1E2535',
        borderBottom: '1px solid #1E2535'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '.78rem',
            fontWeight: 600,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: '#636D7E',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '20px',
              height: '1px',
              background: '#252D3F'
            }}></div>
            What's Inside
          </div>
          <h2 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            letterSpacing: '.04em',
            lineHeight: '.95',
            marginBottom: '60px'
          }}>
            8 Pages. Every shift, covered.
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px'
          }}>
            {/* Page cards */}
            <div style={{
              background: '#0A0C12',
              border: '1px solid #1E2535',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color .25s, transform .2s'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)',
                opacity: 1
              }}></div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '3rem',
                color: '#252D3F',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '.05em'
              }}>01</div>
              <div style={{fontSize: '1.5rem', marginBottom: '10px', color: '#B83232'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#EDE9E3',
                marginBottom: '8px'
              }}>Rotating Shift Scheduler</div>
              <div style={{
                fontSize: '.88rem',
                color: '#636D7E',
                lineHeight: 1.6
              }}>3-week calendar with N / D / OFF / Call codes. See your rotation, protect your recovery days.</div>
            </div>

            <div style={{
              background: '#0A0C12',
              border: '1px solid #1E2535',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color .25s, transform .2s'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)',
                opacity: 1
              }}></div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '3rem',
                color: '#252D3F',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '.05em'
              }}>02</div>
              <div style={{fontSize: '1.5rem', marginBottom: '10px', color: '#2B4C9E'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#EDE9E3',
                marginBottom: '8px'
              }}>SBAR Patient Handoff</div>
              <div style={{
                fontSize: '.88rem',
                color: '#636D7E',
                lineHeight: 1.6
              }}>Full Situation–Background–Assessment–Recommendation with vitals trend, shift checklist.</div>
            </div>

            <div style={{
              background: '#0A0C12',
              border: '1px solid #1E2535',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color .25s, transform .2s'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)',
                opacity: 1
              }}></div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '3rem',
                color: '#252D3F',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '.05em'
              }}>03</div>
              <div style={{fontSize: '1.5rem', marginBottom: '10px', color: '#B83232'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 20.5h3l-1.5-8.5h-1l-1.5 8.5z" stroke="currentColor" strokeWidth="2"/>
            <path d="M7 7l3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 17l-3 3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#EDE9E3',
                marginBottom: '8px'
              }}>Medication & Task Timeline</div>
              <div style={{
                fontSize: '.88rem',
                color: '#636D7E',
                lineHeight: 1.6
              }}>Every hour 1900–0700. Log meds, pain reassessment, I&O, rounding, and AM labs.</div>
            </div>

            <div style={{
              background: '#0A0C12',
              border: '1px solid #1E2535',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color .25s, transform .2s'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)',
                opacity: 1
              }}></div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '3rem',
                color: '#252D3F',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '.05em'
              }}>04</div>
              <div style={{fontSize: '1.5rem', marginBottom: '10px', color: '#2B4C9E'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 9l-5 5-3-3-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#EDE9E3',
                marginBottom: '8px'
              }}>Fatigue & Self-Care Tracker</div>
              <div style={{
                fontSize: '.88rem',
                color: '#636D7E',
                lineHeight: 1.6
              }}>Rate fatigue 1–10 after each shift. Log sleep hours, mood, triggers, and actions.</div>
            </div>

            <div style={{
              background: '#0A0C12',
              border: '1px solid #1E2535',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color .25s, transform .2s'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)',
                opacity: 1
              }}></div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '3rem',
                color: '#252D3F',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '.05em'
              }}>05</div>
              <div style={{fontSize: '1.5rem', marginBottom: '10px', color: '#B83232'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#EDE9E3',
                marginBottom: '8px'
              }}>Sleep Recovery Checklist</div>
              <div style={{
                fontSize: '.88rem',
                color: '#636D7E',
                lineHeight: 1.6
              }}>Wind-down routine, blackout environment, blue-light protocol, recovery day planner.</div>
            </div>

            <div style={{
              background: '#0A0C12',
              border: '1px solid #1E2535',
              padding: '28px 24px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color .25s, transform .2s'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #B83232, #2B4C9E)',
                opacity: 1
              }}></div>
              <div style={{
                fontFamily: 'Bebas Neue, sans-serif',
                fontSize: '3rem',
                color: '#252D3F',
                lineHeight: 1,
                marginBottom: '12px',
                letterSpacing: '.05em'
              }}>06–08</div>
              <div style={{fontSize: '1.5rem', marginBottom: '10px', color: '#2B4C9E'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 2a2.5 2.5 0 015 0v1.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V2z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 2v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
              <div style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: '#EDE9E3',
                marginBottom: '8px'
              }}>Nurse Brain & Tips Pages</div>
              <div style={{
                fontSize: '.88rem',
                color: '#636D7E',
                lineHeight: 1.6
              }}>System assessment cues, adult vitals reference, night-shift nutrition guide, burnout prevention.</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #252D3F, transparent)',
        margin: '0 40px'
      }}></div>

      {/* TESTIMONIALS */}
      <section style={{
        padding: '100px 40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'Barlow Condensed, sans-serif',
          fontSize: '.78rem',
          fontWeight: 600,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: '#636D7E',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '20px',
            height: '1px',
            background: '#252D3F'
          }}></div>
          Real Night Shift Nurses
        </div>
        <h2 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          letterSpacing: '.04em',
          lineHeight: '.95',
          marginBottom: '60px'
        }}>
          What they're saying.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px'
        }}>
          {/* Testimonial 1 */}
          <div style={{
            background: '#0F1520',
            border: '1px solid #1E2535',
            padding: '32px 28px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '24px',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '5rem',
              lineHeight: 1,
              color: '#252D3F'
            }}>"</div>
            <div style={{
              display: 'flex',
              gap: '3px',
              marginBottom: '18px'
            }}>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
            </div>
            <p style={{
              fontSize: '.95rem',
              color: '#A8B0BF',
              lineHeight: 1.75,
              marginBottom: '22px',
              fontStyle: 'italic',
              fontWeight: 300
            }}>
              "I've been a night shift RN for 6 years and this is the first tool that
              <strong style={{color: '#EDE9E3', fontStyle: 'normal', fontWeight: 500}}>actually matches how my brain works at 0300.</strong>
              The med timeline alone saved me from a near-miss last week."
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #B83232, #2B4C9E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                flexShrink: 0
              }}>MR</div>
              <div>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  letterSpacing: '.05em',
                  color: '#EDE9E3'
                }}>M. Reyes, RN</div>
                <div style={{
                  fontSize: '.78rem',
                  color: '#636D7E'
                }}>ICU · 6 years night shift</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div style={{
            background: '#0F1520',
            border: '1px solid #1E2535',
            padding: '32px 28px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '24px',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '5rem',
              lineHeight: 1,
              color: '#252D3F'
            }}>"</div>
            <div style={{
              display: 'flex',
              gap: '3px',
              marginBottom: '18px'
            }}>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
            </div>
            <p style={{
              fontSize: '.95rem',
              color: '#A8B0BF',
              lineHeight: 1.75,
              marginBottom: '22px',
              fontStyle: 'italic',
              fontWeight: 300
            }}>
              "As a new grad I was terrified of handoffs. This SBAR sheet
              <strong style={{color: '#EDE9E3', fontStyle: 'normal', fontWeight: 500}}>made me look like a veteran RN</strong>
              in front of the attending on my third week. Worth every penny."
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #B83232, #2B4C9E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                flexShrink: 0
              }}>JT</div>
              <div>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  letterSpacing: '.05em',
                  color: '#EDE9E3'
                }}>J. Thomas, RN</div>
                <div style={{
                  fontSize: '.78rem',
                  color: '#636D7E'
                }}>Med-Surg · New Grad</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div style={{
            background: '#0F1520',
            border: '1px solid #1E2535',
            padding: '32px 28px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '24px',
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '5rem',
              lineHeight: 1,
              color: '#252D3F'
            }}>"</div>
            <div style={{
              display: 'flex',
              gap: '3px',
              marginBottom: '18px'
            }}>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
              <span style={{color: '#C9943A', fontSize: '.9rem'}}>★</span>
            </div>
            <p style={{
              fontSize: '.95rem',
              color: '#A8B0BF',
              lineHeight: 1.75,
              marginBottom: '22px',
              fontStyle: 'italic',
              fontWeight: 300
            }}>
              "The fatigue tracker revealed I was crashing every time I worked 3 nights back-to-back with no meal plan.
              <strong style={{color: '#EDE9E3', fontStyle: 'normal', fontWeight: 500}}>I fixed my rotation in one week.</strong>
              I actually sleep now."
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #B83232, #2B4C9E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                flexShrink: 0
              }}>KP</div>
              <div>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '.9rem',
                  fontWeight: 600,
                  letterSpacing: '.05em',
                  color: '#EDE9E3'
                }}>K. Patel, RN, BSN</div>
                <div style={{
                  fontSize: '.78rem',
                  color: '#636D7E'
                }}>Telemetry · 4 years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #252D3F, transparent)',
        margin: '0 40px'
      }}></div>

      {/* OFFER / CTA */}
      <section style={{
        padding: '100px 40px',
        background: '#0F1520',
        borderTop: '1px solid #1E2535',
        borderBottom: '1px solid #1E2535'
      }} id="offer">
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'Barlow Condensed, sans-serif',
            fontSize: '.78rem',
            fontWeight: 600,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: '#636D7E',
            marginBottom: '16px',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '20px',
              height: '1px',
              background: '#252D3F'
            }}></div>
            Get the Bundle
          </div>
          <h2 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            letterSpacing: '.04em',
            lineHeight: '.92',
            marginBottom: '20px'
          }}>
            Your shift.<br/>
            <span style={{
              fontStyle: 'normal',
              background: 'linear-gradient(90deg, #D44040, #2B4C9E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Your system.</span>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 300,
            color: '#A8B0BF',
            marginBottom: '50px',
            lineHeight: 1.7
          }}>
            One download. Four PDFs. Eight pages that change how you work, sleep, and survive night shift.
          </p>

          <div style={{
            background: '#0A0C12',
            border: '1px solid #252D3F',
            padding: '48px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #B83232, #2B4C9E)'
            }}></div>
            <div style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '5rem',
              letterSpacing: '.05em',
              lineHeight: 1,
              marginBottom: '6px'
            }}>
              <span style={{color: '#636D7E', fontSize: '2.5rem', verticalAlign: 'top', marginTop: '10px', display: 'inline-block'}}>$</span>
              <span style={{
                background: 'linear-gradient(135deg, #C9943A 0%, #E8B055 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>12</span>
              <span style={{color: '#636D7E', fontSize: '2.5rem', verticalAlign: 'top', marginTop: '10px', display: 'inline-block'}}>.99</span>
            </div>
            <div style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.8rem',
              fontWeight: 500,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: '#636D7E',
              marginBottom: '32px'
            }}>
              One-time purchase &nbsp;·&nbsp; Instant download &nbsp;·&nbsp; Yours forever
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> Example Bundle PDF (filled)
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> Blank Fillable Bundle PDF
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> Implementation Guide PDF
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> Quick Reference Checklist PDF
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> 8 total printable pages
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> Unlimited prints
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> Works on tablet + stylus
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '.85rem',
                fontWeight: 500,
                letterSpacing: '.06em',
                color: '#A8B0BF',
                background: '#0F1520',
                border: '1px solid #1E2535',
                padding: '8px 14px'
              }}>
                <span style={{color: '#0D6B72'}}>✓</span> 30-day money-back guarantee
              </div>
            </div>

            <div 
              dangerouslySetInnerHTML={{
                __html: `<stripe-buy-button
                  buy-button-id="buy_btn_1TLfalDmD8jmsJxFRrGnfU9r"
                  publishable-key="pk_live_51RQh85DmD8jmsJxFIX38XYfCkF655F4phTR6McqYqmbMfdU6w0iVy8LUtkTWQc8yupZMu8jwKud8J7mVRsBKoEXQ00pbqDp1Mq"
                ></stripe-buy-button>`
              }}
            />

            <div style={{
              marginTop: '20px',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '.82rem',
              fontWeight: 400,
              letterSpacing: '.06em',
              color: '#636D7E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span style={{color: '#C9943A'}}>🔒</span>
              Secure checkout via Stripe Buy Button &nbsp;·&nbsp; All major cards + PayPal &nbsp;·&nbsp; 30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>

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
        <p style={{
          fontSize: '.8rem',
          color: '#636D7E',
          fontFamily: 'Barlow Condensed, sans-serif',
          letterSpacing: '.06em'
        }}>
          Night shift nurse planner · SBAR handoff · Med timeline · Fatigue tracker
        </p>
      </footer>
    </div>
  );
}
