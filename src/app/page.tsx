"use client";
// app/page.tsx
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
                }}>8 Pages · 2 PDFs · $12.99</div>
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
                }}>2 PDF Files</div>
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

      {/* Offer/CTA Section */}
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
              Secure checkout via Stripe &nbsp;·&nbsp; All major cards + PayPal &nbsp;·&nbsp; 30-day money-back guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
