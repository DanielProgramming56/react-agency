import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import MiddleMan from 'utils/MiddleMan';
import Aos from 'aos';
import ContactPage from 'Pages/ContactPage';
import HomePage from 'Pages/HomePage';
import WhoWeHelp from 'Pages/WhoWeHelp';
import Content from 'utils/Content';
function App() {


  Aos.init()
  return (
    <div className="App">
      <BrowserRouter>
          <MiddleMan />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/who-we-help' element={<WhoWeHelp/>} />
            <Route path='/about-us' element={<Content/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
