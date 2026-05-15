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

  const leaders = [
    {
      img: MINA,
      name: 'Fahmina Tasnim Khan Arpita',
      role: 'Chairman'
    },
    {
      img: Faysal,
      name: 'Md Faysal Ahmed Bhuiyan',
      role: 'Director'
    },
    {
      img: Emon,
      name: 'Rifat Jaman Emon',
      role: 'Director'
    },
    {
      img: Fasal,
      name: 'Fasol Bhai',
      role: 'Director'
    }
  ]

  return (
    <>
      <div className='about-wrapper text-light'>
        {/* HERO */}

        <section className='hero-section d-flex align-items-center justify-content-center'>
          <div className='hero-overlay'></div>

          <div className='container position-relative text-center z-2'>
            <h1 className='hero-title'>ABOUT OUR GROUP</h1>

            <p className='hero-subtitle'>
              Driven by Vision. Powered by Integrity. Built for Global Impact.
            </p>
          </div>
        </section>

        {/* MISSION VISION */}

        <section className='py-5'>
          <div className='container py-lg-5'>
            <div className='row g-4'>
              <div className='col-md-6'>
                <div className='glass-card h-100'>
                  <h2 className='section-card-title'>Mission</h2>

                  <div className='accent-line'></div>

                  <p className='body-text'>
                    To deliver trusted global consultancy and business solutions
                    that empower individuals and organizations to succeed.
                  </p>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='glass-card h-100'>
                  <h2 className='section-card-title'>Vision</h2>

                  <div className='accent-line'></div>

                  <p className='body-text'>
                    To become a globally respected business group known for
                    innovation, sustainability and ethical leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}

        <section className='py-5'>
          <div className='container'>
            <h2 className='section-title'>CORE VALUES</h2>

            <div className='row g-4'>
              {['Integrity', 'Innovation', 'Sustainability', 'Commitment'].map(
                item => (
                  <div className='col-6 col-lg-3' key={item}>
                    <div className='value-card'>{item}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* TIMELINE */}

        <section className='py-5'>
          <div className='container'>
            <h2 className='section-title'>OUR JOURNEY</h2>

            <div className='timeline-wrap'>
              {[
                ['2026', 'Company Founded'],
                ['2026', 'Started Export Business'],
                ['2026', 'Education Consultancy Launch'],
                ['2028', 'Global Expansion']
              ].map((item, index) => (
                <div className='timeline-item' key={index}>
                  <div className='year'>{item[0]}</div>

                  <div className='timeline-box'>{item[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS */}

        <section className='py-5'>
          <div className='container'>
            <h2 className='section-title'>OUR BRANDS</h2>

            <div className='row g-4'>
              {[
                'Mina Consol Limited',
                'Faymina Import-Export',
                'Faymina IT Farm'
              ].map(brand => (
                <div className='col-md-4' key={brand}>
                  <div className='premium-card'>{brand}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}

        <section className='py-5'>
          <div className='container'>
            <h2 className='section-title'>LEADERSHIP TEAM</h2>

            <div className='row g-4'>
              {leaders.map((member, index) => (
                <div className='col-6 col-lg-3' key={index}>
                  <div className='team-card'>
                    <img src={member.img} alt='' className='team-img' />

                    <h5>{member.name}</h5>

                    <span>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL */}

        <section className='dark-section'>
          <div className='container text-center'>
            <h2 className='section-title'>SOCIAL IMPACT</h2>

            <p className='body-text mx-auto w-lg-50'>
              We are committed to education support, youth empowerment and
              sustainable business practices that benefit society.
            </p>
          </div>
        </section>

        {/* AWARD */}

        <section className='py-5'>
          <div className='container'>
            <h2 className='section-title'>AWARDS & RECOGNITION</h2>

            <div className='row g-4'>
              {[
                'Best Consultancy 2027',
                'Export Excellence',
                'Trusted Brand Award'
              ].map(item => (
                <div className='col-md-4' key={item}>
                  <div className='premium-card'>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}

        <section className='py-5'>
          <div className='container'>
            <h2 className='section-title'>COMPANY GALLERY</h2>

            <div className='row g-4'>
              {galleryImages.map((img, index) => (
                <div className='col-6 col-md-3' key={index}>
                  <img
                    src={img}
                    alt=''
                    onClick={() => openImage(index)}
                    className='gallery-img'
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {activeImage && (
          <div className='custom-modal' onClick={() => setActiveImage(null)}>
            <button onClick={prevImage} className='modal-btn left'>
              ‹
            </button>

            <img src={activeImage} alt='' className='modal-image' />

            <button onClick={nextImage} className='modal-btn right'>
              ›
            </button>
          </div>
        )}
      </div>

      <style>{`

.about-wrapper{
background:#0a0a0a;
min-height:100vh;
overflow:hidden;
}

.hero-section{
min-height:60vh;
position:relative;
background:
radial-gradient(circle at center,#1f2937 0%,#0a0a0a 70%);
}

.hero-overlay{
position:absolute;
inset:0;
background:
linear-gradient(
180deg,
rgba(0,0,0,.2),
rgba(0,0,0,.8)
);
}

.hero-title{
font-size:clamp(2.5rem,7vw,5rem);
font-weight:800;
letter-spacing:8px;
}

.hero-subtitle{
font-size:1.2rem;
background:linear-gradient(
90deg,
#a3a3a3,
white
);

-webkit-background-clip:text;
color:transparent;
}

.section-title{
color:white;
font-size:clamp(1.8rem,5vw,3rem);
font-weight:700;
letter-spacing:5px;
text-align:center;
margin-bottom:70px;
}

.glass-card{
background:rgba(255,255,255,.03);
backdrop-filter:blur(18px);
border:1px solid rgba(255,255,255,.08);
padding:40px;
border-radius:24px;
transition:.4s;
}

.glass-card:hover{
transform:translateY(-8px);
border-color:rgba(255,255,255,.2);
}

.section-card-title{
font-size:30px;
font-weight:700;
}

.accent-line{
width:80px;
height:3px;
background:#22d3ee;
margin:14px 0 25px;
}

.body-text{
color:#9ca3af;
line-height:1.9;
font-size:1.05rem;
}

.value-card,
.premium-card{
padding:30px;
background:#111;
border:1px solid #252525;
border-radius:18px;
text-align:center;
transition:.4s;
font-weight:600;
}

.value-card:hover,
.premium-card:hover{
transform:translateY(-7px);
border-color:#444;
}

.timeline-wrap{
max-width:800px;
margin:auto;
border-left:1px solid #333;
padding-left:40px;
}

.timeline-item{
margin-bottom:40px;
}

.year{
font-weight:700;
color:white;
text-shadow:0 0 18px rgba(34,211,238,.5);
margin-bottom:10px;
}

.timeline-box{
padding:18px;
background:#111;
border-radius:14px;
}

.team-img{
width:100%;
aspect-ratio:1;
object-fit:cover;
border-radius:20px;
filter:grayscale(100%);
transition:.5s;
border:1px solid rgba(255,255,255,.1);
}

.team-card:hover .team-img{
filter:grayscale(0);
transform:scale(1.03);
}

.team-card h5{
margin-top:18px;
text-align:center;
}

.team-card span{
display:block;
text-align:center;
color:#22d3ee;
font-size:12px;
letter-spacing:3px;
}

.gallery-img{
width:100%;
border-radius:16px;
cursor:pointer;
opacity:.8;
transition:.3s;
border:1px solid rgba(255,255,255,.1);
}

.gallery-img:hover{
opacity:1;
transform:scale(1.03);
}

.custom-modal{
position:fixed;
inset:0;
background:rgba(0,0,0,.95);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
}

.modal-image{
max-width:85%;
max-height:85%;
}

.modal-btn{
position:absolute;
background:none;
border:none;
color:white;
font-size:50px;
opacity:.6;
}

.left{left:30px}
.right{right:30px}

.dark-section{
padding:90px 0;
background:#090909;
}

`}</style>
    </>
  )
}
