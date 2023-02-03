// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Footer from './components/Footer/Footer';
import Experience from './components/experience/Experience';
import Services from './components/servicess/Services';
import Portfolio from './components/portfolio/Portfolio';
import Reviews from './components/reviews/Reviews';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
