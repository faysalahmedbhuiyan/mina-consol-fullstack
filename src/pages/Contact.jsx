import React, { useRef, useState, Suspense } from 'react'
import logo from '../assets/logo.png'

import emailjs from '@emailjs/browser'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Model () {
  const mesh = useRef()

  const gltf = useGLTF('/assets/logo.glb')

  useFrame(state => {
    if (!mesh.current) return

    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      (state.pointer.x * Math.PI) / 6,
      0.08
    )

    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      (-state.pointer.y * Math.PI) / 6,
      0.08
    )
  })

  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      scale={2.5}
      position={[0, -0.2, 0]}
    />
  )
}

useGLTF.preload('/assets/logo.glb')

export default function Contact () {
  const form = useRef()

  const [isSending, setSending] = useState(false)
  const [isSuccess, setSuccess] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    setSending(true)

    try {
      await emailjs.sendForm(
        'service_xxxxx',
        'template_xxxxx',
        form.current,
        'public_key_xxxxx'
      )

      setSuccess(true)

      form.current.reset()

      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (err) {
      console.log(err)
    }

    setSending(false)
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
    <div className='contact-page'>
      <section className='hero'>
        <div className='hero-gradient' />

        <div className='hero-3d-bg'>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1} />

            <directionalLight position={[5, 5, 5]} intensity={2} />

            <pointLight position={[-5, -5, 5]} intensity={2} />

            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Model />
              </Float>
            </Suspense>
          </Canvas>
        </div>

        <div className='blob b1' />
        <div className='blob b2' />
        <div className='blob b3' />
        <div className='blob b4' />
        <div className='blob b5' />
      </section>

      <section className='container office'>
        <div className='row gy-5'>
          <div className='col-lg-5'>
            <h1>Welcome to Faymina Group</h1>

            <a href='mailto:faysalahmedtushan@gmail.com' className='big-mail'>
              minaconsol.official@gmail.com
            </a>

            <div className='row mt-5'>
              <div className='col-6'>
                <div className='small-title'>DHAKA</div>

                <h6>Head Office</h6>

                <p>+8801234567890</p>
              </div>

              <div className='col-6'>
                <div className='small-title'>OFFICE HOURS</div>

                <h6>Sat–Thu</h6>

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
          <br />
          <div className='col-lg-7'>
            <form ref={form} onSubmit={handleSubmit} className='glass-form'>
              <input name='name' placeholder='YOUR NAME' required />

              <input name='email' placeholder='EMAIL ADDRESS' required />

              <textarea
                name='message'
                rows='5'
                placeholder='MESSAGE'
                required
              />

              <button type='submit'>
                {isSending
                  ? 'SENDING...'
                  : isSuccess
                  ? 'MESSAGE SENT'
                  : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className='container dept'>
        <div className='row g-4'>
          {departments.map((item, i) => (
            <div key={i} className='col-lg-3 col-md-6'>
              <div className='dept-card'>
                <h5>{item.title}</h5>

                <p>{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='actions'>
        <div className='container button-wrap'>
          <a href='tel:+880123'>📞 Call</a>

          <a href='https://wa.me/880123'>💬 WhatsApp</a>

          <a href='mailto:faysalahmedtushan@gmail.com'>📧 Email</a>
        </div>
      </section>

      <section className='social'>
        <div className='container'>
          {socials.map((s, i) => (
            <a href='#' key={i}>
              {s}
            </a>
          ))}
        </div>
      </section>

      <style>{`

.contact-page{
background:#050505;
color:white;
overflow:hidden;
}

.hero{
height:100vh;
position:relative;
overflow:hidden;
}

.hero-gradient{
position:absolute;
inset:0;

background:
linear-gradient(
135deg,
#fdfeff,
#a9afbd,
#6a6565
);
}

.hero-3d-bg{
position:absolute;
top:50%;
left:50%;

transform:
translate(-50%,-50%);

width:600px;
height:600px;

z-index:3;

opacity:.95;
}

.hero canvas{
width:100%!important;
height:100%!important;
}

.blob{
position:absolute;

width:500px;
height:500px;

border-radius:50%;

filter:blur(140px);

opacity:.12;
}

.b1{
background:cyan;
top:-100px;
left:-100px;
}

.b2{
background:#9333ea;
bottom:-100px;
right:-100px;
}

.b3{
background:#ec4899;
top:50%;
left:40%;
}

.b4{
background:#3b82f6;
top:15%;
right:20%;
}

.b5{
background:#22c55e;
bottom:0;
left:20%;
}

.office{
padding:100px 0;
position:relative;
z-index:5;
}

.logo{
max-width:170px;
}

.big-mail{
display:block;
font-size:36px;
color:white;
margin:30px 0;
text-decoration:none;

line-height:1.4;

/* fix */
word-break:normal;
overflow-wrap:anywhere;
white-space:normal;

max-width:100%;
}

.map-wrap{
height:280px;
overflow:hidden;

border-radius:25px;
}

.map-wrap iframe{
width:100%;
height:100%;
border:none;
}

.glass-form{

padding:40px;

border-radius:30px;

background:
rgba(255,255,255,.03);

backdrop-filter:
blur(30px);

}

.glass-form input,
.glass-form textarea{

width:100%;
background:none;
border:none;

border-bottom:
1px solid rgba(
255,255,255,.1
);

padding:18px 0;

color:white;

margin-bottom:30px;
}

.glass-form button{

width:100%;
padding:18px;

border:none;

border-radius:15px;

cursor:pointer;
}

.dept{
padding:90px 0;
}

.dept-card{

padding:35px;

text-align:center;

border-radius:25px;

background:
rgba(255,255,255,.02);

}

.actions{
padding:100px 0;
}

.button-wrap{
display:flex;
gap:20px;
justify-content:center;
flex-wrap:wrap;
}

.button-wrap a{

padding:15px 30px;

border-radius:100px;

text-decoration:none;

color:white;

border:
1px solid rgba(
255,255,255,.1
);

}

.social{
padding-bottom:100px;
text-align:center;
}

.social a{
margin:15px;
color:#888;
}

@media(max-width:991px){

.hero{
height:70vh;
}

.hero-3d-bg{
width:400px;
height:400px;
}

.office{
padding:60px 20px;
}

.big-mail{
font-size:24px;
}

.glass-form{
padding:25px;
margin-top:30px;
}

.button-wrap{
flex-direction:column;
}

.button-wrap a{
width:100%;
text-align:center;
}

.logo{
max-width:120px;
}

}

`}</style>
    </div>
  )
}
