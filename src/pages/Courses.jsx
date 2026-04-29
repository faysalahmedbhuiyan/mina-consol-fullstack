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
      .{
      background: #F5F5F5
      }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding-left: 40px;  /* আপনার প্রয়োজন অনুযায়ী সংখ্যা (px) বাড়াতে বা কমাতে পারেন */
           padding-right: 20px;
        }

        .card {
          background: #a7e5fb;
          backdrop-filter: blur(10px);
          border-radius: 12px ;
          overflow: hidden;
          height: 260px;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          boder: 1px solid rgba(255,255,255,0.3)
        }
        .card:hover {
          transform: translateY(-10px); /* কার্ডটি ১০ পিক্সেল উপরে উঠে আসবে */
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* শ্যাডো আরও গাঢ় হবে */
          border: 1px solid #3498db; /* হালকা বর্ডার যোগ হবে (ঐচ্ছিক) */
        }
        
        /* ================= CONTENT TEXT IMPROVED ================= */

          .content {
            padding: 14px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          /* each field block */
          .field {
            display: flex;
            flex-direction: column;
            gap: 2px;
            padding: 6px 0;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }

          /* last field no border */
          .field:last-child {
            border-bottom: none;
          }

          /* label (title) */
          .label {
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.5px;
            color: #0077b6; /* primary accent */
            text-transform: uppercase;
            opacity: 0.8;
          }

          /* main value text */
          .value {
            font-size: 14px;
            font-weight: 500;
            color: #1a1a1a;
            line-height: 1.5;
            word-break: break-word;
          }

          /* details (long text) */
          .card.expanded .value {
            font-size: 15px;
            line-height: 1.7;
            color: #333;
          }

          /* better spacing when expanded */
          .card.expanded .content {
            padding: 18px 20px;
          }

          /* subtle hover effect */
          .card:hover .value {
            color: #000;
          }

          /* mobile optimization */
          @media (max-width: 768px) {
            .value {
              font-size: 13px;
            }

            .card.expanded .value {
              font-size: 14px;
            }

            .label {
              font-size: 10px;
            }
          }

        .card.expanded {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 900px;
          height: 80vh;
          z-index: 1000;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          background: #F0F4F8;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          cursor: pointer;
          background: black;
          color: white;
          padding: 8px;
          border-radius: 50%;
        }

        .media {
          height: 50%;
          position: relative;
        }

        .media img,
        .media video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          cursor: zoom-in;
        }

        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }

        .left { left: 10px; }
        .right { right: 10px; }

        .content {
          padding: 12px;
        }

        .label {
          font-size: 11px;
          color: #328CC1;
          font-weight: bold;
        }

        .value {
          font-size: 13px;
        }

        /* 🔥 FULLSCREEN MEDIA */
        .media-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          backdrop-filter: blur(20px);
          animation: fadeIn 0.3s ease;
        }

        .media-modal img,
        .media-modal video {
          max-width: 95%;
          max-height: 90%;
          border-radius: 10px;
        }

        .media-close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 24px;
          cursor: pointer;
          background: rgba(0,0,0,0.6);
          padding: 10px;
          border-radius: 50%;
        }

        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .card.expanded {
            width: 95%;
            height: 90vh;
          }
        }
      `}</style>
    </div>
  )
}
