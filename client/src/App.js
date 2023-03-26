import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/common/footer/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobdetails' element={<JobDetails />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
