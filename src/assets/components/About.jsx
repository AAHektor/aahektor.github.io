import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {

  const {ref, inView} = useInView ({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`about-section fade-right ${inView ? 'is-visible' : ''}`}>
      <div className='about-header-container'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>

        <h2>About me</h2>
      </div>

      <div className='about-me-content'>
        <p>I'm a web developer student specializing in .NET, with a strong foundation in HTML, CSS, JavaScript, and C#. I love solving problems with clean, user-friendly code and I’m always eager to learn more.</p>
      </div>
    </div>
  )
}

export default About