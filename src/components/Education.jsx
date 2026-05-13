import { useState, useEffect, useRef } from 'react';

function Education() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
      else setVisible(false);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="education-experience">
      <div className={`container ${visible ? 'show' : ''}`} ref={ref}>
        <h1 className="sub-title">My Education and Experience</h1>
        <div className="timeline-wrapper">
          <div className="timeline-row">
            <div className="timeline-col">
              <h2 className="heading">
                <i className="fa-solid fa-user-graduate"></i>
                Education
              </h2>
              <div className="timeline-box">
                <div className="content-box">
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i> 2022
                  </div>
                  <h3>Palomar College</h3>
                  <h4>Associate's Degree - Math & Science</h4>
                  <p>
                    Out of high school, I explored my career options, and ending up making the decision of pursuing a degree in Computer Science.
                    From there, I started on the path to transferring to a university by taking General Education and Preparation for the Major courses.
                    In doing so, I achieved an Associate's Degree in Math and Science from Palomar College.
                  </p>
                </div>
                <div className="content-box">
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i> 2026
                  </div>
                  <h3>California State University, San Marcos</h3>
                  <h4>Bachelor's Degree - Computer Science</h4>
                  <p>
                    In Fall of 2024, I transferred to CSUSM, and am currently completing my remaining courses to earn my Bachelor's Degree of Science in Computer Science.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-col">
              <h2 className="heading">
                <i className="fa-solid fa-briefcase"></i>
                Experience
              </h2>
              <div className="timeline-box">
                <div className="content-box">
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <h3>Pending...</h3>
                  <p>Currently no professional experience as of the current date.</p>
                </div>
                <div className="content-box">
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <h3>Coming Soon!</h3>
                </div>
                <div className="content-box">
                  <div className="date">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                  <h3>More to Come!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
