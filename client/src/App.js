import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route to='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
