import React from 'react'
import Home from './pages/Home'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import ScrollToTop from './componants/ScrollToTop'
import AddBlog from './componants/AddBlog'
import BlogDital from './pages/BlogDital'

const App = () => {
  return (
    <div>


      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={< Register />} />
        <Route path='/addblog' element={<AddBlog />} />
        <Route path='/blog/:id' element={<BlogDital />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App