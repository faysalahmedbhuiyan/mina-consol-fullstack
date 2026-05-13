import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import img1 from '../assets/KNUlogo.jpg'
import img2 from '../assets/logo.png'

export default function ITFarm () {
  const [activeService, setActiveService] = useState(null)
  const [preview, setPreview] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceTabs = [
    {
      id: 'website',
      title: 'Website Design',
      icon: '💻',
      subtitle: 'Modern Web UI'
    },
    {
      id: 'logo',
      title: 'Logo Design',
      icon: '🎨',
      subtitle: 'Brand Identity'
    },
    {
      id: 'app',
      title: 'App Design',
      icon: '📱',
      subtitle: 'Mobile Experience'
    },
    {
      id: 'video',
      title: 'Video Design',
      icon: '🎬',
      subtitle: 'Motion Graphics'
    }
  ]

  const portfolio = [
    {
      title: 'Ecommerce Platform',
      img: img1
    },
    {
      title: 'Business Landing Page',
      img: img2
    },
    {
      title: 'Corporate Dashboard',
      img: img1
    },
    {
      title: 'Restaurant Website',
      img: img2
    },
    {
      title: 'Portfolio Website',
      img: img1
    },
    {
      title: 'Travel Agency UI',
      img: img2
    }
  ]

  const team = [
    {
      name: 'X Ahmed',
      role: 'Lead Developer',
      desc: 'Full-stack developer focused on scalable systems.',
      img: img1
    },
    {
      name: 'Y Khan',
      role: 'UI/UX Designer',
      desc: 'Designs clean and conversion-focused interfaces.',
      img: img2
    },
    {
      name: 'A Bhuiyan',
      role: 'Backend Engineer',
      desc: 'API architecture and cloud infrastructure expert.',
      img: img1
    }
  ]

  return (
    <div className='itfarm-page'>
      {/* ================= IT FARM SUB NAVBAR ================= */}

      <section className='sub-navbar-wrapper'>
        <div className={`sub-navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className='sub-nav-container'>
            <div className='logo-box'></div>

            <nav>
              <a href='#home'>Home</a>
              <a href='#portfolio'>Portfolio</a>
              <a href='#team'>Team</a>
              <a href='#contact'>Contact</a>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className='hero-section' id='home'>
        <div className='hero-overlay'>
          <div className='hero-content'>
            <p className='tag'>NEXT GENERATION DIGITAL AGENCY</p>

            <h1>
              We Build Powerful
              <span> Digital Experiences</span>
            </h1>

            <p className='hero-text'>
              Modern websites, mobile apps, UI/UX systems and creative digital
              solutions for growing businesses.
            </p>
          </div>

          {/* ===== SERVICE NAVIGATION ===== */}
          <div className='service-nav-wrapper'>
            <div className='service-nav'>
              {serviceTabs.map(service => (
                <div
                  key={service.id}
                  className={`service-tab ${
                    activeService === service.id ? 'active' : ''
                  }`}
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? null : service.id
                    )
                  }
                >
                  <div className='icon'>{service.icon}</div>

                  <div>
                    <h3>{service.title}</h3>
                    <span>{service.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC SERVICE CONTENT ================= */}

      {activeService === 'website' && (
        <section className='service-content'>
          <div className='content-box'>
            <h2>Website Design & Development</h2>

            <p>
              We create high-performance responsive websites using modern
              technologies like React, Next.js and Laravel.
            </p>

            <div className='feature-grid'>
              <div className='feature-card'>
                <h1>Responsive Layout</h1>
                <p>
                  We design websites that look stunning and function flawlessly
                  on every device. Whether your clients are browsing from a
                  smartphone, a tablet, or a large desktop monitor, your website
                  will automatically adapt.
                </p>
              </div>
              <div className='feature-card'>
                <h1>SEO Optimized</h1>
                <p>
                  A beautiful website is useless if no one can find it. We build
                  your website from the ground up using search engine
                  optimization (SEO) best practices, helping your business rank
                  higher on Google and attract more organic traffic.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Fast Performance</h1>
                <p>
                  In the digital world, every second counts. A delay of just a
                  few seconds can drive your customers away. Our websites are
                  highly optimized for speed, ensuring instant loading times,
                  high user retention, and better conversion rates.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Modern UI/UX</h1>
                <p>
                  We don't just build websites; we create digital experiences.
                  Our designs combine modern aesthetics with intuitive
                  navigation, ensuring that your visitors enjoy their time on
                  your site and easily find what they are looking for.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'logo' && (
        <section className='service-content'>
          <div className='content-box'>
            <h2>Creative Logo Design</h2>

            <p>
              Unique branding systems and memorable logo designs for modern
              startups and businesses.
            </p>

            <div className='feature-grid'>
              <div className='feature-card'>
                <h1>Minimal Logos</h1>
                <p>
                  We create simple, timeless, and memorable minimal logos that
                  instantly communicate your brand's core values without any
                  clutter.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Brand Identity</h1>
                <p>
                  A brand is more than just a logo. We build a cohesive visual
                  language that defines how your business presents itself to the
                  world across all mediums.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Business Branding</h1>
                <p>
                  Equip your company with professional physical and digital
                  corporate materials that build trust and authority in your
                  industry.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Premium Concepts</h1>
                <p>
                  For businesses aiming for luxury and exclusivity. We deliver
                  bespoke, premium design concepts crafted after deep market
                  research and competitor analysis.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'app' && (
        <section className='service-content'>
          <div className='content-box'>
            <h2>App Design & Development</h2>

            <p>
              Smooth mobile applications with modern UI systems and optimized
              performance.
            </p>

            <div className='feature-grid'>
              <div className='feature-card'>
                <h1>Android Apps</h1>

                <p>
                  We build robust and high-performing native Android
                  applications tailored to tap into the massive global Google
                  Play Store audience.
                </p>
              </div>
              <div className='feature-card'>
                <h1>iOS Apps</h1>
                <p>
                  Deliver an elite and secure user experience for Apple users.
                  We create native iOS applications optimized for iPhones and
                  iPads.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Flutter Development</h1>
                <p>
                  Save time and development costs. Using Google's Flutter
                  framework, we write a single codebase that runs beautifully on
                  both Android and iOS.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Cross Platform</h1>
                <p>
                  Reach your audience everywhere simultaneously. We build
                  cross-platform apps that work seamlessly on Mobile
                  (iOS/Android), Web, and Desktop.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeService === 'video' && (
        <section className='service-content'>
          <div className='content-box'>
            <h2>Video Editing & Motion Design</h2>

            <p>
              Professional promotional videos, animations and motion graphics
              for your business.
            </p>

            <div className='feature-grid'>
              <div className='feature-card'>
                <h1>Promo Videos</h1>
                <p>
                  Introduce your business, product, or service with a bang. We
                  create high-converting promotional videos that capture
                  attention in the first 3 seconds.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Motion Graphics</h1>
                <p>
                  Explain complex concepts easily. We turn dry data, statistics,
                  and workflows into engaging, animated visual stories.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Product Ads</h1>
                <p>
                  Boost your e-commerce sales or software sign-ups. We design
                  dynamic product ads tailored for Facebook, Instagram, and
                  Google Ads.
                </p>
              </div>
              <div className='feature-card'>
                <h1>Social Media Reels</h1>
                <p>
                  Dominate the social media algorithm. We edit fast-paced,
                  trendy vertical videos optimized for Instagram Reels, YouTube
                  Shorts, and TikTok.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= PORTFOLIO ================= */}

      <section className='portfolio-section' id='portfolio'>
        <div className='section-title'>
          <span>OUR PORTFOLIO</span>
          <h2>Customer Views & Live Projects</h2>
        </div>

        <div className='portfolio-grid'>
          {portfolio.map((item, index) => (
            <div className='portfolio-card' key={index}>
              <div className='browser-top'>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <img src={item.img} alt='' onClick={() => setPreview(item.img)} />

              <div className='portfolio-info'>
                <h3>{item.title}</h3>
                <p>Modern UI Experience</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}

      <section className='team-section' id='team'>
        <div className='section-title'>
          <span>OUR TEAM</span>
          <h2>Meet Our Creative Experts</h2>
        </div>

        <div className='team-grid'>
          {team.map((member, index) => (
            <div className='team-card' key={index}>
              <img src={member.img} alt='' />

              <h3>{member.name}</h3>

              <h4>{member.role}</h4>

              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className='contact-section' id='contact'>
        <h2>Let's Build Something Amazing</h2>

        <button>Contact Us</button>
      </section>

      {/* ================= IMAGE MODAL ================= */}

      {preview && (
        <div className='modal' onClick={() => setPreview(null)}>
          <img src={preview} alt='' />
        </div>
      )}

      {/* ================= STYLE ================= */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html{
          scroll-behavior:smooth;
        }

        body{
          font-family:Inter,sans-serif;
          background:#070816;
          color:#fff;
        }

        .itfarm-page{
          background:#070816;
          overflow:hidden;
        }

        /* ================= SUB NAVBAR ================= */

.sub-navbar-wrapper{
  position:relative;
  z-index:100;
}

.sub-navbar{
  width:100%;
  position:absolute;
  top:0;
  left:0;
  transition:.4s;
  padding:18px 0;
}

.sub-navbar.scrolled{
  position:fixed;
  top:0;
  left:0;
  background:rgba(7,8,22,.82);
  backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(255,255,255,.08);
}

.sub-nav-container{
  width:92%;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.logo-box{
  display:flex;
  align-items:center;
  gap:14px;
}

.logo-box img{
  width:52px;
  height:52px;
  object-fit:contain;
}

.logo-box h2{
  font-size:24px;
  font-weight:700;
  margin-top:2px;
}

.mini-text{
  font-size:11px;
  letter-spacing:2px;
  color:#7c5cff;
}

.sub-navbar nav{
  display:flex;
  gap:35px;
}

.sub-navbar nav a{
  color:#fff;
  text-decoration:none;
  font-size:15px;
  transition:.3s;
  position:relative;
}

.sub-navbar nav a::after{
  content:'';
  position:absolute;
  left:0;
  bottom:-6px;
  width:0%;
  height:2px;
  background:#7c5cff;
  transition:.3s;
}

.sub-navbar nav a:hover::after{
  width:100%;
}

.sub-navbar nav a:hover{
  color:#7c5cff;
}
        /* ================= HERO ================= */

        .hero-section{
          min-height:100vh;
          background:
          linear-gradient(rgba(7,8,22,.82),rgba(7,8,22,.92)),
          url('https://images.unsplash.com/photo-1518770660439-4636190af475')
          center/cover;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
          padding-top:120px;
        }

        .hero-overlay{
          width:100%;
        }

        .hero-content{
          width:90%;
          max-width:1200px;
          margin:auto;
          text-align:center;
        }

        .tag{
          color:#7c5cff;
          font-weight:600;
          letter-spacing:2px;
          margin-bottom:18px;
        }

        .hero-content h1{
          font-size:72px;
          line-height:1.1;
          margin-bottom:24px;
          font-weight:800;
        }

        .hero-content h1 span{
          color:#7c5cff;
        }

        .hero-text{
          max-width:760px;
          margin:auto;
          color:#cfcfcf;
          font-size:18px;
          line-height:1.8;
        }

        /* ================= SERVICE NAV ================= */

        .service-nav-wrapper{
          width:90%;
          max-width:1400px;
          margin:70px auto 0;
        }

        .service-nav{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          overflow:hidden;
          border-radius:22px;
          background:#f3f3f3;
        }

        .service-tab{
          padding:32px 25px;
          display:flex;
          align-items:center;
          gap:20px;
          cursor:pointer;
          border-right:1px solid #ddd;
          transition:.4s;
          color:#000;
          position:relative;
        }

        .service-tab:last-child{
          border-right:none;
        }

        .service-tab.active{
          background:linear-gradient(155deg, #a46ce5, #2658ff);
          color:#fff;
        }

        .service-tab:hover{
          background:linear-gradient(135deg,#8a2cff,#2f6bff);
          color:#fff;
        }

        .service-tab .icon{
          font-size:40px;
        }

        .service-tab h3{
          font-size:24px;
          margin-bottom:4px;
        }

        .service-tab span{
          font-size:14px;
          opacity:.8;
        }

        /* ================= SERVICE CONTENT ================= */

        .service-content{
          padding:70px 20px;
          background:#0f1020;
          animation:fade .5s ease;
        }

        @keyframes fade{
          from{
            opacity:0;
            transform:translateY(20px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .content-box{
          width:90%;
          max-width:1200px;
          margin:auto;
        }

        .content-box h2{
          font-size:42px;
          margin-bottom:20px;
        }

        .content-box p{
          color:#ccc;
          line-height:1.8;
          max-width:850px;
        }

        .feature-grid{
          margin-top:40px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:20px;
        }

        .feature-card{
          padding:24px;
          border-radius:16px;
          background:linear-gradient(135deg,#13152a,#1f2140);
          border:1px solid rgba(255,255,255,.08);
          transition:.3s;
        }

        .feature-card:hover{
          transform:translateY(-6px);
          border-color:#7c5cff;
        }

        /* ================= PORTFOLIO ================= */

        .portfolio-section{
          padding:120px 20px;
          background:#070816;
        }

        .section-title{
          text-align:center;
          margin-bottom:70px;
        }

        .section-title span{
          color:#7c5cff;
          letter-spacing:2px;
          font-size:14px;
        }

        .section-title h2{
          font-size:52px;
          margin-top:14px;
        }

        .portfolio-grid{
          width:90%;
          max-width:1300px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:30px;
        }

        .portfolio-card{
          background:#111327;
          border-radius:22px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,.08);
          transition:.4s;
        }

        .portfolio-card:hover{
          transform:translateY(-10px);
          border-color:#7c5cff;
          box-shadow:0 0 30px rgba(124,92,255,.25);
        }

        .browser-top{
          display:flex;
          gap:8px;
          padding:16px;
          background:#1c1f35;
        }

        .browser-top span{
          width:12px;
          height:12px;
          border-radius:50%;
          background:#7c5cff;
        }

        .portfolio-card img{
          width:100%;
          height:250px;
          object-fit:cover;
          cursor:pointer;
        }

        .portfolio-info{
          padding:24px;
        }

        .portfolio-info h3{
          margin-bottom:8px;
          font-size:24px;
        }

        .portfolio-info p{
          color:#aaa;
        }

        /* ================= TEAM ================= */

        .team-section{
          padding:120px 20px;
          background:#0f1020;
        }

        .team-grid{
          width:90%;
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:30px;
        }

        .team-card{
          background:#15172d;
          padding:40px 30px;
          border-radius:22px;
          text-align:center;
          border:1px solid rgba(255,255,255,.06);
          transition:.4s;
        }

        .team-card:hover{
          transform:translateY(-10px);
          border-color:#7c5cff;
          box-shadow:0 0 35px rgba(124,92,255,.2);
        }

        .team-card img{
          width:120px;
          height:120px;
          border-radius:50%;
          object-fit:cover;
          margin-bottom:20px;
          border:4px solid #7c5cff;
        }

        .team-card h3{
          font-size:24px;
          margin-bottom:8px;
        }

        .team-card h4{
          color:#7c5cff;
          margin-bottom:14px;
        }

        .team-card p{
          color:#bdbdbd;
          line-height:1.7;
        }

        /* ================= CONTACT ================= */

        .contact-section{
          padding:120px 20px;
          text-align:center;
          background:#070816;
        }

        .contact-section h2{
          font-size:54px;
          margin-bottom:30px;
        }

        .contact-section button{
          padding:18px 42px;
          border:none;
          border-radius:50px;
          background:linear-gradient(135deg,#8a2cff,#2f6bff);
          color:#fff;
          font-size:18px;
          cursor:pointer;
          transition:.3s;
        }

        .contact-section button:hover{
          transform:translateY(-5px);
        }

        /* ================= MODAL ================= */

        .modal{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,.92);
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:9999;
          padding:20px;
        }

        .modal img{
          max-width:95%;
          max-height:95%;
          border-radius:16px;
        }

        /* ================= MOBILE ================= */

        @media(max-width:992px){

          .service-nav{
            grid-template-columns:1fr 1fr;
          }

          .portfolio-grid{
            grid-template-columns:1fr 1fr;
          }

          .team-grid{
            grid-template-columns:1fr;
          }

          .feature-grid{
            grid-template-columns:1fr 1fr;
          }

          .hero-content h1{
            font-size:52px;
          }

        }

        @media(max-width:768px){

          nav{
            gap:18px;
          }

          nav a{
            font-size:13px;
          }

          .hero-content h1{
            font-size:38px;
          }

          .hero-text{
            font-size:15px;
          }

          .service-nav{
            grid-template-columns:1fr;
          }

          .service-tab{
            padding:24px 18px;
          }

          .service-tab h3{
            font-size:20px;
          }

          .portfolio-grid{
            grid-template-columns:1fr;
          }

          .feature-grid{
            grid-template-columns:1fr;
          }

          .section-title h2{
            font-size:36px;
          }

          .contact-section h2{
            font-size:36px;
          }

          .content-box h2{
            font-size:32px;
          }

        }

      `}</style>
    </div>
  )
}
