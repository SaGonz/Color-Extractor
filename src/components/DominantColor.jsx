import React from 'react';

function DominantColor (props) {

    const Color = props.imageProps
    var fontColorIs = "#F5F5F5"

    if (Color === null) return ''
    if(Color.isLight)
    fontColorIs = "#131213"


    const bgColor = {
        backgroundColor: props.imageProps.hex,
        color: fontColorIs
    } 

    return (
        <div className="Details-dominant-color" style={bgColor}><p>{props.imageProps.hex}</p></div>
    )
}

export default DominantColor;