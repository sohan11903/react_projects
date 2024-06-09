import './App.css';
import Header from './components/Header/header';
import Companies from './components/companies/Companies';
import Hero from './components/hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/value/value';
import Contact from './components/contact/contact';
import Getstarted from './components/Getstarted/Getstarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  );
}

export default App;
