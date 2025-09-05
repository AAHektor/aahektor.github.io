import React from 'react'
import { useInView } from 'react-intersection-observer'

const Experience = ({animReady}) => {

  const {ref, inView} = useInView ({
    threshold: 0.2,
    triggerOnce: true,
    skip: !animReady,
  })

  return (
    <section id='experience-section'>
      <div className='page-wrapper'>

        <div ref={ref} className={`experience-section fade-in ${inView ? 'is-visible' : ''}`}>
          <div className='projects-header-container'>
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
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 12l0 .01" />
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
            <h2>Experience</h2>
          </div>

          <div className='experience-content'>
            <div className='experience-timeline'>
              <div class="experience-timeline-dot dot1"></div>
              <div class="experience-timeline-line"></div>
              <div class="experience-timeline-dot dot2"></div>
            </div>
            <div className='experience-item-container'>
              <div className='experience-item'>
                <h3>EC Utbildning (Higher Vocational Education)</h3>
                <h4>.NET Web Developer Student</h4>
                <span>2024 - 2026</span>
              </div>
              <div className='experience-item'>
                <h3>Teleperformance</h3>
                <h4>Customer Support Agent</h4>
                <span>2021 - 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience