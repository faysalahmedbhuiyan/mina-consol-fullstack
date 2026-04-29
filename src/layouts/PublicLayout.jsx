import Header from '../components/Header'
import Footer from '../components/Footer'

function PublicLayout ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default PublicLayout
