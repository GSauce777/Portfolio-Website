import { useState, useEffect, useRef } from 'react';

function About() {
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
    <div id="about">
      <div className={`container ${visible ? 'show' : ''}`} ref={ref}>
        <div className="row">
          <div className="about-col-1">
            <img src="/Pictures/aboutme.jpg" alt="Gabriel Saucedo" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              I'm currently a student at California State University, San Marcos, where I am pursuing my Bachelor's of Science in Computer Science.
              Throughout my academic journey, I've gained a strong foundation in computer science principles, complemented by hands-on experience through various projects and coursework.
              In addition to my formal education, I've been exploring the field through personal projects, which have fueled my passion for technology and problem-solving. As I continue to
              develop my skills, I am excited about the prospect of building a career as a software or app developer, where I can apply my knowledge to create innovative solutions and
              user-friendly applications.
            </p>

            <div className="tab-titles">
              <p className="tab-links active-link">Current Skill Set</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>Proficient in C/C++</span></li>
                <li><span>Proficient in Python</span></li>
                <li><span>Proficient in Java</span></li>
                <li><span>Skilled in HTML/CSS</span></li>
                <li><span>Skilled in JavaScript</span></li>
                <li><span>Novice in Swift</span></li>
                <li><span>Proficient in Debugging</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
