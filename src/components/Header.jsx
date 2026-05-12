import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../assets/header.css'

function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 788)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    if (!isDesktop) {
      setMenuOpen(false)
    }
  }

  const checkScreen = () => {
    const desktop = window.innerWidth >= 788
    setIsDesktop(desktop)

    if (desktop) {
      setMenuOpen(false)
    }
  }

  const [serviceOpen, setServiceOpen] = useState(false)
  const toggleService = () => {
    setServiceOpen(!serviceOpen)
  }

  useEffect(() => {
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  //Google Translator code
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,bn,ko,ur',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        )
      }

      const script = document.createElement('script')
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'

      document.body.appendChild(script)
    }
  }, [])

  return (
    <>
      <header className='navbar'>
        <div className='navbar__container'>
          <div className='navbar__brand'>
            <Link to='/' className='brand-logo'>
              <img src={logo} alt='Mina Consol Logo' />
            </Link>
            <span className='brand-text'>Mina Consol Ltd</span>
            <div className='translate'>
              <div id='google_translate_element'></div>
            </div>
          </div>

          <button className='dots-btn' onClick={toggleMenu}>
            <div
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'black',
                margin: '4px 0'
              }}
            ></div>
            <div
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'black',
                margin: '4px 0'
              }}
            ></div>
            <div
              style={{
                width: '25px',
                height: '3px',
                backgroundColor: 'black',
                margin: '4px 0'
              }}
            ></div>
          </button>

          {(menuOpen || isDesktop) && (
            <nav
              className={`navbar__menu ${
                menuOpen || isDesktop ? '' : 'hidden'
              }`}
            >
              <br />
              <Link onClick={closeMenu} to='/' className='nav-btn'>
                Home
              </Link>

              <div className='dropdown'>
                <div
                  className='nav-btn'
                  onClick={e => {
                    e.stopPropagation()
                    toggleService()
                  }}
                >
                  Services ▾
                </div>

                {serviceOpen && (
                  <div className='dropdown-box'>
                    <Link onClick={closeMenu} to='/student-consultancy'>
                      Student Consultancy
                    </Link>
                    <Link onClick={closeMenu} to='/courses'>
                      Courses
                    </Link>
                    <Link onClick={closeMenu} to='/export-import'>
                      Export Import
                    </Link>
                    <Link onClick={closeMenu} to='/ITFarm'>
                      IT & Software
                    </Link>
                  </div>
                )}
              </div>

              <Link
                onClick={closeMenu}
                to='/group-of-companies'
                className='nav-btn'
              >
                Group Of Companies
              </Link>

              <Link onClick={closeMenu} to='/about' className='nav-btn'>
                About Us
              </Link>

              <Link onClick={closeMenu} to='/why-choose-us' className='nav-btn'>
                Why Choose Us
              </Link>

              <Link onClick={closeMenu} to='/Contact' className='nav-btn'>
                Contact Us
              </Link>

              <Link onClick={closeMenu} to='/login' className='nav-btn'>
                Admin
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
