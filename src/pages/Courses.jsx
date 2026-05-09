import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'

export default function CoursesAdvanced () {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSection, setSelectedSection] = useState('all')

  const [expandedId, setExpandedId] = useState(null)
  const [mediaIndex, setMediaIndex] = useState({})
  const [activeMedia, setActiveMedia] = useState(null) // 🔥 NEW

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/courses')
        setCourses(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  const sections = [
    'all',
    ...new Set(courses.map(c => c.section).filter(Boolean))
  ]

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch =
        course.course_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.details?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSection =
        selectedSection === 'all' || course.section === selectedSection

      return matchesSearch && matchesSection
    })
  }, [courses, searchQuery, selectedSection])

  const groupedCourses = useMemo(() => {
    const grouped = {}
    filteredCourses.forEach(course => {
      const section = course.section || 'Other'
      if (!grouped[section]) grouped[section] = []
      grouped[section].push(course)
    })
    return grouped
  }, [filteredCourses])

  const nextMedia = (id, mediaLength) => {
    setMediaIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % mediaLength
    }))
  }

  const prevMedia = (id, mediaLength) => {
    setMediaIndex(prev => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + mediaLength) % mediaLength
    }))
  }

  if (loading) return <div className='loader'>Loading...</div>

  return (
    <div className='page'>
      {/* HEADER */}
      <div className='header'>
        <h1>Courses</h1>

        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

        <div className='filters'>
          {sections.map(section => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={selectedSection === section ? 'active' : ''}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* COURSES */}
      {Object.entries(groupedCourses).map(([section, list]) => (
        <div key={section} className='section'>
          <h2>{section}</h2>

          <div className='grid'>
            {list.map(course => {
              const isExpanded = expandedId === course.id
              const currentMedia = mediaIndex[course.id] || 0

              return (
                <div
                  key={course.id}
                  className={`card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => setExpandedId(course.id)}
                >
                  {/* CLOSE */}
                  {isExpanded && (
                    <span
                      className='close'
                      onClick={e => {
                        e.stopPropagation()
                        setExpandedId(null)
                      }}
                    >
                      ✖
                    </span>
                  )}

                  {/* MEDIA */}
                  {course.media?.length > 0 && (
                    <div className='media'>
                      {isExpanded && (
                        <button
                          className='nav left'
                          onClick={e => {
                            e.stopPropagation()
                            prevMedia(course.id, course.media.length)
                          }}
                        >
                          ‹
                        </button>
                      )}

                      {/* 🔥 CLICK TO ZOOM */}
                      {course.media[currentMedia]?.match(
                        /\.(mp4|webm|ogg)$/i
                      ) ? (
                        <video
                          controls
                          onClick={e => {
                            e.stopPropagation()
                            setActiveMedia({
                              type: 'video',
                              src: `http://127.0.0.1:8000/storage/${course.media[currentMedia]}`
                            })
                          }}
                        >
                          <source
                            src={`http://127.0.0.1:8000/storage/${course.media[currentMedia]}`}
                          />
                        </video>
                      ) : (
                        <img
                          src={`http://127.0.0.1:8000/storage/${course.media[currentMedia]}`}
                          alt=''
                          onClick={e => {
                            e.stopPropagation()
                            setActiveMedia({
                              type: 'image',
                              src: `http://127.0.0.1:8000/storage/${course.media[currentMedia]}`
                            })
                          }}
                        />
                      )}

                      {isExpanded && (
                        <button
                          className='nav right'
                          onClick={e => {
                            e.stopPropagation()
                            nextMedia(course.id, course.media.length)
                          }}
                        >
                          ›
                        </button>
                      )}
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className='content'>
                    <div className='field'>
                      <span className='label'>Course Name: </span>
                      <span className='value'>{course.course_name}</span>
                    </div>

                    <div className='field'>
                      <span className='label'>Instructor Name: </span>
                      <span className='value'>{course.instructor_name}</span>
                    </div>

                    {isExpanded && (
                      <div className='field'>
                        <span className='label'>Details: </span>
                        <span className='value'>{course.details}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <br />
        </div>
      ))}

      {/* ================= FULLSCREEN MEDIA ================= */}
      {activeMedia && (
        <div className='media-modal' onClick={() => setActiveMedia(null)}>
          <span className='media-close'>✖</span>

          {activeMedia.type === 'video' ? (
            <video controls autoPlay>
              <source src={activeMedia.src} />
            </video>
          ) : (
            <img src={activeMedia.src} alt='' />
          )}
        </div>
      )}

      {/* ================= CSS ================= */}
      <style>{`

/* ================= BASE ================= */
body{
  background: #eef3f8;
}

/* ================= SECTION TITLE BOX ================= */
/* ================= SECTION TITLE BOX (FIXED) ================= */
.section h2 {
  display: block;              /* fix */
  width: fit-content;          /* box width auto */
  margin: 30px auto 20px;      /* center horizontally */
  text-align: center;

  background: linear-gradient(135deg, #9eb1c5, #ded51c);
  color: white;
  padding: 10px 25px;
  border-radius: 30px;

  font-size: 20px;
  font-weight: 600;

  box-shadow: 0 6px 15px rgba(197, 115, 115, 0.2);
}



/* direct styling */
.section h2 {
  background: linear-gradient(135deg, #4da3ff, #0077ff);
  color: white;
  align-items: center;
  display: inline-block;
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* ================= GRID ================= */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  padding: 20px 40px;
}

/* ================= CARD ================= */
.card {
  background: linear-gradient(135deg, #ffffff, #f1f6fb);
  border-radius: 16px;
  overflow: hidden;
  height: 260px;
  cursor: pointer;
  transition: all 0.35s ease;
  position: relative;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border: 1px solid #4da3ff;
}

/* ================= CONTENT ================= */
.content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ================= FIELD ================= */
.field {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.field:last-child {
  border-bottom: none;
}

/* ================= COURSE NAME BOX ================= */
.field:first-child {
  align-items: center;
  text-align: center;
}

.field:first-child .label {
  display: none;
}

.field:first-child .value {
  background: linear-gradient(135deg, #4da3ff, #0077ff);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
}

/* ================= TEXT ================= */
.label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #4da3ff;
  text-transform: uppercase;
}

.value {
  font-size: 14px;
  font-weight: 500;
  color: #222;
  line-height: 1.5;
  word-break: break-word;
}

/* ================= EXPANDED ================= */
.card.expanded {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 92%;
  max-width: 900px;
  height: 85vh;
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  border-radius: 20px;
}

/* ================= CLOSE ================= */
.close {
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  background: #111;
  color: white;
  padding: 8px 10px;
  border-radius: 50%;
}

.close:hover{
  background:#ff4d4d;
}

/* ================= MEDIA ================= */
.media {
  height: 50%;
  background: #000;
}

.media img,
.media video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ================= NAV ================= */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.6);
  color: white;
  border: none;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 8px;
}

.nav:hover{
  background:#4da3ff;
}

.left { left: 10px; }
.right { right: 10px; }

/* ================= HEADER ================= */
.header{
  padding: 20px 40px;
}

.header h1{
  font-size: 32px;
}

/* ================= FILTER ================= */
.filters{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}

.filters button{
  padding: 8px 14px;
  border-radius: 20px;
  border:none;
  background:#e6edf5;
}

.filters .active{
  background:#4da3ff;
  color:white;
}

/* ================= MODAL ================= */
.media-modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    height: auto;
  }

  .section h2 {
    font-size: 16px;
    padding: 8px 18px;
  }
}

`}</style>
    </div>
  )
}
