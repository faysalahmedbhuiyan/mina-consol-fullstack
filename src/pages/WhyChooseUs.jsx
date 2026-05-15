import { Link } from 'react-router-dom'

export default function WhyChooseUs () {
  const strengths = [
    {
      icon: '⏳',
      title: 'Legacy & Experience',
      desc: 'Years of trusted business operations building credibility and long-term success.'
    },
    {
      icon: '🌐',
      title: 'Diverse Portfolio',
      desc: 'Operating across multiple sectors providing one-stop business solutions.'
    },
    {
      icon: '💰',
      title: 'Financial Stability',
      desc: 'Strong financial structure ensuring secure partnerships and growth.'
    },
    {
      icon: '🚀',
      title: 'Innovation & Technology',
      desc: 'Modern systems and continuous innovation across all business units.'
    },
    {
      icon: '👨‍💼',
      title: 'Skilled Workforce',
      desc: 'Dedicated professionals delivering high-quality services globally.'
    },
    {
      icon: '🌱',
      title: 'CSR Commitment',
      desc: 'Focused on social responsibility and sustainable development initiatives.'
    },
    {
      icon: '⭐',
      title: 'Quality & Compliance',
      desc: 'Maintaining international standards and strict quality control systems.'
    },
    {
      icon: '🤝',
      title: 'Customer-Centric',
      desc: 'Every solution tailored to client needs with long-term support.'
    }
  ]

  const process = [
    {
      no: '01',
      title: 'Consultation',
      desc: 'Understanding client requirements deeply.'
    },
    {
      no: '02',
      title: 'Strategy',
      desc: 'Planning structured and efficient solutions.'
    },
    {
      no: '03',
      title: 'Execution',
      desc: 'Delivering services with precision and speed.'
    },
    {
      no: '04',
      title: 'Support',
      desc: 'Continuous assistance and improvement.'
    }
  ]

  return (
    <>
      <div className='why-page text-light'>
        {/* HERO */}

        <section className='hero-section d-flex align-items-center justify-content-center text-center'>
          <div className='hero-overlay'></div>

          <div className='container position-relative hero-content'>
            <h1>
              Why Choose MINA CONSOL LIMITED
              <br />
              FAYMINA GROUP
            </h1>

            <p>Strong foundation. Diverse growth. Trusted globally.</p>
          </div>
        </section>

        {/* OUR STRENGTH */}

        <section className='section-space'>
          <div className='container'>
            <h2 className='section-title'>OUR STRENGTH</h2>

            <div className='row g-4'>
              {strengths.map((item, index) => (
                <div className='col-12 col-md-6 col-lg-3' key={index}>
                  <div className='glass-card h-100'>
                    <div className='icon-wrap'>{item.icon}</div>

                    <h4>{item.title}</h4>

                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}

        <section className='section-space process-section'>
          <div className='container'>
            <h2 className='section-title'>HOW WE WORK</h2>

            <div className='row position-relative process-line'>
              {process.map((step, index) => (
                <div
                  key={index}
                  className='col-12 col-lg-3 text-center mb-5 process-item'
                >
                  <div className='circle'>{step.no}</div>

                  <h4>{step.title}</h4>

                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className='cta-section'>
          <div className='container text-center'>
            <h2>Start Your Journey With Us</h2>

            <p>Partner with a reliable and growing business group.</p>

            <Link to='/contact' className='cta-btn'>
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <style>{`

      .why-page{
        background:#0a0a0a;
        overflow:hidden;
      }

      .section-space{
        padding:110px 15px;
      }

      .section-title{
        color:white;
        font-size:42px;
        font-weight:800;
        text-align:center;
        letter-spacing:6px;
        margin-bottom:70px;
      }

      p{
        color:#9ca3af;
        line-height:1.8;
      }

      /* HERO */

      .hero-section{
        min-height:60vh;
        position:relative;

        background:
        radial-gradient(
        circle at center,
        rgba(31,41,55,.8),
        #0a0a0a 70%
        );

      }

      .hero-overlay{
        position:absolute;
        inset:0;

        background:
        radial-gradient(
        rgba(6,182,212,.10),
        transparent 60%
        );
      }

      .hero-content h1{

        font-size:65px;
        font-weight:900;
        letter-spacing:3px;
        line-height:1.2;

      }

      .hero-content p{

        font-size:22px;

        margin-top:20px;

        background:
        linear-gradient(
        to right,
        #bdbdbd,
        white
        );

        -webkit-background-clip:text;
        color:transparent;
      }


      /* GLASS CARD */

      .glass-card{

        background:
        rgba(255,255,255,.03);

        backdrop-filter:blur(14px);

        border:1px solid rgba(255,255,255,.06);

        border-radius:24px;

        padding:35px;

        transition:
        all .5s ease;

      }

      .glass-card:hover{

        transform:
        scale(1.03);

        border-color:
        rgba(255,255,255,.2);

        box-shadow:
        0 0 35px rgba(6,182,212,.15);

      }

      .icon-wrap{

        width:70px;
        height:70px;

        border-radius:50%;

        display:flex;
        align-items:center;
        justify-content:center;

        background:#151515;

        border:
        1px solid rgba(255,255,255,.1);

        font-size:28px;

        margin:auto;
        margin-bottom:25px;

      }

      .glass-card h4{

        color:white;
        font-size:22px;

        margin-bottom:15px;
      }

      /* PROCESS */

      .process-line{

        position:relative;

      }

      @media(min-width:992px){

      .process-line::before{

      content:'';

      position:absolute;

      width:80%;

      top:32px;

      left:10%;

      border-top:
      2px dashed
      rgba(255,255,255,.1);

      }

      }

      .process-item{

      position:relative;
      z-index:5;

      }

      .circle{

      width:70px;
      height:70px;

      margin:auto;

      border-radius:50%;

      background:#151515;

      border:
      1px solid rgba(255,255,255,.1);

      color:#bbb;

      display:flex;
      align-items:center;
      justify-content:center;

      font-size:20px;

      font-weight:700;

      margin-bottom:25px;

      transition:
      all .4s ease;

      }

      .process-item:hover .circle{

      background:
      linear-gradient(
      45deg,
      #06b6d4,
      #2563eb
      );

      color:white;

      border:none;

      box-shadow:
      0 0 20px
      rgba(6,182,212,.5);

      }

      .process-item h4{

      color:white;
      margin-bottom:15px;

      }


      /* CTA */

      .cta-section{

      padding:110px 15px;

      background:
      rgba(255,255,255,.02);

      border-top:
      1px solid rgba(255,255,255,.05);

      border-bottom:
      1px solid rgba(255,255,255,.05);

      }

      .cta-section h2{

      font-size:48px;

      font-weight:800;

      color:white;

      margin-bottom:20px;

      }

      .cta-section p{

      max-width:600px;

      margin:auto;

      margin-bottom:40px;

      }

      .cta-btn{

      display:inline-block;

      background:white;

      color:black;

      padding:
      15px 40px;

      border-radius:100px;

      text-decoration:none;

      font-size:13px;

      font-weight:700;

      letter-spacing:3px;

      text-transform:uppercase;

      transition:
      .4s ease;

      }

      .cta-btn:hover{

      transform:
      scale(1.06);

      background:#e5e5e5;

      color:black;

      }


      @media(max-width:768px){

      .hero-content h1{
      font-size:34px;
      }

      .section-title{
      font-size:28px;
      letter-spacing:3px;
      }

      .cta-section h2{
      font-size:30px;
      }

      }

      `}</style>
    </>
  )
}
