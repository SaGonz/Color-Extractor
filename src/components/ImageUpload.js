import React, {useState, useEffect} from 'react';
import './css/ImageUpload.css'
import FastAverageColor from 'fast-average-color';
import SavePalette from './SavePalette';
import Image from './Image'

function ImageUpload(props) {

    const [imgRef, setImgRef] = React.useState(React.createRef())
    const ImageUploader = React.useRef(null)
    const canvasRef = React.useRef(null)
    const [canvasCtx, setCanvasCtx] = React.useState(null)
    const [isUploaded, setIsUploaded ] = useState(false)
    const dominantColor = new FastAverageColor()
    var Color = new FastAverageColor()

    //This hook is used to manipulate the DOM and fetch data manually.
    //I want to access the imgRef's pixels (the uploaded image) to extract color from them,
    //so my purpose is to draw the imgRef into the canvas element to get it's context and extract it's pixels.
    //Once it's drawn, i change <img>'s ref to point to the <canvas> ref, thus moving the canvas inside <img>.
    //We do this through the ref and effect hooks.
    useEffect(
        (canvasCtx)=> {
        let c = canvasRef.current
        setCanvasCtx(c.getContext('2d'))
        // console.log('canvas ctx',canvasCtx)
        //canvasCtx is now a CanvasRenderingContext2D object
        }
    )

    //Reads upload as a file, waits for it to load and onceset it's done calls actions on file and returns it on page.
    //As it's called from <input> element, it browses the device.
    const handleImageUpload = e => {

        const [file] = e.target.files
        if (file) {
            uploadImage(file)
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
            uploadImage(file)
        }  
    } 
    //Reads file's content, saves it on <img> element, and calls getFilesColors on img element's content
    const uploadImage = (file) => {
        setIsUploaded(false)
        const reader = new FileReader()
        const {current} = imgRef
        //- Trying to dinamically create image on JS:
        // const newImg = React.createElement('img')
        //-
        console.log('the img element as of current',imgRef)
        // console.log('the img element\'s height as of current',imgRef.current.naturalHeight)
        // console.log('the current image',file)
        current.file = file

        const imgWidth = current.naturalWidth
        const imgHeight = current.naturalHeight
        //-
        // newImg.file = file
        //-
        // - Same thing as the last two lines but with the newly created element
        // const imgWidth = newImg.current.naturalWidth
        // const imgHeight = newImg.current.naturalHeight
        // - 

        reader.onload = (e) => {
            current.src = e.target.result 
            //-
            // newImg.current.src = e.target.result
            //-
            canvasCtx.drawImage(imgRef.current, imgRef.current.x, imgRef.current.y, imgWidth, imgHeight)   
            getFilesColors(current, imgWidth, imgHeight)
        }
        reader.readAsDataURL(file)
        setIsUploaded(true)
        // convertToCanvas(imgRef, imgWidth, imgHeight)
    }

    const convertToCanvas = (currentImg, imgWidth, imgHeight) => {
            //Everytime the image is uploaded, whipe the canvas clean and draw the new image in the canvas. 
            if (isUploaded) {
                canvasCtx.width = imgWidth
                canvasCtx.height = imgHeight
                canvasCtx.drawImage(currentImg.current, currentImg.current.x, currentImg.current.y, 600, 600)
                // console.log("PIXEL",canvasCtx.getImageData(1, 1, 1, 1).data)
                setImgRef(canvasRef.current)
            }else {
                // console.log('delet imeg')
            }
    }

    //There's a double call because otherwise the data is not sent:
    const getFilesColors = (file, width, height) => {
            //Top, bottom, left and right
            sendImagePropertiesToRoot(
                dominantColor.getColorAsync(file, {mode: "precision", ignoredColor: [255, 255, 255, 255]},
                Color.getColorAsync(file, {height: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]}),
                Color.getColorAsync(file, {top: height - 20, height: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]}),
                Color.getColorAsync(file, {width: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]}),
                Color.getColorAsync(file, {left: width - 20, width: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]})
                )
            .then(() => {
                sendImagePropertiesToRoot(
                    dominantColor.getColor(file, {mode: "precision"}),
                    Color.getColor(file,{height: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]}),
                     Color.getColor(file, {top: height - 20, height: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]}),
                    Color.getColor(file, {width: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]}),
                    Color.getColor(file, {left: width - 20, width: 20, mode: "precision", ignoredColor: [255, 255, 255, 255]})
                    )
            })
            )
    }
    //When image is loaded into the Client, send the image object definition 
    //to parent component. There it will be sent as a prop to ImageUpload's siblings.
    const sendImagePropertiesToRoot = (imgProps, imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight) => {
        console.log('imgprops  on imageupload callback fn()',imgProps,imgPropsLeft)
        props.callBackImageProperties(imgProps, imgPropsTop, imgPropsBottom, imgPropsLeft, imgPropsRight)
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
                {isUploaded ?  '' : <p className="fade-in">Click or drag here to upload an image</p>}
                <img ref={imgRef} alt=''/>
                <canvas ref={canvasRef}/> 
                <Image/>
            </div>
            </div>
    )
}

export default ImageUpload;
