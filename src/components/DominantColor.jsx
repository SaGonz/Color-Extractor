import React from 'react';
import Color from './Color.jsx'

function DominantColor (props) {
    console.log('all props on dominant color',props)
    console.log('imgprops on dominantcolor',props.imageProps)
    //Only return content if the props have loaded (image object data)
    if (props.imageProps === null) return ''

    return (
        <div className="Details-dominant-color">
            <Color hexCode={props.imageProps}/>
        </div>
    )
}

export default DominantColor;