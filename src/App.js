import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
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
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
