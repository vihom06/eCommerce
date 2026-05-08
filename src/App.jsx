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

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>

  )
}

export default App