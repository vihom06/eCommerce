import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-30'>
      <div className='bg-gray-900 text-white pt-10 flex flex-col items-center border-t border-gray-700 w-full'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-8 pb-8'>
          {/* Company Info */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-4 mb-4'>
              <img className='max-w-10' src="/eCommerceLogo.svg" alt="Logo" />
              <p className='text-2xl font-semibold font-serif'>Vendora</p>
            </div>
            <p className='text-gray-300 text-sm'>
              Your trusted partner for finding the perfect products and partners in the eCommerce world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 font-serif'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Products</a></li>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Partners</a></li>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Factories</a></li>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>About</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className='text-lg font-semibold mb-4 font-serif'>Support</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Help Center</a></li>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Contact Us</a></li>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Privacy Policy</a></li>
              <li><a href="#" className='inline-block text-gray-300 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold mb-4 font-serif'>Contact</h3>
            <div className='space-y-2 text-sm text-gray-300'>
              <p>Email: support@vendora.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Commerce St, Business City</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 w-full max-w-6xl px-8 py-4'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
            <p>&copy; 2026 Vendora. All rights reserved.</p>
            <div className='flex space-x-4 mt-2 md:mt-0'>
              <a href="#" className='inline-block text-gray-400 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Facebook</a>
              <a href="#" className='inline-block text-gray-400 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>Twitter</a>
              <a href="#" className='inline-block text-gray-400 hover:text-cyan-300 transition-all duration-300 ease-out transform hover:-translate-y-1'>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
