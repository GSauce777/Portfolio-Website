import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav>
      <img src="/Pictures/logo.png" className="logo" alt="Logo" />
      <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
        {isHome ? (
          <>
            <li><a href="#header" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About Me</a></li>
            <li><a href="#education-experience" onClick={handleNavClick}>Education & Experience</a></li>
            <li><a href="#portfolio" onClick={handleNavClick}>Portfolio</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </>
        ) : (
          <>
            <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
            <li><Link to="/#about" onClick={handleNavClick}>About Me</Link></li>
            <li><Link to="/#portfolio" onClick={handleNavClick}>Portfolio</Link></li>
            <li><Link to="/#contact" onClick={handleNavClick}>Contact</Link></li>
          </>
        )}
        <i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
      </ul>
      <i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  );
}

export default Navbar;
