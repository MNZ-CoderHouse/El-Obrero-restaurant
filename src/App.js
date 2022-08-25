import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path='/home' element={ <Home/> } />
        <Route exact path='/about' element={ <About/> } />
        <Route exact path='/contact' element={ <Contact/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;