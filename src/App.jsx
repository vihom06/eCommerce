import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Products from './Pages/Products'
import Partners from './Pages/Partners'
import ProductDetails from './Pages/ProductDetails'
import VendorProfile from './Pages/VendorProfile'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'

const App = () => {
  return (

    <BrowserRouter>

      <Navbar />

      <main className='pt-14'>

        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Products Page */}
          <Route
            path="/products"
            element={<Products />}
          />

          {/* Product Details */}
          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          {/* Partners */}
          <Route
            path="/partners"
            element={<Partners />}
          />

          {/* Vendor Profile */}
          <Route
            path="/vendors/:id"
            element={<VendorProfile />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Signup */}
          <Route
            path="/signup"
            element={<Signup />}
          />
          
          <Route
            path="/about"
            element={<About />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>

  )
}

export default App