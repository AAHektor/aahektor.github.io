import React from 'react'
import { useInView } from 'react-intersection-observer'

const Skills = () => {

  const {ref, inView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`skills-section fade-left ${inView ? 'is-visible' : ''}`}>
      <div className='skills-header-container'>
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
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
        <h2>Skills</h2>
      </div>

      <div className='skills-container'>
        <div className='skill-category'>
          <h4>Frontend</h4>
          <div className='skill-items'>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
          </div>
        </div>
        <div className='skill-category'>
          <h4>Backend</h4>
          <div className='skill-items'>
            <span>C#</span>
            <span>ASP.NET Core</span>
            <span>SQL Server</span>
            <span>Azure</span>
          </div>
        </div>
        <div className='skill-category'>
          <h4>Others</h4>
          <div className='skill-items'>
            <span>Git</span>
            <span>Figma</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Lightroom</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills