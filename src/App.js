import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Opportunity from './Components/Pages/Opportunity';
import Store from './Components/Pages/Store';
import Contact from './Components/Pages/Contact';



function App() {
  return (
    <div className="App h-[100vh]">

      <Router>

        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/opportunity' element={<Opportunity/>} />
          <Route path='/service' element={<Service/>} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
