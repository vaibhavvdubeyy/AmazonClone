import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
   
      <Router>

        <Routes>
          
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
