import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import ImageUpload from './components/ImageUpload';

function App() {

  useEffect(() =>{
    document.title = "Color Extractor"
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Color Extractor</h1>
      </header>
      <div className="App-body">
        <div className="image-field">Upload image <ImageUpload/></div>
        <div className="color-info">Fancy dandy image details</div>
      </div>
    </div>
  );
}

export default App;
