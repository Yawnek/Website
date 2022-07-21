import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Confirmation from './Confirmation';
import About from './About';
import Aboutfrench from './Aboutfrench';
import Confirmationfrench from './Confirmationfrench';
import ScrollToTop from "./ScrollToTop";






function App() {
   return (
        <Router>
            <Routes>
                <Route path = "/" element = { <About/>} />
                <Route path = "/confirmation" element = { <Confirmation/>} />
                <Route path = "/aboutfrench" element = { <Aboutfrench/>} />
                <Route path = "/confirmationfrench" element = { <Confirmationfrench/>} />


            </Routes>
        </Router>
  );
}

export default App;
