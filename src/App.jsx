import './App.css';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Team from './components/Team';
import Join from './components/Join';
import Feedbacks from './components/Feedbacks';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);

  const sideFunc = () => setSidebar(!sidebar);

  return (
    <div className="App">
      <Sidebar click={sideFunc} effect={sidebar} />
      <Navbar click={sideFunc} effect={sidebar} />
      <Hero />
      <About />
      <Services />
      <Why />
      <Team />
      <Join />
      <Feedbacks />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
