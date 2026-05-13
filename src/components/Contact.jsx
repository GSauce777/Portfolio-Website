import { useState, useEffect, useRef } from 'react';

function Contact() {
  const [msg, setMsg] = useState('');
  const [videoVisible, setVideoVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
      else setVisible(false);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbyWvcpq_ijwDCF_E73SneflZG1WIFzJwjHaEcsE6O_3qwsLY7Xma0R-0G2oiiDcVtzUOg/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        setMsg('Message sent successfully!');
        setTimeout(() => setMsg(''), 5000);
        form.reset();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  const toggleVideo = () => {
    if (!videoVisible) {
      setVideoVisible(true);
      setTimeout(() => {
        if (videoRef.current) videoRef.current.play();
      }, 0);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setVideoVisible(false);
    }
  };

  return (
    <div id="contact">
      <div className={`container ${visible ? 'show' : ''}`} ref={ref}>
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-envelope"></i> gabrielcsaucedo777@gmail.com
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/gabriel-saucedo-6b6086235/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/GSauce777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-github"></i>
              </a>
            </div>
            <a
              href="/Pictures/GabrielSaucedoResume2025UPDATE-1.pdf"
              download
              className="btn btn2"
            >
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">
                Submit <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Website Coded and Copyright &copy; Gabriel Saucedo 2026.</p>
      </div>

      <button id="landscapeButton" onClick={toggleVideo}>
        {videoVisible ? 'Finished Relaxing' : 'Press to Relax'}
      </button>
      <div id="landscapeContainer">
        {videoVisible && (
          <video
            ref={videoRef}
            id="landscapeVideo"
            src="/Pictures/relaxvid.mp4"
            controls
          />
        )}
      </div>
    </div>
  );
}

export default Contact;
