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
    const elements = document.querySelectorAll('.fade-left')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    elements.forEach(el => observer.observe(el))
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
            <div className='card' key={i}>
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
  *{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI'}

  .hero{
    height:90vh;
    background:url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1') center/cover no-repeat;
    position:relative;
  }

  .overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
  }

  .overlay h1{font-size:52px}

  .section{padding:80px 20px}
  .center{text-align:center}
  .bg-soft{background:#f5f7fa}

  .intro{max-width:700px;margin:auto;margin-top:15px;color:#555}

  .process-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
    margin-top:40px;
  }

  .card{
  background:white;
  padding:25px;
  border-radius:12px;
  box-shadow:0 6px 15px rgba(0,0,0,0.1);

  /* OLD */
  /* transition:.3s; */

  /* NEW */
  opacity: 1;
  transform: translateX(-80px);
  animation: slideLeft 0.8s ease forwards;
}

/* hover same থাকবে */
.card:hover{
  transform: translateY(-6px);
}

/* one by one animation delay */
.process-grid .card:nth-child(1){
  animation-delay: 0.1s;
}

.process-grid .card:nth-child(2){
  animation-delay: 0.5s;
}

.process-grid .card:nth-child(3){
  animation-delay: 1s;
}

.process-grid .card:nth-child(4){
  animation-delay: 3s;
}

.process-grid .card:nth-child(5){
  animation-delay: 4s;
}

.process-grid .card:nth-child(6){
  animation-delay: 5s;
}

.process-grid .card:nth-child(7){
  animation-delay: 6s;
}

/* animation */
@keyframes slideLeft{
  to{
    opacity: 1;
    transform: translateX(0);
  }
}


  .course-grid{
    display:flex;
    justify-content:center;
    gap:15px;
    flex-wrap:wrap;
    margin-top:30px;
  }

  .course-card{
    padding:12px 20px;
    background:black;
    color:white;
    border-radius:20px;
    cursor:pointer;
  }

  .course-details li{margin:8px 0}

  .service-card{
    background:white;
    margin:15px auto;
    padding:20px;
    max-width:500px;
    border-radius:10px;
    transform:translateX(-100px);
    opacity:0;
    transition:0.5s;
  }

  .service-card.show{
    transform:translateX(0);
    opacity:1;
  }

  .service-details {
    max-width: 500px;
    margin: 10px auto 20px;
    background: #fff;
    padding: 15px;
    border-left: 4px solid #007bff;
    border-radius: 8px;
    animation: fadeIn 0.3s ease;
  }

  .service-details p {
    font-size: 14px;
    color: #444;
    line-height: 1.6;
  }

  .countries{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:15px;
    margin-top:30px;
  }

  .countries div{
    background:#eee;
    padding:10px 20px;
    border-radius:20px;
  }

  .consult{
    padding:80px 20px;
    text-align:center;
    background:#111;
    color:white;
  }

  .contact-box a{
    background:#222;
    padding:12px;
    display:block;
    margin:10px 0;
    border-radius:8px;
    color:white;
    text-decoration:none;
  }

  .review-grid{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
  }

  .review-card{
    background:white;
    padding:20px;
    border-radius:12px;
  }

  .mou-grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;
  }

  .mou-card {
    text-align: center;
    cursor: pointer;
    padding: 15px;
    background: white;
    border-radius: 12px;
    transition: 0.3s;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .mou-card:hover {
    transform: translateY(-5px);
  }

  .mou-card img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .mou-details {
    margin-top: 15px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background: #f5f5f5;
    padding: 15px;
    border-radius: 10px;
    animation: fadeIn 0.3s ease;
  }

  .mou-details img {
    width: 300px;
    height: 300px;
    object-fit: fit;
    border-radius: 6px;
  }

  .img-modal{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.9);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
    cursor:pointer;
  }

  .img-modal img{
    max-width:100%;
    max-height:100%;
    border-radius:10px;
  }

  /* =========================
     ✅ ONLY RESPONSIVE ADDED
     ========================= */

  /* Tablet */
  @media (max-width: 992px){
    .review-grid{
      grid-template-columns: repeat(2, 1fr);
    }

    .mou-grid{
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Mobile */
  @media (max-width: 600px){

    .overlay h1{
      font-size:28px;
      text-align:center;
    }

    .overlay p{
      font-size:14px;
      text-align:center;
      padding:0 10px;
    }

    .section{
      padding:50px 15px;
    }

    .process-grid{
      grid-template-columns: 1fr;
    }

    .review-grid{
      grid-template-columns: 1fr;
    }

    .mou-grid{
      grid-template-columns: 1fr;
    }

    .course-grid{
      flex-direction:column;
      align-items:center;
    }

    .course-card{
      width:90%;
      text-align:center;
    }

    .service-card{
      width:90%;
    }

    .countries{
      flex-direction:column;
      align-items:center;
    }

    .mou-details img{
      width:100%;
      height:auto;
    }
  }

`}</style>
    </div>
  )
}
