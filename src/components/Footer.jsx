import { useEffect } from 'react'
import '../assets/footer.css'

function Footer () {
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
    <footer className='footer'>
      <div className='container footer-grid'>
        <div>
          <h3>Mina Consol Limited</h3>
          <p>Trusted overseas recruitment & training partner.</p>
        </div>

        <div>
          <h4>Office</h4>
          <p>Dhaka, Bangladesh</p>
          <p>Email: info@minaconsol.com</p>
          <p>Phone: +880XXXXXXXXX</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href='#' target='_blank'>
            Facebook
          </a>
        </div>
      </div>

      <div className='translate'>
        <div id='google_translate_element'></div>
      </div>

      <div className='copyright'>
        © {new Date().getFullYear()} FAYMINA GROUP. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
