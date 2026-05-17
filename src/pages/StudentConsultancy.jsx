import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import KNUlogo from '../assets/KNUlogo.jpg'
import logo from '../assets/logo.png'
import KNUlogo3 from '../assets/KNUlogo3.png'

export default function StudentConsultancy () {
  const [activeCourse, setActiveCourse] = useState(null)
  const [activeUni, setActiveUni] = useState(null)
  const [activeService, setActiveService] = useState(null)
  const [previewImg, setPreviewImg] = useState(null)
  // ✅ GLOBAL IMAGE CLICK FIX
  useEffect(() => {
    const handleClick = e => {
      if (e.target.tagName === 'IMG') {
        setPreviewImg(e.target.src)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-left, .process-card')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const courseDetails = {
    bachelor: [
      'SSC Certificate',
      'HSC Certificate',
      'Passport',
      'IELTS / Language Proof'
    ],
    masters: ['Bachelor Certificate', 'Transcript', 'SOP', 'CV'],
    phd: ['Masters Degree', 'Research Proposal', 'Publications'],
    language: ['Passport', 'Basic Academic Documents'],
    diploma: ['SSC/HSC Certificate', 'Passport']
  }

  const serviceDetails = {
    'SOP Writing':
      'We help students write a professional Statement of Purpose (SOP) highlighting academic background, career goals, and motivation. Our team ensures the SOP meets university standards and increases acceptance chances.',

    'University Application':
      'We handle complete university applications including form fill-up, document submission, and communication with universities to ensure error-free submission.',

    'Visa Processing':
      'Step-by-step visa guidance including documentation, embassy requirements, and interview preparation to maximize visa success rate.',

    'Interview Preparation':
      'We prepare students for university and embassy interviews with mock sessions and real question patterns.',

    'Tuition Fee Guidance':
      'Guidance on tuition payment process, bank procedures, and international transfer systems.',

    'Pre-departure Support':
      'Final checklist including travel, accommodation, airport pickup, and student life preparation abroad.'
  }

  const studentReviews = [
    {
      name: 'Md Faysal AHmed Bhuiyan',
      text: 'I got my visa successfully and strat my eucation with Mina help. Thank you for ypur help.'
    },
    {
      name: 'H Khan',
      text: 'Very professional support from application to visa.'
    }
  ]

  const universityReviews = [
    {
      name: 'Kyungpook National University',
      text: 'Students from MINA CONSOL are well-prepared and they are really perfect for our university.'
    },
    {
      name: 'Canada College',
      text: 'Reliable partner for international recruitment.'
    }
  ]

  const mouUniversities = [
    {
      name: 'Kyungpook National University',
      logo: KNUlogo,
      mouImages: [logo]
    },
    {
      name: 'KNU University',
      logo: KNUlogo3,
      mouImages: [KNUlogo3]
    },
    {
      name: 'MY University',
      logo: KNUlogo3,
      mouImages: [logo]
    },
    {
      name: 'A University',
      logo: KNUlogo3,
      mouImages: [KNUlogo]
    },
    {
      name: 'Korean No1 University',
      logo: KNUlogo3,
      mouImages: [KNUlogo3]
    },
    {
      name: 'Korean No1 University',
      logo: KNUlogo3,
      mouImages: [KNUlogo3]
    }
  ]

  return (
    <div className='student-page'>
      {/* HERO */}
      <section className='hero'>
        <div className='overlay'>
          <h1>Study Abroad with Confidence</h1>
          <p>Professional guidance from application to visa approval</p>
        </div>
      </section>

      {/* INTRO */}
      <section className='section center'>
        <h2>Your Trusted Education Partner</h2>
        <p className='intro'>
          MINA CONSOL LIMITED provides complete student consultancy support —
          helping you choose the right country, university, and career path.
        </p>
      </section>

      {/* PROCESS */}
      <section className='section bg-soft'>
        <h2 className='center'>Our Process</h2>

        <div className='process-grid'>
          {[
            {
              title: 'Counseling',
              desc: 'We evaluate your academic background, budget, and career goals to guide you toward the best study options.'
            },
            {
              title: 'University Selection',
              desc: 'We help you choose the right university based on ranking, tuition fees, location, and career opportunities.'
            },
            {
              title: 'Documentation',
              desc: 'Complete guidance on preparing documents like certificates, transcripts, SOP, and other required papers.'
            },
            {
              title: 'Application',
              desc: 'We handle accurate application submission to universities to increase your chances of acceptance.'
            },
            {
              title: 'Visa Processing',
              desc: 'Step-by-step visa support including documentation, financial preparation, and interview training.'
            },
            {
              title: 'PAYMENT',
              desc: 'Give our payment'
            },
            {
              title: 'Departure',
              desc: 'Final preparation support including travel planning, accommodation, and settling guidance abroad.'
            }
          ].map((item, i) => (
            <div className='card process-card' key={i}>
              <span>0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE */}
      <section className='section center'>
        <h2>Course Categories</h2>
        <h6>Click On The Course You Want To Know</h6>

        <div className='course-grid'>
          {Object.keys(courseDetails).map(key => (
            <div
              key={key}
              className='course-card'
              onClick={() => setActiveCourse(activeCourse === key ? null : key)}
            >
              {key.toUpperCase()}
            </div>
          ))}
        </div>

        {activeCourse && (
          <div className='course-details'>
            <ul>
              <br />
              {courseDetails[activeCourse].map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* SERVICES */}
      <section className='section bg-soft'>
        <h2 className='center'>Our Services</h2>

        <div className='service-list'>
          {Object.keys(serviceDetails).map((item, i) => (
            <div key={i}>
              {/* CLICK CARD */}
              <div
                className='service-card fade-left'
                onClick={() =>
                  setActiveService(activeService === item ? null : item)
                }
              >
                {item}
              </div>

              {/* EXPAND DETAILS */}
              {activeService === item && (
                <div className='service-details'>
                  <p>{serviceDetails[item]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className='section center'>
        <h2>Popular Destinations</h2>

        <div className='countries'>
          <div>🇰🇷 South Korea</div>
          <div>🇨🇦 Canada</div>
          <div>🇦🇺 Australia</div>
          <div>🇯🇵 Japan</div>
          <div>🇲🇾 Malaysia</div>
          <div>UK United Kingdom</div>
        </div>
      </section>

      {/* ELIGIBILITY- Who Can Apply */}
      <section className='section bg-soft'>
        <h2 className='center'>Who Can Apply?</h2>

        <ul className='eligibility'>
          <li>✔ Minimum academic qualification</li>
          <li>✔ Valid financial support</li>
          <li>✔ Genuine student intention</li>
          <li>✔ Willing to follow visa rules</li>
        </ul>
      </section>

      {/* CONSULT */}
      <section className='consult'>
        <h2>Book a Free Consultation</h2>
        <p>Contact us directly to start your journey</p>

        <div className='contact-box'>
          <a href='tel:+8801234567890'>📞 Call</a>
          <a href='mailto:info@minaconsol.com'>📧 Email</a>
          <a href='https://wa.me/8801234567890'>💬 WhatsApp</a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className='section bg-soft'>
        <h2 className='center'>What People Say</h2>

        <div className='review-grid'>
          {studentReviews.map((r, i) => (
            <div className='review-card' key={i}>
              <p>"{r.text}"</p>
              <h4>{r.name}</h4>
              <span>Student</span>
            </div>
          ))}

          {universityReviews.map((r, i) => (
            <div className='review-card' key={i}>
              <p>"{r.text}"</p>
              <h4>{r.name}</h4>
              <span>University</span>
            </div>
          ))}
        </div>
      </section>

      {/* MOU */}
      <section className='section'>
        <h2 className='center'>Our University Partners</h2>

        <div className='mou-grid'>
          {mouUniversities.map((u, i) => (
            <div key={i}>
              <div
                className='mou-card'
                onClick={() => setActiveUni(activeUni === i ? null : i)}
              >
                <img src={u.logo} alt='' />
                <p>{u.name}</p>
              </div>

              {activeUni === i && (
                <div className='mou-details'>
                  {u.mouImages.map((img, index) => (
                    <img key={index} src={img} alt='' />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ MODAL */}
      {previewImg && (
        <div className='img-modal' onClick={() => setPreviewImg(null)}>
          <img src={previewImg} alt='' />
        </div>
      )}

      {/* STYLE */}
      <style>{`

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
scroll-behavior:smooth;
}

.student-page{
background:#f8fafc;
overflow:hidden;
color:#111827;
}

/* HERO */

.hero{
height:95vh;
background:
linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.55)),
url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')
center/cover no-repeat;
position:relative;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
}

.hero::before{
content:'';
position:absolute;
width:500px;
height:500px;
background:#2563eb;
filter:blur(150px);
opacity:.25;
top:-150px;
right:-150px;
border-radius:50%;
}

.hero::after{
content:'';
position:absolute;
width:400px;
height:400px;
background:#06b6d4;
filter:blur(140px);
opacity:.2;
bottom:-100px;
left:-100px;
border-radius:50%;
}

.overlay{
position:relative;
z-index:3;
text-align:center;
color:white;
padding:20px;
max-width:900px;
}

.overlay h1{
font-size:65px;
font-weight:800;
line-height:1.1;
margin-bottom:20px;
text-shadow:0 5px 25px rgba(0,0,0,.4);
}

.overlay p{
font-size:20px;
opacity:.95;
max-width:700px;
margin:auto;
line-height:1.8;
}


/* SECTION */

.section{
padding:100px 30px;
position:relative;
}

.center{
text-align:center;
}

.bg-soft{
background:#eef3f9;
}

.section h2{
font-size:42px;
margin-bottom:20px;
font-weight:800;
color:#0f172a;
}

.intro{
max-width:850px;
margin:auto;
font-size:18px;
line-height:1.9;
color:#475569;
}


/* PROCESS */

.process-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
margin-top:50px;
}

.card{
background:white;
padding:35px;
border-radius:24px;
box-shadow:
0 10px 30px rgba(0,0,0,.05);

transition:.5s;
border:1px solid rgba(255,255,255,.5);
position:relative;
overflow:hidden;
}

.card::before{
content:'';
position:absolute;
width:100%;
height:5px;
left:0;
top:0;
background:linear-gradient(
90deg,
#2563eb,
#06b6d4
);
}

.card:hover{
transform:
translateY(-12px);
box-shadow:
0 25px 60px rgba(0,0,0,.1);
}

.card span{
font-size:40px;
font-weight:900;
color:#2563eb20;
display:block;
margin-bottom:15px;
}

.process-card{
opacity:0;
transform:translateY(80px);
transition:1s;
}

.process-card.show{
opacity:1;
transform:translateY(0);
}


/* COURSE */

.course-grid{
display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;
margin-top:40px;
}

.course-card{
padding:14px 28px;
background:white;
border-radius:100px;
cursor:pointer;
font-weight:700;
box-shadow:0 6px 20px rgba(0,0,0,.06);
transition:.4s;
}

.course-card:hover{
transform:translateY(-5px);
background:#2563eb;
color:white;
}

.course-details{
margin-top:30px;
background:white;
padding:25px;
border-radius:20px;
max-width:500px;
margin-inline:auto;
box-shadow:0 10px 25px rgba(0,0,0,.05);
}


/* SERVICES */

.service-list{
margin-top:50px;
}

.service-card{
background:white;
padding:24px;
margin:15px auto;
max-width:700px;
border-radius:18px;
cursor:pointer;

box-shadow:
0 10px 25px rgba(0,0,0,.05);

transition:.5s;

opacity:0;
transform:translateX(-80px);
}

.service-card.show{
opacity:1;
transform:none;
}

.service-card:hover{
transform:translateY(-6px);
background:#2563eb;
color:white;
}

.service-details{
max-width:700px;
margin:auto;
padding:25px;
background:white;
border-left:5px solid #2563eb;
border-radius:0 20px 20px 0;
box-shadow:0 5px 20px rgba(0,0,0,.05);
animation:fade .4s;
}

@keyframes fade{
from{
opacity:0;
transform:translateY(15px)
}
to{
opacity:1;
transform:none
}
}


/* DESTINATION */

.countries{
display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;
margin-top:40px;
}

.countries div{
background:white;
padding:15px 25px;
border-radius:100px;
box-shadow:0 5px 20px rgba(0,0,0,.06);
font-weight:600;
transition:.4s;
}

.countries div:hover{
transform:translateY(-5px);
background:#2563eb;
color:white;
}


/* ELIGIBILITY */

.eligibility{
max-width:700px;
margin:auto;
list-style:none;
padding:0;
}

.eligibility li{
padding:18px;
margin:15px 0;
background:white;
border-radius:14px;
box-shadow:0 5px 20px rgba(0,0,0,.04);
}


/* CONSULT */

.consult{
padding:100px 20px;
text-align:center;

background:
linear-gradient(
135deg,
#111827,
#1e293b
);

color:white;
}

.consult h2{
font-size:45px;
margin-bottom:20px;
}

.contact-box{
max-width:450px;
margin:40px auto 0;
}

.contact-box a{
display:block;
padding:18px;
margin:15px 0;
border-radius:14px;
background:rgba(255,255,255,.08);
backdrop-filter:blur(20px);

color:white;
text-decoration:none;

transition:.4s;
}

.contact-box a:hover{
background:white;
color:black;
transform:translateY(-4px);
}


/* REVIEW */

.review-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
margin-top:50px;
}

.review-card{
background:white;
padding:30px;
border-radius:24px;
box-shadow:0 8px 30px rgba(0,0,0,.06);
transition:.4s;
}

.review-card:hover{
transform:translateY(-8px);
}

.review-card p{
line-height:1.8;
color:#555;
}

.review-card h4{
margin-top:20px;
}


/* MOU */

.mou-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
margin-top:50px;
}

.mou-card{
background:white;
padding:25px;
border-radius:24px;
text-align:center;
cursor:pointer;

box-shadow:
0 10px 30px rgba(0,0,0,.05);

transition:.4s;
}

.mou-card:hover{
transform:
translateY(-10px);
}

.mou-card img{
width:100px;
height:100px;
object-fit:contain;
margin-bottom:15px;
}

.mou-details{
margin-top:15px;
padding:20px;
background:white;
border-radius:20px;
display:flex;
gap:15px;
flex-wrap:wrap;
justify-content:center;
}

.mou-details img{
width:280px;
height:280px;
object-fit:cover;
border-radius:14px;
}


/* MODAL */

.img-modal{
position:fixed;
inset:0;
background:rgba(0,0,0,.92);

display:flex;
justify-content:center;
align-items:center;

z-index:9999;
}

.img-modal img{
max-width:90%;
max-height:90%;
border-radius:20px;
}


/* MOBILE */

@media(max-width:992px){

.review-grid{
grid-template-columns:repeat(2,1fr)
}

.mou-grid{
grid-template-columns:repeat(2,1fr)
}

.overlay h1{
font-size:45px;
}

.section h2{
font-size:35px;
}

}

@media(max-width:600px){

.hero{
height:75vh;
padding:20px;
}

.overlay h1{
font-size:30px;
}

.overlay p{
font-size:15px;
}

.section{
padding:65px 18px;
}

.review-grid,
.mou-grid,
.process-grid{
grid-template-columns:1fr;
}

.course-grid{
flex-direction:column;
align-items:center;
}

.course-card{
width:100%;
text-align:center;
}

.service-card{
width:100%;
}

.countries{
flex-direction:column;
}

.mou-details img{
width:100%;
height:auto;
}

.section h2{
font-size:28px;
}

}

`}</style>
    </div>
  )
}
