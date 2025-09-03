import React from 'react'

const Footer = () => {
  return (
    <section id='footer-section'>
      <div className='page-wrapper'>

        <div className='footer-section'>
          <div className='footer-information'>
            <div className='footer-information-item'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>

              <span>Aronhektor7@gmail.com</span>
            </div>
            <div className='footer-information-item'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>

              <span>Helsingborg, Sweden</span>
            </div>
          </div>
          <span className='copyright-tag'>© 2025 Aron Hektor. All rights reserved.</span>
        </div>
      </div>
    </section>
  )
}

export default Footer