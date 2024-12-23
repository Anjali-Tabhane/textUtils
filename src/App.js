import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import { useState } from 'react';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const lightModestyle = {
    backgroundColor:"black",
    color:"white",
  }
  const darkModestyle = {
    backgroundColor:"black",
    color:"white",
  }
  const [mode,setMode] = useState('light');
  const [styleMode,setStyleMode] = useState(lightModestyle);
  const toggleMode = () => {
    //console.log('modde',mode);
    if(mode === 'light'){
      setMode('dark')
      setStyleMode(lightModestyle)
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }else{
      setMode('light')
      setStyleMode(darkModestyle)
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  
  //const [alertMessage,setAlertMessage] = useState(false)
  
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />
        
        {/* <Alert alertMessage={alertMessage}/> */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} /> {/* element prop used in v6 */}
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" styleMode={styleMode} />} />
        </Routes>
      </Router>
      
    </>
    
  );
}

export default App;
