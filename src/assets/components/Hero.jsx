import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ReactTyped, Typed} from 'react-typed';

const Hero = ({animReady}) => {

  const { ref: leftRef, inView: leftInView } = useInView({
    threshold: 0.0,
    triggerOnce: true,
    skip: !animReady
  });

   const { ref: rightRef, inView: rightInView } = useInView({
    threshold: 0.0,
    triggerOnce: true,
    skip: !animReady
  });


  return (
    <section id='hero-section'>
      <div className='page-wrapper'>

        <div className='hero-content'>

            <div ref={leftRef} className={`hero-content-left fade-left ${leftInView ? 'is-visible' : ''}`}>
              <div className='hero-content-header'>
                <h1>Hey! <span className='gradient-text hero-h1-span'> 
                  <ReactTyped
                    strings={["I'm Aron Hektor."]}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={2000}
                    showCursor={true}
                    cursorChar="|"
                    loop={true}
                  />
                  </span></h1>
                <h2 className='gradient-text'>Web Developer</h2>
                <span className='hero-under-text'>Aspiring fullstack web developer from Sweden, turning ideas into user-friendly web experiences.</span>
              </div>
              <div className='socials-links'>
                <a target="_blank" href="https://github.com/AAHektor"><img src="/images/hero/github.svg" alt="" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/aron-hektor-b5676327a/"><img src="/images/hero/linkedin.svg" alt="" /></a>
                <a to=""><img src="/images/hero/envelope.svg" alt="" /></a>
              </div>
              {/* <button className='btn btn-contact'> CONTACT 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-6v-6h6z" />
                  <path d="M3 9v6" />
                </svg>
              </button> */}
            </div>

            <div ref={rightRef} className={`hero-content-right fade-right ${rightInView ? 'is-visible' : ''}`}>
              <div className='profile-wrapper'>
                <img className='profile-img' src="/images/hero/profilbild.jpg" alt="" />
              </div>
            </div>

        </div>
      </div>

    </section>
  )
}

export default Hero