import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCourses } from '../services/course'
import { getProducts } from '../services/product'

export default function Admin () {
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])
  const [products, setProducts] = useState([])

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) navigate('/login')
  }, [])

  // 📦 Load data
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const courseRes = await getCourses()
      const productRes = await getProducts()

      setCourses(courseRes.data || [])
      setProducts(productRes.data || [])
    } catch (err) {
      console.log('DATA LOAD ERROR:', err)
    }
  }

  // 📊 Calculations
  const totalCourses = courses.length
  const activeCourses = courses.filter(c => c.status === 'active').length

  const totalProducts = products.length
  const activeProducts = products.filter(p => p.status === 'active').length

  return (
    <>
      <div className='admin-container'>
        <h1 className='dashboard-title'>Admin Dashboard</h1>

        <div className='grid'>
          {/* COURSES */}
          <div className='card'>
            <h3>Courses</h3>
            <p>Total Added</p>
            <h2>{totalCourses}</h2>

            <p className='sub'>Public Visible</p>
            <h4>{activeCourses}</h4>
          </div>

          {/* PRODUCTS */}
          <div className='card'>
            <h3>Export Products</h3>
            <p>Total Added</p>
            <h2>{totalProducts}</h2>

            <p className='sub'>Public Visible</p>
            <h4>{activeProducts}</h4>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .admin-container {
          min-height: 100vh;
          width: 100%;
          max-width: 100%;   /* 🔥 remove boxed limit */
          margin: 0;         /* 🔥 center gap remove */
          padding: 30px 20px;
          background: #14092d;
          color: white;
        }

        body {
          margin: 0;
          padding: 0;
        }
        .dashboard-title {
          margin-bottom: 30px;
          font-size: 28px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .card {
          background: #1e1e1e;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card h3 {
          margin-bottom: 10px;
          color: #aaa;
        }

        .card p {
          font-size: 13px;
          color: #888;
        }

        .card h2 {
          margin: 10px 0;
          font-size: 32px;
          color: #4cafef;
        }

        .sub {
          margin-top: 10px;
        }

        .card h4 {
          font-size: 20px;
          color: #00e676;
        }

        @media (max-width: 600px) {
          .dashboard-title {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  )
}
