import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Headter';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Veg from './pages/Veg';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/orders' element={<Orders />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/veg' element={<Veg />}></Route>
            
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
