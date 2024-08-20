import './App.css';
import { FaReact } from "react-icons/fa";
import Header from './Components/Header/Header';
import Header2 from './Components/Header/Header2';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App h-[100vh]">
      <Header/>
      <Header2/>
      <Footer/>
    </div>
  );
}

export default App;
