import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../api/axios'

export default function Login () {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async e => {
    e.preventDefault() // 🔥 prevent reload

    try {
      const res = await API.post('/login', {
        email,
        password
      })

      console.log('LOGIN SUCCESS:', res.data)

      localStorage.setItem('token', res.data.token)

      navigate('/admin')
    } catch (err) {
      console.log('LOGIN ERROR:', err.response?.data)
      alert('Login failed')
    }
  }

  return (
    <>
      <div className='login-wrapper'>
        <form className='form-signin' onSubmit={handleLogin}>
          <h1 className='title'>Admin Login</h1>

          <input
            type='email'
            placeholder='Email address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type='submit'>Sign in</button>

          <p className='footer'>© Mina Consol Limited</p>
        </form>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .login-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
        }

        .form-signin {
          width: 100%;
          max-width: 350px;
          padding: 40px 30px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
        }

        .title {
          text-align: center;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .form-signin input {
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          transition: 0.2s;
        }

        .form-signin input:focus {
          border-color: #007bff;
          outline: none;
          box-shadow: 0 0 0 2px rgba(0,123,255,0.1);
        }

        .form-signin button {
          padding: 12px;
          background: #0d6efd;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 15px;
          cursor: pointer;
          transition: 0.2s;
        }

        .form-signin button:hover {
          background: #0b5ed7;
        }

        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 13px;
          color: #888;
        }

        @media (max-width: 500px) {
          .form-signin {
            margin: 0 15px;
          }
        }
      `}</style>
    </>
  )
}
