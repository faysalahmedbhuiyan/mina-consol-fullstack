import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  const [index, setIndex] = useState(0)

  const reviews = [
    {
      name: 'Md Faysal Ahmed BHuiyan',
      text: 'Thanks to Mina, I successfully got my student visa and admission abroad.She care about me all the time.',
      type: 'MINA CONSOL LTD'
    },
    {
      name: 'Md Faysal AHmed',
      text: 'Their Korean course helped me pass TOPIK exam easily.',
      type: 'Korean Language'
    },
    {
      name: 'IT Client',
      text: 'Very professional IT service. Delivered project on time.',
      type: 'IT Farm LTD'
    },
    {
      name: 'Export Client',
      text: 'High quality product and smooth export process.',
      type: 'Export Import LTD'
    },
    {
      name: 'Raju Indian',
      text: 'Paisa hi Paisa Paisa hi Paisa.',
      type: 'Export Import LTD'
    }
  ]

  const next = () => {
    setIndex(prev => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setIndex(prev => (prev - 1 + reviews.length) % reviews.length)
  }

  // ✅ AUTO SLIDE (10 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % reviews.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* HERO */}
      <div className='hero'>
        <div className='overlay'>
          <h1>
            MINA CONSOL LIMITED
            <br />
            (FAYMINA GROUP)
          </h1>
          <p>Building Global Opportunities</p>
        </div>
      </div>

      {/* BUSINESS */}
      <section>
        <h2>Our Business</h2>

        <div className='grid'>
          <Link to='/student-consultancy' className='card'>
            Student Consultancy
          </Link>
          <Link to='/ITFarm' className='card'>
            IT & Software
          </Link>
          <Link to='/export-import' className='card'>
            Trading & Export
          </Link>
          <Link to='/courses' className='card'>
            Korean Courses
          </Link>
          <Link to='/group-of-companies' className='card'>
            Group of Companies
          </Link>
          <Link to='/why-choose-us' className='card'>
            Why Choose Us
          </Link>
          <Link to='/contact' className='card'>
            Contact
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className='about'>
        <h2>
          This is the
          <br />
          MINA CONSOL LIMITED (FAYMINA GROUP)
        </h2>
        <h3>LIMITED COMPANY</h3>
        <p>
          The FAYMINA GROUP, a private limited company with three
          businesses—MINA CONSOL LTD, OUR'S Import-Export LTD, and FAYMINA IT
          FARM LTD —is based in Bangladesh and operates in a number of
          industries, including education consulting, IT services, agricultural,
          and healthcare.
        </p>
      </section>

      {/* BRAND */}
      <section>
        <h2>OUR BRAND</h2>
        <h3>OUR BUSINESS PROTFOLIO</h3>

        <div className='Brand'>
          <div className='logo-Card'>
            <img src='src/assets/logo.png' alt='' />
            <p>Korean Courses</p>
          </div>
          <div className='logo-Card'>
            <img src='ITFarm-logo' alt='' />
            <p>FAYMINA IT Farm LTD</p>
          </div>
          <div className='logo-Card'>
            <img src='StudentConsultancy-logo' alt='' />
            <p>MINA CONSOL LTD</p>
          </div>
          <div className='logo-Card'>
            <img src='HealthCare-logo' alt='' />
            <p>MINA Health Care </p>
          </div>
          <div className='logo-Card'>
            <img src='Export_import_logo' alt='' />
            <p>OUR'S Export-Import LTD</p>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className='clients'>
        <h2>What Clients Say</h2>

        <div className='slider'>
          <div className='review-card'>
            <p>"{reviews[index].text}"</p>
            <h4>{reviews[index].name}</h4>
            <span>{reviews[index].type}</span>
          </div>
        </div>

        <div className='controls'>
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </section>

      {/* STYLE */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .hero {
          height: 100vh;
          background: url("https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg") center/cover no-repeat;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
          padding: 20px;
        }

        .overlay h1 {
          font-size: 50px;
        }

        section {
          padding: 60px 15px;
          text-align: center;
          background: #f0eeee;
        }

        h2 {
          margin-bottom: 30px;
        }

        /* GRID SYSTEM */
        .grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .card {
          padding: 20px;
          border: 1px solid #ddd;
          text-decoration: none;
          color: black;
          transition: 0.3s;
        }

        .card:hover {
          background: black;
          color: white;
        }

        .about {
          background: #f5f5f5;
        }

        .clients { background:#fff; }

        .slider { max-width:600px; margin:auto; }

        .review-card {
          padding:20px;
          border:1px solid #ddd;
          border-radius:12px;
          background:#f9f9f9;
        }

        .controls button {
          margin:10px;
          padding:10px 15px;
          background:black;
          color:white;
          border:none;
          cursor:pointer;
        }

        .Brand {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .logo-Card{
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .logo-Card img{
          width:100%;
          max-width:120px;
          height:auto;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .Brand {
            grid-template-columns: 1fr;
          }

          .overlay h1 {
            font-size: 28px;
          }
        }

        /* 📲 TABLET */
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .Brand {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* 💻 SMALL DESKTOP */
        @media (min-width: 1025px) and (max-width: 1399px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .Brand {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* 🖥️ LARGE DESKTOP */
        @media (min-width: 1400px) {
          .grid {
            grid-template-columns: repeat(5, 1fr);
          }

          .Brand {
            grid-template-columns: repeat(5, 1fr);
          }
        }

      `}</style>
    </>
  )
}
