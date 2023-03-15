import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Router>

        <Routes>
          {/* <Route path="/" element={} /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
