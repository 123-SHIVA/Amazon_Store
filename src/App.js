import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Service from './Components/Pages/Service';
import Opportunity from './Components/Pages/Opportunity';
import Store from './Components/Pages/Store';
import Contact from './Components/Pages/Contact';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Submission from './Components/Pages/Submission';




function App() {
  return (
    <div className="App  ">

      <Router>

        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/opportunity' element={<Opportunity/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register-successfully' element={<Submission/>}/>
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
