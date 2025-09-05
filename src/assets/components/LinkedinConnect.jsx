import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const LinkedinConnect = ({animReady}) => {
  const { ref: appearRef, inView: inViewAppear } = useInView({
     threshold: 0.2, 
     triggerOnce: true,
      skip: !animReady, 
    });
    
  const [show, setShow] = useState(false);
  useEffect(() => { if (inViewAppear) setShow(true); }, [inViewAppear]);

  const { ref, inView } = useInView({ threshold: 0.5 });
  const iconRef = useRef(null);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 1200); 
      }, 3000); 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id='linkedin-section'>
      <div className='page-wrapper'>

        <div ref={appearRef} className={`linkedin-section fade-in ${show ? 'is-visible' : ''}`}>
          <h4>Connect with me on linkedin</h4>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/aron-hektor-b5676327a/"
          >
            <div
              ref={(node) => {
                ref(node);
                iconRef.current = node;
              }}
              className={`linkedin-icon ${isJumping ? 'jump' : ''}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#03C9E4"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkedinConnect;
