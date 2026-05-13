import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </main>
  );
}

export default Home;
