import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign_in' element={<SignIn />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer theme='light' />
    </>
  );
}

export default App;
