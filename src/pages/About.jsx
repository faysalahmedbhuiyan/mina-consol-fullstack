import React, { useState } from 'react'

import img1 from '../assets/KNUlogo3.png'
import MINA from '../assets/MINA.jpg'
import Faysal from '../assets/Faysal.jpg'
import Emon from '../assets/Emon.png'
import Fasal from '../assets/Fasal.jpg'

export default function About () {
  const [activeImage, setActiveImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [img1]

  const openImage = index => {
    setCurrentIndex(index)
    setActiveImage(galleryImages[index])
  }

  const nextImage = e => {
    e.stopPropagation()
    const next = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(next)
    setActiveImage(galleryImages[next])
  }

  const prevImage = e => {
    e.stopPropagation()
    const prev =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prev)
    setActiveImage(galleryImages[prev])
  }

  return (
    <>
      <div className='about-page'>
        <section className='hero'>
          <div className='overlay'>
            <h1>About Our Group</h1>
            <p>
              Driven by Vision. Powered by Integrity. Built for Global Impact.
            </p>
          </div>
        </section>

        <section className='section'>
          <div className='container grid-2'>
            <div className='glass'>
              <h2>Mission</h2>
              <p>
                To deliver trusted global consultancy and business solutions
                that empower individuals and organizations to succeed.
              </p>
            </div>

            <div className='glass'>
              <h2>Vision</h2>
              <p>
                To become a globally respected business group known for
                innovation, sustainability, and ethical leadership.
              </p>
            </div>
          </div>
        </section>

        <section className='section dark'>
          <div className='container'>
            <h2>Core Values</h2>

            <div className='grid-4'>
              <div className='card'>Integrity</div>
              <div className='card'>Innovation</div>
              <div className='card'>Sustainability</div>
              <div className='card'>Commitment</div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2>Our Journey</h2>

            <div className='timeline'>
              <div className='timeline-item'>
                <span>2026</span>
                <p>Company Founded</p>
              </div>

              <div className='timeline-item'>
                <span>2026</span>
                <p>Started Export Business</p>
              </div>

              <div className='timeline-item'>
                <span>2026</span>
                <p>Education Consultancy Launch</p>
              </div>

              <div className='timeline-item'>
                <span>2028</span>
                <p>Global Expansion</p>
              </div>
            </div>
          </div>
        </section>

        <section className='section bg-soft'>
          <div className='container'>
            <h2>Our Brands</h2>

            <div className='grid-3'>
              <div className='brand'>Mina Consol Limited</div>
              <div className='brand'>Faymina Import-Export</div>
              <div className='brand'>Faymina IT Farm</div>
            </div>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2>Leadership Team</h2>

            <div className='team-grid'>
              <div className='team'>
                <img src={MINA} alt='' className='team-img' />
                <h3>Fahmina Tasnim Khan Arpita</h3>
                <h6>Chairman</h6>
              </div>

              <div className='team'>
                <img src={Faysal} alt='' className='team-img' />
                <h3>Md Faysal Ahmed Bhuiyan</h3>
                <h6>Director</h6>
              </div>

              <div className='team'>
                <img src={Emon} alt='' className='team-img' />
                <h3>Rifat Jaman Emon</h3>
                <h6>Director</h6>
              </div>

              <div className='team'>
                <img src={Fasal} alt='' className='team-img' />
                <h3>Fasol Bhai</h3>
                <h6>Director</h6>
              </div>
            </div>
          </div>
        </section>

        <section className='section dark'>
          <div className='container'>
            <h2>Social Impact</h2>
            <p className='center'>
              We are committed to education support, youth empowerment, and
              sustainable business practices that benefit society.
            </p>
          </div>
        </section>

        <section className='section'>
          <div className='container'>
            <h2>Awards & Recognition</h2>

            <div className='grid-3'>
              <div className='award'>Best Consultancy 2027</div>
              <div className='award'>Export Excellence</div>
              <div className='award'>Trusted Brand Award</div>
            </div>
          </div>
        </section>

        <section className='section bg-soft'>
          <div className='container'>
            <h2>Company Gallery</h2>
            <p className='center'>
              Our registrations, documents, and key moments
            </p>

            <div className='gallery'>
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt='gallery'
                  onClick={() => openImage(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {activeImage && (
          <div className='modal' onClick={() => setActiveImage(null)}>
            <span className='close'>✖</span>

            <button className='nav left' onClick={prevImage}>
              ‹
            </button>

            <img src={activeImage} alt='preview' />

            <button className='nav right' onClick={nextImage}>
              ›
            </button>
          </div>
        )}
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .hero {
          height: 60vh;
          background: url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d") center/cover no-repeat;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 20px;
        }

        .overlay h1 {
          font-size: 48px;
        }

        .section {
  padding: 60px 15px;
  text-align: center;

  background:
    linear-gradient(
      135deg,
      #f7f7f7,
      #ececec
    );
}

        .container {
          max-width: 1100px;
          margin: auto;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .glass {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 15px;
        }

        .dark {
          background: #111;
          color: white;
        }

        .bg-soft {
          background: #f5f5f5;
        }

        .card, .brand, .team, .award {
          padding: 20px;
          border: 1px solid #4e3c3c;
          border-radius: 10px;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }

        .timeline-item {
          border-left: 3px solid black;
          padding-left: 15px;
        }

        .center {
          max-width: 700px;
          margin: auto;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 30px;
        }

        .gallery img {
          width: 100%;
          height: auto;
          max-height: 220px;
          object-fit: contain;
          border-radius: 10px;
          cursor: pointer;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }

        .modal img {
          max-width: 90%;
          max-height: 80%;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 24px;
        }
        .team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;
}

/* Laptop */
@media (max-width: 1200px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
} 
        .team {
  padding: 35px 25px;
  border-radius: 24px;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.25);

  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.18),
    inset 0 1px 1px rgba(255,255,255,0.25);

  text-align: center;

  transition: all 0.35s ease;

  position: relative;
  overflow: hidden;
}

/* Glass light effect */
.team::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 220px;
  height: 220px;
  background: rgba(255,255,255,0.18);
  transform: rotate(25deg);
  pointer-events: none;
}

/* Hover floating effect */
.team:hover {
  transform: translateY(-12px) scale(1.02);

  box-shadow:
    0 18px 40px rgba(0,0,0,0.28),
    inset 0 1px 1px rgba(255,255,255,0.3);
}

.team-img {
  width: 140px;
  height: 140px;

  border-radius: 50%;
  object-fit: cover;

  margin-bottom: 18px;

  border: 4px solid rgba(255,255,255,0.5);

  box-shadow: 0 8px 25px rgba(0,0,0,0.25);

  transition: 0.3s;
}

.team:hover .team-img {
  transform: scale(1.05);
}

.team h3 {
  margin-top: 10px;
  font-size: 22px;
  color: #111;
}

.team h6 {
  margin-top: 8px;
  font-size: 15px;
  letter-spacing: 1px;
  color: #444;
}

        .nav {
          position: absolute;
          background: rgba(255,255,255,0.2);
          color: white;
          border: none;
          font-size: 30px;
          padding: 10px;
          cursor: pointer;
        }

        .left { left: 10px; }
        .right { right: 10px; }

        /* 📱 MOBILE */
        @media (max-width:768px) {
          .grid-2,
          .grid-3,
          .grid-4 {
            grid-template-columns: 1fr;
          }

          .gallery {
            grid-template-columns: 1fr;
          }

          .overlay h1 {
            font-size: 26px;
          }
        }

        /* 📲 TABLET */
        @media (min-width:769px) and (max-width:1024px) {
          .grid-2 {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }

          .grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 💻 LARGE */
        @media (min-width:1400px) {
          .container {
            max-width:1200px;
          }
        }
      `}</style>
    </>
  )
}
