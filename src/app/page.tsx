// app/page.tsx
"use client";

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      background: '#0f172a',
      color: '#e2e8f0',
      lineHeight: 1.6
    }}>
      <div style={{
        maxWidth: '900px',
        margin: 'auto',
        padding: '40px 20px'
      }}>
        {/* Hero */}
        <div style={{
          textAlign: 'center',
          padding: '80px 20px'
        }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: '2.5rem',
            marginBottom: '20px'
          }}>
            Made for Nurses Who Work When the World Sleeps
          </h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            NightShift helps you stay organized, reduce stress, and get through your shifts without feeling overwhelmed.
          </p>
          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
            style={{
              display: 'inline-block',
              background: '#22c55e',
              color: '#000',
              padding: '12px 24px',
              marginTop: '20px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Start Making Your Shifts Easier
          </button>
        </div>

        {/* The Problem */}

        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>The Problem</h2>
          <p style={{marginBottom: '20px'}}>
            Night shift nurses deal with constant mental overload, interruptions, and exhaustion.
          </p>
          <ul style={{
            paddingLeft: '20px',
            marginBottom: '20px'
          }}>
            <li>Too many tasks to track</li>
            <li>Forgetting small but critical details</li>
            <li>Running on little to no sleep</li>
            <li>Always feeling one step behind</li>
          </ul>
          <p>Every shift feels like survival mode.</p>
        </div>

        {/* The Solution */}
        {/* After Section */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>After — With the Bundle</h2>
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

        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>The Solution</h2>
          <p style={{
            marginBottom: '20px',
            fontWeight: 'bold'
          }}>
            <strong>NightShift acts like your second brain.</strong>
          </p>
          <ul style={{
            paddingLeft: '20px',
            marginBottom: '20px'
          }}>
            <li>Track tasks and notes in real time</li>
            <li>Stay focused under pressure</li>
            <li>Reduce mental clutter</li>
            <li>Feel more in control during chaos</li>
          </ul>
        </div>

        {/* Why Nurses Use It */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>Why Nurses Use It</h2>
          <ul style={{
            paddingLeft: '20px'
          }}>
            <li>Stay organized during hectic shifts</li>
            <li>Reduce stress and burnout</li>
            <li>Avoid missing important tasks</li>
            <li>Keep everything in one place</li>
          </ul>
        </div>

        {/* How It Works */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>How It Works</h2>
          <ol style={{
            paddingLeft: '20px',
            marginBottom: '20px'
          }}>
            <li>Open NightShift at the start of your shift</li>
            <li>Log tasks, notes, and reminders</li>
            <li>Stay on track all night</li>
          </ol>
          <p>No setup. No learning curve.</p>
        </div>

        {/* This Isn't Just Productivity */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>This Isn't Just Productivity</h2>
          <p>This is about feeling less overwhelmed, making fewer mistakes, and getting through your shift with your sanity intact.</p>
        </div>

        {/* Common Questions */}
        <div style={{
          margin: '60px 0'
        }}>
          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            marginBottom: '20px'
          }}>Common Questions</h2>
          <p style={{marginBottom: '15px'}}>
            <strong>Do I need time to learn it?</strong><br/>
            No. It's built to be used instantly.
          </p>
          <p style={{marginBottom: '15px'}}>
            <strong>Will it help during busy shifts?</strong><br/>
            That's when it helps most.
          </p>
          <div 
            dangerouslySetInnerHTML={{
              __html: `<stripe-buy-button
                buy-button-id="buy_btn_1TLfalDmD8jmsJxFRrGnfU9r"
                publishable-key="pk_live_51RQh85DmD8jmsJxFIX38XYfCkF655F4phTR6McqYqmbMfdU6w0iVy8LUtkTWQc8yupZMu8jwKud8J7mVRsBKoEXQ00pbqDp1Mq"
              ></stripe-buy-button>`
            }}
          />
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          opacity: 0.6
        }}>
          <p>© 2026 NightShift</p>
        </div>
      </div>
    </div>
  );
}
