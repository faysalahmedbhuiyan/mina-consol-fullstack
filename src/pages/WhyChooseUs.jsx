import { Link } from 'react-router-dom'

export default function WhyChooseUs () {
  return (
    <div className='why-page'>
      {/* HERO */}
      <section className='hero'>
        <div className='overlay'>
          <h1>
            Why Choose MINA CONSOL LIMITED
            <br /> FAYMINA GROUP
          </h1>
          <p>Strong foundation. Diverse growth. Trusted globally.</p>
        </div>
      </section>

      {/* MAIN FEATURES */}
      <section className='section'>
        <h2>Our Strength</h2>

        <div className='grid'>
          <div className='card'>
            <span>⏳</span>
            <h3>Legacy & Experience</h3>
            <p>
              Years of trusted business operations building credibility and
              long-term success.
            </p>
          </div>

          <div className='card'>
            <span>🌐</span>
            <h3>Diverse Portfolio</h3>
            <p>
              Operating across multiple sectors providing one-stop business
              solutions.
            </p>
          </div>

          <div className='card'>
            <span>💰</span>
            <h3>Financial Stability</h3>
            <p>
              Strong financial structure ensuring secure partnerships and
              growth.
            </p>
          </div>

          <div className='card'>
            <span>🚀</span>
            <h3>Innovation & Technology</h3>
            <p>
              Modern systems and continuous innovation across all business
              units.
            </p>
          </div>

          <div className='card'>
            <span>👨‍💼</span>
            <h3>Skilled Workforce</h3>
            <p>
              Dedicated professionals delivering high-quality services globally.
            </p>
          </div>

          <div className='card'>
            <span>🌱</span>
            <h3>CSR Commitment</h3>
            <p>
              Focused on social responsibility and sustainable development
              initiatives.
            </p>
          </div>

          <div className='card'>
            <span>⭐</span>
            <h3>Quality & Compliance</h3>
            <p>
              Maintaining international standards and strict quality control
              systems.
            </p>
          </div>

          <div className='card'>
            <span>🤝</span>
            <h3>Customer-Centric</h3>
            <p>
              Every solution tailored to client needs with long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className='section process-section'>
        <h2>How We Work</h2>

        <div className='process'>
          <div className='step'>
            <div className='circle'>01</div>
            <h4>Consultation</h4>
            <p>Understanding client requirements deeply.</p>
          </div>

          <div className='step'>
            <div className='circle'>02</div>
            <h4>Strategy</h4>
            <p>Planning structured and efficient solutions.</p>
          </div>

          <div className='step'>
            <div className='circle'>03</div>
            <h4>Execution</h4>
            <p>Delivering services with precision and speed.</p>
          </div>

          <div className='step'>
            <div className='circle'>04</div>
            <h4>Support</h4>
            <p>Continuous assistance and improvement.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='cta'>
        <h2>Start Your Journey With Us</h2>
        <p>Partner with a reliable and growing business group.</p>
        <Link to='/contact' className='btn'>
          Contact Us
        </Link>
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
          height: 60vh;
          background: url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d') center/cover no-repeat;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .overlay h1 {
          font-size: 42px;
        }

        .section {
          padding: 80px 20px;
          text-align: center;
          background: #f8f8f8;
        }

        .section h2 {
          margin-bottom: 40px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card span {
          font-size: 30px;
        }

        .card h3 {
          margin: 10px 0;
        }

        .process-section {
          background: white;
        }

        .process {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .step {
          max-width: 200px;
        }

        .circle {
          width: 50px;
          height: 50px;
          background: black;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          margin-bottom: 10px;
        }

        .cta {
          padding: 80px 20px;
          text-align: center;
          background: #111;
          color: white;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 25px;
          background: white;
          color: black;
          text-decoration: none;
          border-radius: 5px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .overlay h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  )
}
