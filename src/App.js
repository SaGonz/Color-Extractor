import React, { useEffect, useState } from "react";
import logo from './color-picker.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImageDetails from './components/ImageDetails';

function App() {

  const [imgProperties, setImgProperties ] = useState(null)

  useEffect(() =>{
    document.title = "Color Extractor"
  })
  //When called, set variable imgProperties
  const callBackImageProperties = (imgProps) => {
    setImgProperties(imgProps)
    console.log(imgProps)
  }
  const callBackSendImageProperties = (imgProps) => {
    return imgProps
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Color Extractor</h1>
      </header>
      <div className="App-body">
        <ImageUpload callBackImageProperties={callBackImageProperties}/>
        <ImageDetails imgProps={imgProperties}/>
      </div>
    </div>
  );
}

export default App;
