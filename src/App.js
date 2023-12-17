// import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';
import About from './Components/About';
// import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';






 function App() {
  //all fuction and activies willbe perform here..
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)

  }
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  
  return (
    //online output return karne ka process here...
    <>
    <Navbar Title='Textutils' About='aboutUs' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert}  heading="Enter the text to analyse" mode={mode}/>
    
    <About/>
  </div>
  </>
  
  );
}

export default App;
