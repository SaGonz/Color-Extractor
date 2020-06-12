import React, {useState} from 'react';
import './css/ImageUpload.css'
import FastAverageColor from 'fast-average-color';

function  ImageUpload(props) {

    const uploadedImage = React.useRef(null)
    const ImageUploader = React.useRef(null)
    const [isUploaded, setIsUploaded ] = useState(false)
    const dominantColor = new FastAverageColor()

    //Reads upload as a file, waits for it to load and once it's done calls actions on file and returns it on page.
    //As it's called from <input> element, it browses the device.
    const handleImageUpload = e => {

        const [file] = e.target.files
        if (file) {
            const reader = new FileReader()
            const {current} = uploadedImage
            current.file = file
            reader.onload = (e) => {
                current.src = e.target.result
                console.log('current src upload',current.src)
                getFilesColors(current)
                setIsUploaded(true)
            }
            reader.readAsDataURL(file)   
        }
    }

    //"Drag image to upload" functionality 
    //handleDragOver prevents the default behavior (loading image in a different page)
    //handleDrop contains the logic to upload by dragging
    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDrop = (e)  => {
        e.preventDefault()
        e.stopPropagation()
        const fileList = e.dataTransfer.files
       
        if(fileList.length > 0) {
            const file = fileList[0]
            const dragReader = new FileReader()
            const {current} = uploadedImage
            current.file = file
            console.log('current file ',current.file)
            dragReader.onload = (e) => {
                current.src = e.target.result
                getFilesColors(current)
                setIsUploaded(true)
            }
            dragReader.readAsDataURL(file)
        }  
    } 

    //There's a double call because otherwise the data is not sent:
    const getFilesColors = (file) => {
            sendImagePropertiesToRoot(dominantColor.getColorAsync(file, {mode: "precision"})
            .then(() => {
                sendImagePropertiesToRoot(dominantColor.getColor(file, {mode: "precision"}))
            })
            )
    }
    //When image is loaded into the Client, send the image object definition 
    //to parent component. There it will be sent as a prop to ImageUpload's siblings.
    const sendImagePropertiesToRoot = (imgProps) => {
        props.callBackImageProperties(imgProps)
    }

    return(
        <div className="Image-field" 
        onDrop={ event => {handleDrop(event)}}
        onDragOver={ event=> {handleDragOver(event)}}
        >
            <input 
            type="file" accept="image/*" multiple={false}
            onChange={handleImageUpload} className="Image-file-input" ref={ImageUploader}
            />
            <div className="Image-container" onClick={() => ImageUploader.current.click()}>
                {isUploaded ?  '' : <p>Click or drag here to upload an image</p>}
                <img ref={uploadedImage} alt=''/>
            </div>
        </div>
    )
}

export default ImageUpload;
