import React from 'react'
import logo from '../assets/logo.png'

export default function Contact () {
  return (
    <div className='contact-page'>
      <section className='hero'>
        <div className='overlay'>
          <h1>Contact Us</h1>
          <p>We are always ready to assist you</p>
        </div>
      </section>

      <section className='section'>
        <h2>Head Office</h2>

        <div className='office'>
          <img src={logo} alt='office' />

          <div className='info'>
            <h3>MINA CONSOL LIMITED</h3>
            <p>Dhaka, Bangladesh</p>
            <p>📞 +880 1234 567890</p>
            <p>📧 faysalahmedtushan@gmail.com</p>
            <p className='hours'>Office Hours: Sat – Thu (9:00 AM – 6:00 PM)</p>
          </div>
        </div>

        <div className='map'>
          <iframe
            src='https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed'
            title='map'
          ></iframe>
        </div>
      </section>

      <section className='section bg'>
        <h2>Departments</h2>

        <div className='grid'>
          <div className='card'>
            <h3>Sales</h3>
            <p>sales@minaconsol.com</p>
          </div>
          <div className='card'>
            <h3>HR / Careers</h3>
            <p>hr@minaconsol.com</p>
          </div>
          <div className='card'>
            <h3>Media / PR</h3>
            <p>media@minaconsol.com</p>
          </div>
          <div className='card'>
            <h3>General Inquiry</h3>
            <p>faysalahmedtushan@gmail.com</p>
          </div>
        </div>
      </section>

      <section className='section'>
        <h2>Contact Directly</h2>

        <div className='contact-box'>
          <a href='tel:+8801234567890' className='btn'>
            📞 Call Now
          </a>
          <a href='https://wa.me/8801234567890' className='btn'>
            💬 WhatsApp
          </a>
          <a href='mailto:faysalahmedtushan@gmail.com' className='btn'>
            📧 Send Email
          </a>
        </div>
      </section>

      <section className='section bg'>
        <h2>Follow Us</h2>

        <div className='social'>
          <a href='#'>LinkedIn</a>
          <a href='#'>Facebook</a>
          <a href='#'>Twitter</a>
          <a href='#'>YouTube</a>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .hero {
          height: 50vh;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(169, 106, 39, 0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 15px;
        }

        .section {
          padding: 60px 15px;
          text-align: center;
        }

        .bg {
          background: #f5f5f5;
        }

        .office {
          display: flex;
          gap: 25px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .office img {
          width: 100%;
          max-width: 350px;
          border-radius: 10px;
        }

        .info {
          text-align: left;
          max-width: 400px;
        }

        .hours {
          margin-top: 10px;
          color: gray;
        }

        .map iframe {
          width: 100%;
          height: 280px;
          border: none;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .contact-box {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .btn {
          padding: 12px 20px;
          background: black;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          display: inline-block;
        }

        .social {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .social a {
          margin: 10px;
          text-decoration: none;
          color: black;
        }

        /* 📱 MOBILE */
        @media (max-width:600px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .info {
            text-align: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }

        /* 📲 TABLET */
        @media (min-width:601px) and (max-width:1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 💻 LARGE */
        @media (min-width:1400px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

      `}</style>
    </div>
  )
}
