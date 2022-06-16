import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign_in' element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
