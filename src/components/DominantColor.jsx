import React, {useEffect,useState} from 'react';

function DominantColor (props) {

    const Color = props.imageProps
    // const [fontColor, setFontColor ] = useState("F5F5F5")
    
    if (Color === null) return ''
    // if(Color.isLight) setFontColor('131213')

    const bgColor = {
        backgroundColor: props.imageProps.hex,
        // color: fontColor
    } 

    return (
        <div className="Details-dominant-color" style={bgColor}><p>{props.imageProps.hex}</p></div>
    )
}

export default DominantColor;