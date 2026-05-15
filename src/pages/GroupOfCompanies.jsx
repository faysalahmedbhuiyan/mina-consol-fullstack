import React from 'react'
import { Link } from 'react-router-dom'

export default function GroupOfCompanies () {
  const companies = [
    {
      title: 'Mina Consol Limited',
      description:
        'Empowering dreams through expert global education services. We specialize in university admissions, career counseling, and comprehensive visa processing for students aiming for international success.',
      route: '/student-consultancy',
      type: 'education'
    },

    {
      title: 'Cosmatica Care',
      description:
        'Our upcoming venture into lifestyle and beauty. Dedicated to bringing premium cosmetics and personal care products.',
      badge: 'Coming Soon',
      type: 'beauty'
    },

    {
      title: 'Faymina Global Trade',
      description:
        'Driving excellence in Export & Import with a strong supply chain and international sourcing network.',
      route: '/export-import',
      type: 'trade'
    },

    {
      title: 'Faymi Tech & Software',
      description:
        'Architecting the future with digital transformation, custom software development and AI-driven strategies for the modern era.',
      badge: 'Strategic Launch in Progress',
      type: 'tech'
    }
  ]

  return (
    <>
      <div className='group-page'>
        {/* HERO */}

        <section className='hero-section'>
          <div className='hero-bg'></div>

          <div className='container hero-content'>
            <p className='hero-small'>CORPORATE ECOSYSTEM</p>

            <h1>
              FAYMINA
              <span> GROUP</span>
            </h1>

            <p className='hero-text'>
              A diversified enterprise ecosystem committed to excellence,
              innovation and sustainable growth across global industries.
            </p>
          </div>

          <div className='mouse'>
            <div className='wheel'></div>
          </div>
        </section>

        {/* HOLDING */}

        <section className='holding-section'>
          <div className='container text-center'>
            <h2>FAYMINA GROUP</h2>

            <h5>The Holding Entity</h5>

            <div className='line'></div>

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

        {/* CARDS */}

        <section className='portfolio-company'>
          <div className='container'>
            <div className='title-box'>
              <small>ENTERPRISE PORTFOLIO</small>

              <h2>Subsidiary Company(Sister Concerns)</h2>
            </div>

            <div className='row g-4'>
              {companies.map((item, index) => (
                <div className='col-lg-6' key={index}>
                  <div className={`company-card ${item.type}`}>
                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    {item.route ? (
                      item.type === 'trade' ? (
                        <Link to={item.route} className='trade-btn'>
                          Business Inquiry
                        </Link>
                      ) : (
                        <Link to={item.route} className='edu-link'>
                          Explore Services →
                        </Link>
                      )
                    ) : (
                      <span className={`badge-pill ${item.type}`}>
                        <span className='dot'></span>

                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION */}

        <section className='vision'>
          <div className='watermark'>F</div>

          <div className='container text-center'>
            <small>CORPORATE VISION</small>

            <p>
              "To emerge as a globally respected business icon by fostering
              innovation, maintaining ethical standards and delivering
              unparalleled value to our partners, employees and stakeholders
              worldwide."
            </p>
          </div>
        </section>
      </div>

      <style>{`

.group-page{
background:#0a0a0a;
color:white;
overflow:hidden;
}


/* hero */

.hero-section{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
position:relative;
text-align:center;
overflow:hidden;
padding:20px;
}

.hero-bg{
position:absolute;
inset:0;
background:
radial-gradient(circle,#1f2937 0%,#0a0a0a 70%);
}

.hero-content{
position:relative;
z-index:5;
}

.hero-small{
letter-spacing:6px;
color:#777;
margin-bottom:20px;
}

.hero-section h1{
font-size:80px;
font-weight:900;
letter-spacing:12px;
}

.hero-section h1 span{
display:block;
background:linear-gradient(
90deg,
white,
#999
);

-webkit-background-clip:text;
color:transparent;
}

.hero-text{
max-width:700px;
margin:auto;
color:#999;
font-size:20px;
line-height:2;
margin-top:25px;
}

.mouse{
position:absolute;
bottom:40px;
left:50%;
transform:translateX(-50%);
width:28px;
height:48px;
border:1px solid #555;
border-radius:30px;
padding:6px;
}

.wheel{
width:4px;
height:10px;
background:white;
margin:auto;
border-radius:10px;
animation:bounce 1s infinite;
}

@keyframes bounce{
0%{transform:translateY(0)}
50%{transform:translateY(10px)}
100%{transform:translateY(0)}
}


/* holding */

.holding-section{
padding:120px 20px;
text-align:center;
}

.holding-section h2{
font-size:50px;
letter-spacing:8px;
margin-bottom:20px;
}

.holding-section h5{
background:linear-gradient(
90deg,
#aaa,
white
);

-webkit-background-clip:text;
color:transparent;

letter-spacing:5px;
}

.line{
width:100px;
height:1px;
background:#555;
margin:25px auto;
}

.holding-section p{
max-width:850px;
margin:auto auto 30px;
line-height:2;
font-size:18px;
color:#aaa;
}


/* cards */

.portfolio-company{
padding:100px 20px;
}

.title-box{
margin-bottom:50px;
}

.title-box small{
letter-spacing:5px;
color:#777;
}

.title-box h2{
font-size:50px;
margin-top:15px;
}

.company-card{
padding:40px;
border-radius:30px;

background:rgba(255,255,255,.03);

border:1px solid rgba(255,255,255,.1);

backdrop-filter:blur(20px);

transition:.5s;
height:100%;
}

.company-card:hover{
transform:translateY(-10px);
}

.education:hover{
box-shadow:0 0 30px rgba(56,189,248,.2);
}

.beauty:hover{
box-shadow:0 0 30px rgba(251,113,133,.2);
}

.trade:hover{
box-shadow:0 0 30px rgba(251,191,36,.2);
}

.tech:hover{
box-shadow:0 0 30px rgba(129,140,248,.2);
}

.company-card h3{
margin-bottom:25px;
}

.company-card p{
color:#aaa;
line-height:2;
}


.edu-link{
color:#38bdf8;
text-decoration:none;
font-weight:600;
}

.trade-btn{
padding:10px 20px;
border:1px solid #ffc107;
border-radius:30px;
text-decoration:none;
color:#ffc107;
display:inline-block;
}

.trade-btn:hover{
background:#ffc107;
color:black;
}


.badge-pill{
display:inline-flex;
gap:10px;
align-items:center;

padding:10px 18px;

border-radius:30px;
}

.beauty.badge-pill{
background:rgba(255,0,100,.1);
color:#ff7ca8;
}

.tech.badge-pill{
background:rgba(80,80,255,.1);
color:#9494ff;
}

.dot{
width:8px;
height:8px;
border-radius:50%;
background:currentColor;
animation:pulse 1s infinite;
}

@keyframes pulse{
50%{
opacity:.2;
}
}


/* vision */

.vision{
padding:140px 20px;
position:relative;
text-align:center;
}

.watermark{
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);

font-size:300px;
font-weight:900;

opacity:.03;
}

.vision small{
letter-spacing:6px;
color:#777;
}

.vision p{
font-size:28px;
max-width:900px;
margin:auto;
margin-top:30px;

color:#ddd;
font-style:italic;
line-height:2;
}


/* mobile */

@media(max-width:768px){

.hero-section h1{
font-size:45px;
}

.holding-section h2{
font-size:30px;
}

.title-box h2{
font-size:32px;
}

.vision p{
font-size:20px;
}

}

`}</style>
    </>
  )
}
