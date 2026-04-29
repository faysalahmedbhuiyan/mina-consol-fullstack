import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  const [index, setIndex] = useState(0)

  const reviews = [
    {
      name: 'Md Faysal Ahmed BHuiyan',
      text: 'Thanks to Mina, I successfully got my student visa and admission abroad.She care about me all the time.',
      type: 'Student Consultancy'
    },
    {
      name: 'Md Faysal AHmed',
      text: 'Their Korean course helped me pass TOPIK exam easily.',
      type: 'Korean Language'
    },
    {
      name: 'IT Client',
      text: 'Very professional IT service. Delivered project on time.',
      type: 'IT Farm'
    },
    {
      name: 'Export Client',
      text: 'High quality product and smooth export process.',
      type: 'Export Import'
    },
    {
      name: 'Raju Indian',
      text: 'Paisa hi Paisa Paisa hi Paisa.',
      type: 'Export Import'
    }
    /*jotogulo add kora lagbe ekhane uporer moto kore formet e add korle seta add hoye jabe*/
  ]

  const next = () => {
    setIndex((index + 1) % reviews.length)
  }

  const prev = () => {
    setIndex((index - 1 + reviews.length) % reviews.length)
  }

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
          {/* ✅ ALL CORRECT LINKS */}

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
          The FAYMINA Group, a private limited company with three
          businesses—MINA CONSOL LIMITED, OUR'S Import-Export, and FAYMINA'S IT
          FARM—is based in Bangladesh and operates in a number of industries,
          including education consulting, IT services, agricultural, and
          healthcare.
        </p>
      </section>

      <section className='Brand'>
        <h2>OUR BRAND</h2>
        <br />
        <h3>OUR BUSINESS PROTFOLIO</h3>
        <div className='logo-Card'>
          <img src='src\assets\logo.png' />
          <p>Korean Courses</p>
        </div>
        <div className='logo-Card'>
          <img src='ITFarm-logo' />
          <p>IT Farm</p>
        </div>
        <div className='logo-Card'>
          <img src='StudentConsultancy-logo' />
          <p>Student Consultancy</p>
        </div>
        <div className='logo-Card'>
          <img src='HealthCare-logo' />
          <p>Health Care</p>
        </div>
        <div className='logo-Card'>
          <img src='Export_import_logo' />
          <p>OUR'S Export-Import</p>
        </div>
      </section>

      {/* ✅ CLIENTS SECTION (FIXED) */}
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
        }

        .overlay h1 {
          font-size: 50px;
        }

        section {
          padding: 80px 20px;
          text-align: center;
          background: #f0eeee;
        }

        h2 {
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .card {
          padding: 30px;
          border: 1px solid #ddd;
          text-decoration: none;
          color: black;
          transition: 0.3s;
          cursor: pointer;
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
          padding:30px;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .logo-Card{
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 20px;
          text-decoration: none;
          color: black;
          
          cursor: pointer;
          transition: all 0.3s ease; /* Animation-ke smooth korbe */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

      .logo-Card:hover {
          padding: 20px;
          
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .overlay h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  )
}
