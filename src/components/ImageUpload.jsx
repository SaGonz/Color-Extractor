import React from 'react';
import Image from './Image';

function  ImageUpload() {

    const uploadedImage = React.useRef(null)

    const handleImageUpload = e => {
        const [file] = e.target.files
        if (file) {
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
        <div>
            <input type="file" accept="image/*" multiple="false" onChange={handleImageUpload}/>
            <div className="Image-container">
                <img ref={uploadedImage}/>
            </div>
        </div>
    )
}

export default ImageUpload;
