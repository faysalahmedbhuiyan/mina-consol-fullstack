import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminCourse () {
  const [courseName, setCourseName] = useState('')
  const [details, setDetails] = useState('')
  const [instructorName, setInstructorName] = useState('')
  const [mediaFiles, setMediaFiles] = useState([])
  const [section, setSection] = useState('')
  const [newSection, setNewSection] = useState('')
  const [sections, setSections] = useState([])
  const [courses, setCourses] = useState([])
  const [editingCourse, setEditingCourse] = useState(null)
  const [pdf, setPdf] = useState(null)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/courses')
      setCourses(res.data)

      const uniqueSections = [
        ...new Set(res.data.map(c => c.section).filter(Boolean))
      ]
      setSections(uniqueSections)
    } catch (err) {
      console.error(err)
    }
  }

  const submit = async e => {
    e.preventDefault()

    // Determine which section to use
    const finalSection = section === '__new' ? newSection : section

    // Validate
    if (!courseName || !instructorName || !finalSection) {
      alert('Please fill all required fields!')
      return
    }

    try {
      const formData = new FormData()
      formData.append('course_name', courseName)
      formData.append('details', details)
      formData.append('instructor_name', instructorName)
      formData.append('section', finalSection)

      mediaFiles.forEach(file => formData.append('media[]', file))

      await axios.post('http://127.0.0.1:8000/api/courses', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      if (pdf) {
        formData.append('pdf', pdf)
      }

      fetchCourses()
      alert('Course added successfully!')

      // Reset form
      setCourseName('')
      setDetails('')
      setInstructorName('')
      setMediaFiles([])
      setSection('')
      setNewSection('')
    } catch (err) {
      console.error(err)
      alert('Error adding course!')
    }
  }

  const editCourse = course => {
    setEditingCourse(course)

    setCourseName(course.course_name)
    setDetails(course.details || '')
    setInstructorName(course.instructor_name || '')
    setSection(course.section || '')
    setNewSection('')
  }
  const updateCourse = async e => {
    e.preventDefault()

    const finalSection = section === '__new' ? newSection : section

    try {
      const formData = new FormData()
      formData.append('course_name', courseName)
      formData.append('details', details)
      formData.append('instructor_name', instructorName)
      formData.append('section', finalSection)

      mediaFiles.forEach(file => formData.append('media[]', file))

      await axios.post(
        `http://127.0.0.1:8000/api/courses/${editingCourse.id}?_method=PUT`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      alert('Course updated successfully!')
      setEditingCourse(null)
      fetchCourses()

      // reset
      setCourseName('')
      setDetails('')
      setInstructorName('')
      setMediaFiles([])
      setSection('')
      setNewSection('')
    } catch (err) {
      console.error(err)
      alert('Error updating course!')
    }
  }

  const deleteCourse = async id => {
    if (!window.confirm('Are you sure to delete?')) return
    try {
      await axios.delete(`http://127.0.0.1:8000/api/courses/${id}`)
      fetchCourses()
      alert('Course deleted successfully!')
    } catch (err) {
      console.error(err)
      alert('Error deleting course!')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin: Add Course</h1>
      <form onSubmit={submit}>
        <input
          type='text'
          placeholder='Course Name'
          value={courseName}
          onChange={e => setCourseName(e.target.value)}
          required
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px',
            width: '100%'
          }}
        />
        <textarea
          placeholder='Details'
          value={details}
          onChange={e => setDetails(e.target.value)}
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px',
            width: '100%',
            minHeight: '80px'
          }}
        />
        <input
          type='text'
          placeholder='Instructor Name'
          value={instructorName}
          onChange={e => setInstructorName(e.target.value)}
          required
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px',
            width: '100%'
          }}
        />
        <input
          type='file'
          multiple
          onChange={e => setMediaFiles([...e.target.files])}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        //pdf input
        <input
          type='file'
          accept='application/pdf'
          onChange={e => setPdf(e.target.files[0])}
          style={{ display: 'block', marginBottom: '10px' }}
        />
        <select
          value={section}
          onChange={e => {
            setSection(e.target.value)
            setNewSection('') // Reset new section input when selecting existing
          }}
          required
          style={{
            display: 'block',
            marginBottom: '10px',
            padding: '8px',
            width: '100%'
          }}
        >
          <option value=''>Select Section</option>
          {sections.map((sec, i) => (
            <option key={i} value={sec}>
              {sec}
            </option>
          ))}
          <option value='__new'>+ Create New Section</option>
        </select>
        {section === '__new' && (
          <input
            type='text'
            placeholder='Enter new section name'
            value={newSection}
            onChange={e => setNewSection(e.target.value)}
            required
            style={{
              display: 'block',
              marginBottom: '10px',
              padding: '8px',
              width: '100%'
            }}
          />
        )}
        <button
          type='submit'
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Add Course
        </button>
      </form>
      <br />
      <h1>{editingCourse ? 'Edit Course' : 'Admin: Edit Course'}</h1>

      <form onSubmit={editingCourse ? updateCourse : submit}>
        <button type='submit'>
          {editingCourse
            ? 'Update Course'
            : 'Add  Edit Course(Click the course you want to edit)'}
        </button>
        {editingCourse && (
          <button
            type='button'
            onClick={() => {
              setEditingCourse(null)
              setCourseName('')
              setDetails('')
              setInstructorName('')
              setMediaFiles([])
              setSection('')
              setNewSection('')
            }}
            style={{
              marginLeft: '10px',
              padding: '10px',
              background: '#777',
              color: 'white',
              border: 'none'
            }}
          >
            Cancel
          </button>
        )}
      </form>
      <h2>All Courses</h2>
      {courses.length === 0 ? (
        <p>No courses added yet</p>
      ) : (
        courses.map(course => (
          <div
            key={course.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '4px'
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <strong>{course.course_name}</strong>
              <span style={{ marginLeft: '10px', color: '#666' }}>
                Section: {course.section}
              </span>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <p>
                <strong>Instructor:</strong> {course.instructor_name}
              </p>
              <p>
                <strong>Details:</strong> {course.details}
              </p>
            </div>

            <div style={{ marginBottom: '10px' }}>
              {course.media && course.media.length > 0 ? (
                <>
                  <strong>Media:</strong>
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap',
                      marginTop: '10px'
                    }}
                  >
                    {course.media.map((m, i) =>
                      m.match(/\.(mp4|webm|ogg)$/i) ? (
                        <video
                          key={i}
                          width='200'
                          height='150'
                          controls
                          style={{ borderRadius: '4px' }}
                        >
                          <source
                            src={`http://127.0.0.1:8000/storage/${m}`}
                            type='video/mp4'
                          />
                        </video>
                      ) : (
                        <img
                          key={i}
                          src={`http://127.0.0.1:8000/storage/${m}`}
                          width='200'
                          height='150'
                          alt={course.course_name}
                          style={{ borderRadius: '4px', objectFit: 'cover' }}
                        />
                      )
                    )}
                  </div>
                </>
              ) : (
                <p>
                  <strong>Media:</strong> No media files
                </p>
              )}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => editCourse(course)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteCourse(course.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
