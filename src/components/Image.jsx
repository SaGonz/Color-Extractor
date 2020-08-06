import React from 'react'
import ImageDetails from './ImageDetails'

class Image extends React.Component {

    constructor(props) {
        super(props)

        this.handleImageUpload = this.handleImageUpload.bind();
        this.uploadImage = this.uploadImage.bind();
        this.imgRef = React.createRef()
        this.canvasRef = React.createRef()
    }
    
    //Image upload mock-up to test functionality, will remove in the future to ImageUpload only.
    //Uploads image to Image element into its' <canvas> for the moment. 
    handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    handleDrop = (e)  => {
        e.preventDefault()
        e.stopPropagation()
    } 

    uploadImage = (file) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const {current} = this.imgRef
            current.src = fileReader.result
        }
        fileReader.readAsDataURL(file)
    }

    onImageLoad = () => {
        console.log('baseImg element has loaded')
        let c = this.canvasRef.current
        c.width = this.imgRef.current.width
        c.height = this.imgRef.current.height
        let canvasCtx = c.getContext("2d");
        canvasCtx.drawImage(this.imgRef.current,0,0);
        this.getPixel(canvasCtx)
    }
    drawImage = (imgSrc) => {
        //draw
         imgSrc = this.props.imgSrc
    }

    getDominantColor = () => {

    }

    getPixel = (context) => {
        var pixel1 = context.getImageData(1, 1, 1, 1).data;
        console.log('pixel1',pixel1)
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    <input type="file" onChange={this.handleImageUpload}></input>
                    <img onLoad={this.onImageLoad}ref={this.imgRef}></img>
                    <canvas onLoad={this.getPixel} ref={this.canvasRef}></canvas>
                </div>
                
                {/* <ImageDetails dominantColor={''} colorPalette={''} /> */}
            </React.Fragment>
        )
    }
}

export default Image