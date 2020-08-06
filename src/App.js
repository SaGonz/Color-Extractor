import React, { useEffect, useState } from "react";
import logo from './color-picker.svg';
import './App.css';
import './components/css/animations.scss'
import ImageUpload from './components/ImageUpload';
import ImageDetails from './components/ImageDetails';
import Image from './components/Image'

class App extends React.Component {

  // const [imgProperties, setImgProperties ] = useState(null)
  // const [imgPropsPalette, setImgPropsPalette] = useState(null)

  constructor(props) {
    super(props)

    document.title = "Color Extractor"

    this.state = {
      imgProperties: null,
      imgPropsPalette: []
    }

    this.callBackImageProperties = this.callBackImageProperties.bind(this)
  }

  //This callback function allows the parent component app to get the image props: the colors so it can 
  //send it back to it's children
  // const callBackImageProperties = (imgProps, imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight) => {
  //   console.log('imgprops on app',imgProps)
  
  //   setImgProperties({imgProps}, () => {console.log("imgproperties as a callback inside the fn",imgProperties)})
  //   setImgPropsPalette([imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight])
  // }

  callBackImageProperties (imgProps, imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight) {
    console.log('imgprops on app on callback fn()',imgProps)
    
    this.setState({imgProperties: imgProps})
    this.setState({imgPropsPalette: [imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight]})
  //   setImgProperties({imgProps}, () => {console.log("imgproperties as a callback inside the fn",imgProperties)})
  //   setImgPropsPalette([imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight])
    console.log('imgprops on app\'s state:',this.state.imgProperties)
    console.log('imgpropspalette on app\'s state:',this.state.imgPropsPalette)
  }
  
  render(){ return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> 
          <span className="red-to-black-fade-in">C</span>
          <span className="red2-to-black-fade-in">o</span>
          <span className="orange-to-black-fade-in">l</span>
          <span className="orange2-to-black-fade-in">o</span>
          <span className="yellow-to-black-fade-in">r</span>
          <span className="yellow2-to-black-fade-in"> </span>
          <span className="green-to-black-fade-in">E</span>
          <span className="green2-to-black-fade-in">x</span>
          <span className="blue-to-black-fade-in">t</span>
          <span className="blue2-to-black-fade-in">r</span>
          <span className="indigo-to-black-fade-in">a</span>
          <span className="indigo2-to-black-fade-in">c</span>
          <span className="purple-to-black-fade-in">t</span>
          <span className="purple2-to-black-fade-in">o</span>
          <span className="pink-to-black-fade-in">r</span>
        </h1>
      </header>
      <div className="App-body">
        <ImageUpload callBackImageProperties={this.callBackImageProperties}/>
        <ImageDetails imageProps={this.state.imgProperties} imagePropsPalette={this.state.imgPropsPalette}/>
      </div>
    </div>
  );
  }
}

export default App;
