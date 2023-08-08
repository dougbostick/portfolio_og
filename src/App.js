import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
