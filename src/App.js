import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import FrontEnd from './components/FrontEnd';
import Contact from './components/Contact';
import PythonProjects from './components/PythonProjects';


function App() {
  return (
    <div className='text-2xl font-bold'>
      <Navbar />
      <Home />
      <About />
      <PythonProjects />
      <FrontEnd />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
