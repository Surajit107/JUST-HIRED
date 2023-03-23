import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/common/footer/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Jobs from './pages/Jobs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
