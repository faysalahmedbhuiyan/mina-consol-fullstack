import React, { useState } from 'react'

// 👉 import your images here
import img1 from '../assets/KNUlogo3.png'
// add more images like this:
// import img2 from '../assets/reg2.jpg'

export default function About () {
  //for Galary
  const [activeImage, setActiveImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // 👉 dynamic gallery array
  const galleryImages = [
    img1
    // img2,
    // img3
  ]

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
        {/* HERO */}
        <section className='hero'>
          <div className='overlay'>
            <h1>About Our Group</h1>
            <p>
              Driven by Vision. Powered by Integrity. Built for Global Impact.
            </p>
          </div>
        </section>

        {/* MISSION + VISION */}
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

        {/* CORE VALUES */}
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

        {/* TIMELINE */}
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

        {/* SISTER CONCERNS */}
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

        {/* TEAM */}
        <section className='section'>
          <div className='container'>
            <h2>Leadership Team</h2>

            <div className='grid-3'>
              <div className='team'>
                <h3>Fahmina Tasnim Khan Arpita</h3>
                <h6>Chairman</h6>
              </div>

              <div className='team'>
                <h3>Md Faysal Ahmed Bhuiyan</h3>
                <h6>Director</h6>
              </div>
              <div className='team'>
                <h3>Rifat Jaman Emon</h3>
                <h6>Director</h6>
              </div>

              <div className='team'>
                <h3>Fasol Bhai</h3>
                <h6>Director</h6>
              </div>
            </div>
          </div>
        </section>

        {/* CSR */}
        <section className='section dark'>
          <div className='container'>
            <h2>Social Impact</h2>
            <p className='center'>
              We are committed to education support, youth empowerment, and
              sustainable business practices that benefit society.
            </p>
          </div>
        </section>

        {/* AWARDS */}
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

        {/* ===== GALLERY SECTION ===== */}
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

        {/* ===== MODAL VIEW ===== */}
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

      {/* CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .hero {
          height: 70vh;
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
        }

        .overlay h1 {
          font-size: 48px;
        }

        .section {
          padding: 80px 20px;
          text-align: center;
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
          padding: 30px;
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
          padding: 25px;
          border: 1px solid #ddd;
          border-radius: 10px;
          transition: 0.3s;
        }

        .card:hover, .brand:hover, .team:hover, .award:hover {
          background: black;
          color: white;
          transform: translateY(-5px);
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

        .timeline-item span {
          font-weight: bold;
        }

        .center {
          max-width: 700px;
          margin: auto;
        }

        /* ===== GALLERY ===== */
        .gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 30px;
        }

        .gallery img {
          width: 100%;
          height: 220px;
          object-fit: contain ;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }

        .gallery img:hover {
          transform: scale(1.05);
        }

        /* ===== MODAL ===== */
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
          max-height: 85%;
          border-radius: 10px;
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .grid-2, .grid-3, .grid-4 {
            grid-template-columns: 1fr;
          }

          .overlay h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  )
}
