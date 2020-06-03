import React, {useState} from 'react';
import './css/ImageUpload.css'


function  ImageUpload() {

    const uploadedImage = React.useRef(null)
    const ImageUploader = React.useRef(null)
    const [isUploaded, setIsUploaded ] = useState(false)

    const handleImageUpload = e => {
        const [file] = e.target.files
        if (file) {
            setIsUploaded(true)
            const reader = new FileReader()
            const {current} = uploadedImage
            current.file = file
            reader.onload = (e) => {
                current.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
      
    return(
        <div className="Image-field">
            <input 
            type="file" accept="image/*" multiple="false" 
            onChange={handleImageUpload} className="Image-file-input" ref={ImageUploader}
            />
            <div className="Image-container" onClick={() => ImageUploader.current.click()}>
                {isUploaded ?  '' : <p>Click here to upload an image</p>}
                <img ref={uploadedImage}/>
            </div>
        </div>
    )
}

export default ImageUpload;
