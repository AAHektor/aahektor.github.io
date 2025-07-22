import React from 'react'

const Projects = () => {
  return (
    <div className='projects-section'>
      <div className='projects-header-container'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="#ffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
          <path d="M20 21l2 -2l-2 -2" />
          <path d="M17 17l-2 2l2 2" />
        </svg>
        <h2>Projects</h2>
      </div>
      <div className='card-container-projects'>
        <div className='card card-project'>
          <div className='project-img-container'>
            <img src="/mywebsite/images/projects/img-placeholder.png" alt="" />
          </div>
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio nostrum consequatur delectus illum et unde, voluptates modi dignissimos dolores.</p>
        </div>
        
        <div className='card card-project'>
          <div className='project-img-container'>
            <img src="/mywebsite/images/projects/img-placeholder.png" alt="" />
          </div>
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio nostrum consequatur delectus illum et unde, voluptates modi dignissimos dolores.</p>
        </div>

        <div className='card card-project'>
          <div className='project-img-container'>
            <img src="/mywebsite/images/projects/img-placeholder.png" alt="" />
          </div>
          <h4>Lorem ipsum</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio nostrum consequatur delectus illum et unde, voluptates modi dignissimos dolores.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects