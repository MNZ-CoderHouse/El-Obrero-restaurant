import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Letter from './components/Letter';
import  Blog  from './components/Blog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path='/home' element={ <Home/> } />
        <Route exact path='/about' element={ <About/> } />
        <Route exact path='/contact' element={ <Contact/> } />
        <Route exact path='/letter' element={ <Letter/> } />
        <Route exact path="product/:id" element={ <ProductDetail/> } />
        <Route exact path='/checkout' element={ <Checkout/> } />
        <Route exact path='/blog' element={ <Blog/> } />
        <Route exact path='/cart' element={ <Cart/> } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;