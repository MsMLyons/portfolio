import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import PythonProjects from './components/PythonProjects';
import FrontEnd from './components/Work';


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
