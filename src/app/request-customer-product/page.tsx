"use client";
import React from "react";

export default function RequestCustomerProduct() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    customApp: false,
    customDocument: false,
    customWebsite: false,
    other: false,
    otherText: '',
    anythingElse: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real implementation, this would send an email to leonptucker3886@gmail.com
    // For now, we'll simulate the submission
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactMethod: 'email',
      customApp: false,
      customDocument: false,
      customWebsite: false,
      other: false,
      otherText: '',
      anythingElse: ''
    });
  };

  if (isSubmitted) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #292524 100%)',
        color: '#fafaf9',
        padding: '20px'
      }}>
        <div style={{
          textAlign: 'center',
          background: 'rgba(31, 41, 55, 0.9)',
          padding: '60px 40px',
          borderRadius: '16px',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          maxWidth: '500px',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '24px'
          }}>✅</div>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '16px',
            color: '#22c55e'
          }}>Request Submitted!</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#9ca3af',
            lineHeight: '1.6',
            marginBottom: '32px'
          }}>
            I will get back to you shortly with more information about your custom product request.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            style={{
              background: 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 50%, #292524 100%)',
      color: '#fafaf9',
      padding: '20px'
    }}>
      {/* Navigation */}
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
            NURSE GEAR
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <a href="/" style={{
            color: '#e5e7eb',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.05em'
          }}>HOME</a>
          <a href="/blogs" style={{
            color: '#e5e7eb',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.05em'
          }}>BLOGS</a>
          <a href="/request-customer-product" style={{
            color: '#22c55e',
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            border: '2px solid #22c55e',
            padding: '6px 12px',
            borderRadius: '6px'
          }}>REQUEST CUSTOMER PRODUCT</a>
        </div>
      </nav>

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
      `}</style>

      <div style={{
        maxWidth: '800px',
        margin: '120px auto 40px',
        background: 'rgba(31, 41, 55, 0.9)',
        borderRadius: '16px',
        border: '1px solid rgba(75, 85, 99, 0.3)',
        padding: '40px',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>

        <div style={{position: 'relative', zIndex: 10}}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #ffffff, #e5e7eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Request Custom Product</h1>
            <p style={{
              color: '#9ca3af',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              Tell us about your custom nursing tool or resource needs. We'll create something amazing together.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {/* Customer Info Section */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '16px',
                borderBottom: '2px solid #22c55e',
                paddingBottom: '8px',
                display: 'inline-block'
              }}>Customer Info</h3>
              <p style={{
                color: '#fbbf24',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '20px',
                background: 'rgba(251, 191, 36, 0.1)',
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid rgba(251, 191, 36, 0.3)'
              }}>
                Every field is optional — fill out as much or as little as you'd like
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(17, 24, 39, 0.8)',
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '1rem'
                    }}
                    placeholder="Your name (optional)"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(17, 24, 39, 0.8)',
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '1rem'
                    }}
                    placeholder="your.email@example.com (optional)"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(17, 24, 39, 0.8)',
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '1rem'
                    }}
                    placeholder="(555) 123-4567 (optional)"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#e5e7eb',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>Preferred Method of Contact</label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(17, 24, 39, 0.8)',
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
              </div>
            </div>

            {/* About Request Section */}
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '16px',
                borderBottom: '2px solid #3b82f6',
                paddingBottom: '8px',
                display: 'inline-block'
              }}>About Request</h3>

              <div style={{
                background: 'rgba(17, 24, 39, 0.6)',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}>
                <p style={{
                  color: '#e5e7eb',
                  fontSize: '1rem',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>Are you looking to have a custom:</p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(31, 41, 55, 0.8)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      name="customApp"
                      checked={formData.customApp}
                      onChange={handleInputChange}
                      style={{display: 'none'}}
                    />
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #22c55e',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: formData.customApp ? '#22c55e' : 'transparent'
                    }}>
                      {formData.customApp && <span style={{color: '#ffffff', fontSize: '12px'}}>✓</span>}
                    </div>
                    <span style={{color: '#e5e7eb', fontWeight: '500'}}>App</span>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(31, 41, 55, 0.8)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      name="customDocument"
                      checked={formData.customDocument}
                      onChange={handleInputChange}
                      style={{display: 'none'}}
                    />
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #22c55e',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: formData.customDocument ? '#22c55e' : 'transparent'
                    }}>
                      {formData.customDocument && <span style={{color: '#ffffff', fontSize: '12px'}}>✓</span>}
                    </div>
                    <span style={{color: '#e5e7eb', fontWeight: '500'}}>Document</span>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(31, 41, 55, 0.8)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      name="customWebsite"
                      checked={formData.customWebsite}
                      onChange={handleInputChange}
                      style={{display: 'none'}}
                    />
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #22c55e',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: formData.customWebsite ? '#22c55e' : 'transparent'
                    }}>
                      {formData.customWebsite && <span style={{color: '#ffffff', fontSize: '12px'}}>✓</span>}
                    </div>
                    <span style={{color: '#e5e7eb', fontWeight: '500'}}>Website</span>
                  </label>

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'rgba(31, 41, 55, 0.8)',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      name="other"
                      checked={formData.other}
                      onChange={handleInputChange}
                      style={{display: 'none'}}
                    />
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #22c55e',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: formData.other ? '#22c55e' : 'transparent'
                    }}>
                      {formData.other && <span style={{color: '#ffffff', fontSize: '12px'}}>✓</span>}
                    </div>
                    <span style={{color: '#e5e7eb', fontWeight: '500'}}>Other</span>
                  </label>
                </div>

                {formData.other && (
                  <div>
                    <label style={{
                      display: 'block',
                      color: '#e5e7eb',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      marginBottom: '8px'
                    }}>Please specify:</label>
                    <input
                      type="text"
                      name="otherText"
                      value={formData.otherText}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(17, 24, 39, 0.8)',
                        border: '1px solid rgba(75, 85, 99, 0.3)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '1rem'
                      }}
                      placeholder="What type of custom product are you looking for?"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Anything Else */}
            <div>
              <label style={{
                display: 'block',
                color: '#e5e7eb',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '12px'
              }}>Anything else?</label>
              <textarea
                name="anythingElse"
                value={formData.anythingElse}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '16px',
                  background: 'rgba(17, 24, 39, 0.8)',
                  border: '1px solid rgba(75, 85, 99, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
                placeholder="Tell us more about your project, timeline, budget, or any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                color: '#ffffff',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
                display: 'block'
              }}
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
