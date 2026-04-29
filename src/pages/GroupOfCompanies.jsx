import React from 'react'
import { Link } from 'react-router-dom'

export default function GroupOfCompanies () {
  return (
    <>
      <div className='group-page'>
        {/* HERO */}
        <section className='hero'>
          <div className='container'>
            <h1>FAYMINA GROUP</h1>
            <p>
              A leading diversified conglomerate committed to excellence,
              innovation, and sustainable growth across global industries.
            </p>
          </div>
        </section>

        {/* HOLDING COMPANY */}
        <section className='section'>
          <div className='container'>
            <h2>FAYMINA GROUP</h2>
            <h4>The Holding Entity</h4>

            <p>
              Faymina Group operates as the central strategic pillar, overseeing
              a dynamic portfolio of businesses. We provide governance,
              financial stability, and long-term vision to ensure each
              subsidiary excels in its respective market.
            </p>

            <p>
              Rooted in trust and integrity, our mission is to create a
              synergistic ecosystem that empowers our businesses to deliver
              world-class services globally.
            </p>
          </div>
        </section>

        {/* DIVISION 1 */}
        <section className='section line'>
          <div className='container row'>
            <div>
              <h3>Mina Consol Limited</h3>
              <p>
                Empowering dreams through expert global education services. We
                specialize in university admissions, career counseling, and
                comprehensive visa processing for students aiming for
                international success.
              </p>
              <Link to='/student-consultancy'>Explore Services →</Link>
            </div>
          </div>
        </section>

        {/* DIVISION 2 */}
        <section className='section line'>
          <div className='container row'>
            <div>
              <h3>Cosmatica Care</h3>
              <p>
                Our upcoming venture into the lifestyle and beauty industry.
                Dedicated to bringing premium quality cosmetics and personal
                care products to the retail and distribution market.
              </p>
              <span className='coming'>Coming Soon</span>
            </div>
          </div>
        </section>

        {/* DIVISION 3 */}
        <section className='section line'>
          <div className='container row'>
            <div>
              <h3>Faymina Global Trade</h3>
              <p>
                Driving excellence in the Export & Import sector. We manage a
                robust supply chain and international sourcing network,
                connecting local markets with global opportunities.
              </p>
              <Link to='/export-import'>Business Inquiry →</Link>
            </div>
          </div>
        </section>

        {/* DIVISION 4 */}

        <section className='section line'>
          <div className='container row'>
            <div>
              <h3>Faymi Tech & Software</h3>
              <p>
                Architecting the future with cutting-edge IT solutions. Focused
                on digital transformation, custom software development, and
                AI-driven strategies for the modern era.
              </p>
              <span className='coming'>Strategic Launch in Progress</span>
            </div>
          </div>
        </section>

        {/* VISION BLOCK */}
        <section className='section dark'>
          <div className='container'>
            <h2>Our Corporate Vision</h2>
            <p className='center'>
              To emerge as a globally respected business icon by fostering
              innovation, maintaining ethical standards, and delivering
              unparalleled value to our partners, employees, and stakeholders
              worldwide.
            </p>
          </div>
        </section>
      </div>

      {/* CSS (Same as before, only slight tweaks for consistency) */}
      <style>{`
        * {
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero {
          padding:100px 20px;
          background:#ffffff;
          text-align:center;
          border-bottom:1px solid #ddd;
        }

        .container {
          max-width:1000px;
          margin:auto;
        }

        h1 {
          font-size:48px;
          margin-bottom:15px;
          color: #1a1a1a;
        }

        h2 {
          font-size:32px;
          margin-bottom:10px;
          color: #812222;
        }

        h3 {
          font-size:24px;
          margin-bottom:10px;
          color: #333;
        }

        h4 {
          color:#007bff;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
          margin-bottom:20px;
        }

        p {
          line-height:1.8;
          color:#555;
          margin-bottom:15px;
          font-size: 16px;
        }

        .section {
          padding:80px 20px;
          border-bottom:1px solid #eee;
        }

        .line {
          background:#fcfcfc;
        }

        .row {
          display:flex;
          justify-content:space-between;
        }

        a {
          text-decoration:none;
          color:#007bff;
          font-weight:600;
          transition: 0.3s;
        }
        
        a:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .coming {
          color:#d9534f;
          font-size:14px;
          font-weight: bold;
          text-transform: uppercase;
          border: 1px solid #d9534f;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .dark {
          background:#1a1a1a;
          color:white;
        }

        .dark p {
          color:#ccc;
        }

        .center {
          max-width:800px;
          margin:auto;
          text-align: center;
        }

        @media (max-width:768px) {
          .row {
            flex-direction:column;
          }

          h1 {
            font-size:32px;
          }
        }
      `}</style>
    </>
  )
}
