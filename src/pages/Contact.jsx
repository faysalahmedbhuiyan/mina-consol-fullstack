import React, { useState } from 'react'
import logo from '../assets/logo.png'
//import bgImageFile from '../assets/KNUlogo.jpg'

export default function Contact () {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  })

  // image থাকলে use
  const bgImage = bgImageFile

  const handleMouseMove = e => {
    const x = e.clientX
    const y = e.clientY

    setMouse({ x, y })
  }

  const departments = [
    {
      title: 'Sales',
      email: 'sales@minaconsol.com'
    },
    {
      title: 'HR / Careers',
      email: 'hr@minaconsol.com'
    },
    {
      title: 'Media / PR',
      email: 'media@minaconsol.com'
    },
    {
      title: 'General Inquiry',
      email: 'faysalahmedtushan@gmail.com'
    }
  ]

  const socials = ['LinkedIn', 'Facebook', 'Twitter', 'YouTube']

  return (
    <>
      <div className='contact-page' onMouseMove={handleMouseMove}>
        {/* DYNAMIC BG */}

        <div className='bg-wrap'>
          {/* image mode */}

          {bgImage && (
            <div
              className='bg-image'
              style={{
                backgroundImage: `url(${bgImage})`,
                transform: `
                translate(
                ${-mouse.x / 50}px,
                ${-mouse.y / 50}px
                )
                scale(1.08)
                `
              }}
            />
          )}

          {/* color mode */}

          {!bgImage && (
            <>
              <div
                className='blob blob1'
                style={{
                  transform: `
                  translate(
                  ${mouse.x / 30}px,
                  ${mouse.y / 35}px
                  )
                  `
                }}
              />

              <div
                className='blob blob2'
                style={{
                  transform: `
                  translate(
                  ${-mouse.x / 40}px,
                  ${mouse.y / 40}px
                  )
                  `
                }}
              />

              <div
                className='blob blob3'
                style={{
                  transform: `
                  translate(
                  ${mouse.x / 50}px,
                  ${-mouse.y / 45}px
                  )
                  `
                }}
              />
            </>
          )}
        </div>

        {/* HERO */}

        <section className='hero'>
          <div className='container hero-inner'>
            <p className='sub-top'>WE LOOK FORWARD TO HEARING FROM YOU</p>

            <h1>Say hello</h1>
          </div>
        </section>

        {/* OFFICE */}

        <section className='office-section'>
          <div className='container'>
            <div className='row align-items-center g-5'>
              {/* LEFT */}

              <div className='col-lg-6'>
                <img src={logo} className='logo' alt='' />

                <div className='mail'>faysalahmedtushan@gmail.com</div>

                <div className='row mt-5'>
                  <div className='col-6'>
                    <div className='city'>DHAKA</div>

                    <p>Head Office</p>

                    <p>+8801234567890</p>
                  </div>

                  <div className='col-6'>
                    <div className='city'>HOURS</div>

                    <p>Sat–Thu</p>

                    <p>9AM–6PM</p>
                  </div>
                </div>

                <div className='map-wrap mt-5'>
                  <iframe
                    src='https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    title='map'
                  />
                </div>
              </div>

              {/* RIGHT */}

              <div className='col-lg-6'>
                <div className='glass-form'>
                  <h3>QUICK INQUIRY</h3>

                  <input placeholder='YOUR NAME' />

                  <input placeholder='EMAIL' />

                  <textarea rows='5' placeholder='MESSAGE' />

                  <button>SEND MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPT */}

        <section className='dept-section'>
          <div className='container'>
            <h2>DEPARTMENTS</h2>

            <div className='row g-4'>
              {departments.map((item, i) => (
                <div className='col-lg-3 col-sm-6' key={i}>
                  <div className='dept-card'>
                    <h3>{item.title}</h3>

                    <p>{item.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACTION */}

        <section className='action'>
          <div className='container'>
            <div className='buttons'>
              <a href='tel:+880123'>📞 Call</a>

              <a href='https://wa.me/880123'>💬 Whatsapp</a>

              <a href='mailto:faysalahmedtushan@gmail.com'>📧 Email</a>
            </div>
          </div>
        </section>

        {/* SOCIAL */}

        <section className='social'>
          <div className='container'>
            {socials.map((s, i) => (
              <a key={i} href='#'>
                {s}
              </a>
            ))}
          </div>
        </section>
      </div>

      <style>{`

.contact-page{

background:
linear-gradient(
135deg,
#050505,
#0f172a,
#000
);

min-height:100vh;

position:relative;

overflow:hidden;

color:white;

}


/* BG */

.bg-wrap{

position:fixed;

inset:0;

overflow:hidden;

z-index:0;

pointer-events:none;

}


.bg-image{

position:absolute;

inset:-10%;

background-size:cover;

background-position:center;

transition:
transform .8s cubic-bezier(
0.16,
1,
0.3,
1
);

will-change:transform;

opacity:.25;

}


.blob{

position:absolute;

width:700px;

height:700px;

border-radius:50%;

filter:blur(120px);

opacity:.25;

will-change:transform;

transition:
transform .8s cubic-bezier(
0.16,
1,
0.3,
1
);

}


.blob1{

background:
linear-gradient(
to right,
rgba(6,182,212,.5),
rgba(147,51,234,.4)
);

top:-150px;
left:-150px;

}


.blob2{

background:
linear-gradient(
to right,
rgba(59,130,246,.4),
rgba(244,63,94,.3)
);

bottom:-250px;
right:-150px;

}


.blob3{

background:
linear-gradient(
to right,
rgba(168,85,247,.5),
rgba(14,165,233,.4)
);

top:40%;
left:35%;

}


.hero,
.office-section,
.dept-section,
.action,
.social{

position:relative;

z-index:3;

}


.hero{

min-height:65vh;

display:flex;

align-items:center;

padding:100px 0;

}


.sub-top{

letter-spacing:5px;

color:#888;

font-size:12px;

margin-bottom:30px;

}


.hero h1{

font-size:90px;

font-style:italic;

font-family:serif;

}


.mail{

font-size:40px;

font-weight:300;

margin-top:20px;

}


.logo{

width:90px;

}


.city{

font-size:13px;

letter-spacing:5px;

color:#888;

margin-bottom:15px;

}


.city+p{

font-size:18px;

}


.map-wrap{

overflow:hidden;

border-radius:30px;

border:
1px solid rgba(
255,
255,
255,
.08
);

}


.map-wrap iframe{

width:100%;

height:350px;

border:none;

filter:
grayscale(1)
contrast(1.4)
opacity(.7);

transition:.7s;

}


.map-wrap:hover iframe{

opacity:1;

filter:grayscale(0);

}


.glass-form{

padding:50px;

background:
rgba(
255,
255,
255,
.02
);

backdrop-filter:
blur(30px);

border:
1px solid rgba(
255,
255,
255,
.05
);

border-radius:40px;

box-shadow:
0 30px 60px
rgba(0,0,0,.5);

}


.glass-form h3{

margin-bottom:35px;

letter-spacing:4px;

}


.glass-form input,
.glass-form textarea{

width:100%;

background:none;

border:none;

border-bottom:
1px solid rgba(
255,
255,
255,
.1
);

padding:18px 0;

margin-bottom:25px;

color:white;

}


.glass-form input:focus,
.glass-form textarea:focus{

outline:none;

border-color:
#06b6d4;

}


.glass-form button{

width:100%;

padding:18px;

border:none;

border-radius:14px;

font-size:12px;

font-weight:800;

letter-spacing:4px;

transition:.5s;

}


.glass-form button:hover{

letter-spacing:8px;

}


.dept-section{

padding:120px 0;

}


.dept-section h2{

margin-bottom:60px;

font-size:45px;

}


.dept-card{

padding:35px;

background:
rgba(
255,
255,
255,
.02
);

border:
1px solid rgba(
255,
255,
255,
.05
);

border-radius:25px;

transition:.5s;

}


.dept-card:hover{

transform:
translateY(-10px);

}


.dept-card p{

color:#06b6d4;

}


.buttons{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

padding:80px 0;

}


.buttons a{

padding:
14px 35px;

border:
1px solid rgba(
255,
255,
255,
.1
);

border-radius:100px;

color:white;

text-decoration:none;

transition:.5s;

}


.buttons a:hover{

background:white;

color:black;

}


.social{

padding-bottom:100px;

text-align:center;

}


.social a{

margin:10px;

padding:
14px 25px;

display:inline-block;

border:
1px solid rgba(
255,
255,
255,
.08
);

border-radius:15px;

color:#888;

text-decoration:none;

}


.social a:hover{

color:white;

}


/* MOBILE AUTO FLOAT */

@media(max-width:768px){

.blob{

animation:
floatBlob 8s ease-in-out infinite;

}

.hero h1{

font-size:55px;

}

.mail{

font-size:28px;

}

}


@keyframes floatBlob{

0%{

transform:
translate(0,0);

}

50%{

transform:
translate(
30px,
-30px
);

}

100%{

transform:
translate(0,0);

}

}

`}</style>
    </>
  )
}
