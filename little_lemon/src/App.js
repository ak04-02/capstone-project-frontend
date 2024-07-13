import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Booking from './components/BookingForm.js';
import Header from './components/Header.js';
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Result from "./components/Resulting.js";
function App() {
  return(
    <BrowserRouter>
    <Routes>
        <Route path="*" element={<Header/>}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="menu" element={<Menu/>} />
        <Route path="about" element={<About/>} />
        <Route path="Resulting" element={<Result/>} />
        <Route path="*" element={<Footer />} />
      </Route>
    </Routes>
  </BrowserRouter>)
  
}
export default App;