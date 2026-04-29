import { useState } from 'react'
import img1 from '../assets/KNUlogo.jpg'
import img2 from '../assets/logo.png'

export default function ITFarm () {
  const [activeService, setActiveService] = useState(null)
  const [preview, setPreview] = useState(null)

  const identity = [
    'Expert Developers',
    'On-time Delivery',
    '24/7 Support',
    'Post-Launch Maintenance'
  ]

  const services = [
    {
      title: 'Web Development',
      desc: 'Modern, fast and scalable websites.',
      details:
        'We build responsive, SEO-friendly, high-performance websites using React, Laravel and modern tools.'
    },
    {
      title: 'App Development',
      desc: 'Android & iOS applications with great performance.',
      details:
        'We create cross-platform and native apps with smooth performance and clean UI.'
    },
    {
      title: 'UI/UX Design',
      desc: 'Clean and user-friendly interfaces.',
      details:
        'User-focused design with wireframes, prototypes, and conversion optimization.'
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO and growth strategies that convert.',
      details:
        'Complete SEO, social media and paid marketing strategies to grow your business.'
    }
  ]

  const portfolio = [
    {
      title: 'Ecommerce Website',
      desc: 'Full online store with payment system',
      tech: 'React, Laravel',
      img: img1
    },
    {
      title: 'Mobile App',
      desc: 'Cross platform mobile solution',
      tech: 'Flutter',
      img: img2
    },
    {
      title: 'Company Website',
      desc: 'Corporate modern website',
      tech: 'Next.js',
      img: img1
    }
  ]

  const team = [
    { name: 'X Ahmed', role: 'Lead Developer', img: img1 },
    { name: 'Y Khan', role: 'UI Designer', img: '' },
    { name: 'A Bhuiyan', role: 'Backend Engineer', img: '' }
  ]

  return (
    <div className='page'>
      {/* HERO */}
      <section className='hero'>
        <div className='overlay'>
          <h1>We Build Digital Products That Scale</h1>
          <p>High-performance solutions for modern businesses</p>

          <div className='buttons'>
            <button onClick={() => setPreview(img1)}>Our Portfolio</button>
            <button className='outline' onClick={() => setPreview(img2)}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className='section'>
        <h2>Why Choose Us</h2>
        <div className='grid'>
          {identity.map((item, i) => (
            <div className='card' key={i}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className='section dark'>
        <h2>Our Services</h2>
        <div className='grid'>
          {services.map((s, i) => (
            <div className='card' key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <button
                className='link'
                onClick={() => setActiveService(activeService === i ? null : i)}
              >
                Learn More →
              </button>

              {activeService === i && (
                <div className='details'>{s.details}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className='section'>
        <h2>Our Work</h2>
        <div className='grid'>
          {portfolio.map((p, i) => (
            <div className='card' key={i}>
              <img src={p.img} alt='' onClick={() => setPreview(p.img)} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <small>{p.tech}</small>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className='section dark'>
        <h2>Tech Stack</h2>
        <div className='tech'>
          {['React', 'Node', 'Laravel', 'Flutter', 'AWS', 'C Programming'].map(
            (t, i) => (
              <span key={i}>{t}</span>
            )
          )}
        </div>
      </section>

      {/* TEAM */}
      <section className='section'>
        <h2>Meet the Team</h2>
        <div className='grid'>
          {team.map((t, i) => (
            <div className='card' key={i}>
              <img
                src={t.img || 'https://via.placeholder.com/100'}
                alt=''
                className='avatar'
              />
              <h3>{t.name}</h3>
              <p>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className='section dark'>
        <h2>Work Process</h2>
        <div className='process'>
          {['Idea', 'Design', 'Develop', 'Check', 'Launch'].map((p, i) => (
            <div key={i}>
              <span>0{i + 1}</span>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {preview && (
        <div className='modal' onClick={() => setPreview(null)}>
          <img src={preview} alt='' />
        </div>
      )}

      {/* STYLE */}
      <style>{`
        body{
          margin:0;
          font-family:sans-serif;
        }

        /* ✅ GOOGLE TRANSLATE FIX (SCOPED SAFE) */
        .translate * {
          all: unset !important;
          font-size: 18px !important;
        }

        .translate select {
          padding: 4px !important;
          font-size: 12px !important;
        }

        /* HERO */
        .hero{
          height:100vh;
          background:url('https://images.unsplash.com/photo-1518770660439-4636190af475') center/cover;
        }

        .overlay{
          height:100%;
          background:rgba(0,0,0,0.7);
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          color:#fff;
          text-align:center;
        }

        h1{font-size:50px;margin-bottom:15px}
        h2{text-align:center;margin-bottom:40px}

        .buttons button{
          margin:10px;
          padding:12px 20px;
          border:none;
          background:#00ff88;
          cursor:pointer;
        }

        .outline{
          background:transparent;
          border:1px solid #fff;
          color:#fff;
        }

        .section{padding:80px 20px}
        .dark{background:#111;color:#fff}

        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
        }

        .card{
          padding:20px;
          background:#fff;
          border-radius:10px;
          text-align:center;
        }

        .dark .card{
          background:#222;
          color:#fff;
        }

        img{
          width:100%;
          height:150px;
          object-fit:contain;
          border-radius:6px;
          cursor:pointer;
        }

        .avatar{
          width:100px;
          height:100px;
          border-radius:50%;
          object-fit:cover;
          margin:auto;
        }

        .details{
          margin-top:10px;
          background: #18095f;
          padding:10px;
          border-radius:8px;
        }

        .tech{
          display:flex;
          justify-content:center;
          flex-wrap:wrap;
          gap:10px;
        }

        .tech span{
          background:#00ff88;
          padding:10px 15px;
          border-radius:20px;
        }

        .process{
          display:flex;
          justify-content:center;
          gap:30px;
          flex-wrap:wrap;
        }

        .process span{
          display:block;
          font-size:30px;
        }

        .modal{
          position:fixed;
          inset:0;
          background:rgba(0,0,0,0.9);
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:999;
        }

        .modal img{
          max-width:90%;
          max-height:90%;
        }
      `}</style>
    </div>
  )
}
