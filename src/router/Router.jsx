import { Routes, Route } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AdminLayout from '../layouts/AdminLayout'

// PUBLIC PAGES
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Contact from '../pages/Contact'
import ITFarm from '../pages/ItFarm'
import GroupOfCompanies from '../pages/GroupOfCompanies'
import StudentConsultancy from '../pages/StudentConsultancy'
import WhyChooseUs from '../pages/WhyChooseUs'
import ExportImport from '../pages/ExportImport'
import Login from '../pages/Login'

// ADMIN PAGES
import Admin from '../pages/Admin'
import AdminCourse from '../pages/AdminCourse'
import AdminProduct from '../pages/AdminProduct'

export default function Router () {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route
        path='/'
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route
        path='/about'
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />
      <Route
        path='/courses'
        element={
          <PublicLayout>
            <Courses />
          </PublicLayout>
        }
      />
      <Route
        path='/ITFarm'
        element={
          <PublicLayout>
            <ITFarm />
          </PublicLayout>
        }
      />
      <Route
        path='/group-of-companies'
        element={
          <PublicLayout>
            <GroupOfCompanies />
          </PublicLayout>
        }
      />
      <Route
        path='/student-consultancy'
        element={
          <PublicLayout>
            <StudentConsultancy />
          </PublicLayout>
        }
      />
      <Route
        path='/why-choose-us'
        element={
          <PublicLayout>
            <WhyChooseUs />
          </PublicLayout>
        }
      />
      <Route
        path='/export-import'
        element={
          <PublicLayout>
            <ExportImport />
          </PublicLayout>
        }
      />
      <Route
        path='/contact'
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />
      <Route
        path='/login'
        element={
          <PublicLayout>
            <Login />
          </PublicLayout>
        }
      />

      {/* ADMIN ROUTES */}
      <Route
        path='/admin'
        element={
          <AdminLayout>
            <Admin />
          </AdminLayout>
        }
      />
      <Route
        path='/admin/course'
        element={
          <AdminLayout>
            <AdminCourse />
          </AdminLayout>
        }
      />
      <Route
        path='/admin/product'
        element={
          <AdminLayout>
            <AdminProduct />
          </AdminLayout>
        }
      />
    </Routes>
  )
}
