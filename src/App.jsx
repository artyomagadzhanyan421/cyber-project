import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Team from './components/Team';
import Join from './components/Join';
import Feedbacks from './components/Feedbacks';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Why />
      <Team />
      <Join />
      <Feedbacks />
      <Faq />
    </div>
  )
}

export default App
