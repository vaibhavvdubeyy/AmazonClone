import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Deals from './components/Deals';
import Home from './components/Home';
import Signin from './components/Signin';


function App() {
  return (
    <>
   
      <Router>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Deals" element={<Deals />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
