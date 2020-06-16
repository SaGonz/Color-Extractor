import React, { useEffect, useState } from "react";
import logo from './color-picker.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImageDetails from './components/ImageDetails';

function App() {

  const [imgProperties, setImgProperties ] = useState(null)
  const [imgPropsPalette, setImgPropsPalette] = useState(null)

  useEffect(() =>{
    document.title = "Color Extractor"
  })

  //This callback function allows the parent component app 
  const callBackImageProperties = (imgProps, imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight) => {
    setImgProperties(imgProps)
    setImgPropsPalette([imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight])
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Color Extractor</h1>
      </header>
      <div className="App-body">
        <ImageUpload callBackImageProperties={callBackImageProperties}/>
        <ImageDetails imgProps={imgProperties} imgPropsPalette={imgPropsPalette}/>
      </div>
    </div>
  );
}

export default App;
