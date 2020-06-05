import React, {useState} from 'react';
import './css/ImageUpload.css'
import FastAverageColor from 'fast-average-color';

function  ImageUpload(props) {

    const uploadedImage = React.useRef(null)
    const ImageUploader = React.useRef(null)
    const [isUploaded, setIsUploaded ] = useState(false)
    const dominantColor = new FastAverageColor()

    const handleImageUpload = e => {
        const [file] = e.target.files
        if (file) {
            setIsUploaded(true)
            const reader = new FileReader()
            const {current} = uploadedImage
            current.file = file
            reader.onload = (e) => {
                current.src = e.target.result
                console.log('dominant color:',dominantColor.getColor(current))
                sendImagePropertiesToRoot(dominantColor.getColor(current, {mode: "precision"}))
            }
            reader.readAsDataURL(file)
        }
    }
    //When image is loaded into the Client, send the image object definition 
    //to parent component. 
    const sendImagePropertiesToRoot = (imgProps) => {
        props.callBackImageProperties(imgProps)
    }

    return(
        <div className="Image-field">
            <input 
            type="file" accept="image/*" multiple={false}
            onChange={handleImageUpload} className="Image-file-input" ref={ImageUploader}
            />
            <div className="Image-container" onClick={() => ImageUploader.current.click()}>
                {isUploaded ?  '' : <p>Click here to upload an image</p>}
                <img ref={uploadedImage} alt=''/>
            </div>
        </div>
    )
}

export default ImageUpload;
