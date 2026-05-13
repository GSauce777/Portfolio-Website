import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    image: '/Pictures/work-1.png',
    title: 'Motion of the Day',
    description:
      'This is an iOS app that I solo developed using Swift that gives the user exercise and stretch motions to stay active during the day. Check it out on GitHub!',
    link: 'https://github.com/GSauce777/MotionOfTheDayApp',
    icon: 'fa-brands fa-square-github',
  },
  {
    image: '/Pictures/work-2.png',
    title: 'DNA Sequence Classifier',
    description: 'In this university project, I created, trained, and tuned a Logistic Regression model to classify DNA sequences into gene-type categories based solely on their nucleotide composition.',
    link: 'https://github.com/GSauce777/DNAPredictionUsingLogisticRegression',
    icon: 'fa-brands fa-square-github',
  },
  {
    image: '/Pictures/work-3.png',
    title: 'PinFit',
    description: 'Lead a team of fellow students in creating a web application that allows the user to search, create, and save fashion outfits all in one place.',
    link: 'https://github.com/GSauce777/PinFit',
    icon: 'fa-brands fa-square-github',
  },
];

function ProjectCard({ image, title, description, link, icon }) {
  return (
    <div className="work">
      <img src={image} alt={title} />
      <div className="layer">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className={icon}></i>
        </a>
      </div>
    </div>
  );
}

function Portfolio() {
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
    <div id="portfolio">
      <div className={`container ${visible ? 'show' : ''}`} ref={ref}>
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <a
          href="https://github.com/GSauce777"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          See More <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
