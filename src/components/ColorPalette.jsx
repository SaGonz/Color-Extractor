import React from 'react';
import Color from './Color';

function ColorPalette (props) {
    console.log('imgpropspalette on colorpalette', props.imagePropsPalette)
    console.log('all props on colorpalette',props)
    //Only display the palette if the palette prop has loaded and all its items have loaded aswell
    if (props.imagePropsPalette === undefined) return ''
    if (
        (props.imagePropsPalette[0] === undefined && props.imagePropsPalette[1] === undefined) &&
        (props.imagePropsPalette[2] === undefined && props.imagePropsPalette[3] === undefined) 
        )
        return ''
    
    //All the objects inside the Palette array
    const Palette = [
        props.imagePropsPalette[0], 
        props.imagePropsPalette[1], 
        props.imagePropsPalette[2], 
        props.imagePropsPalette[3]
    ]

    const addColor = () => {

    }
    const removeColor = () => {

    }

    return( 
        <div className="Details-color-palette">
            <Color hexCode={Palette[0].hex} isColorLight={Palette[0].isLight}/>
            <Color hexCode={Palette[1].hex} isColorLight={Palette[1].isLight}/>
            <Color hexCode={Palette[2].hex} isColorLight={Palette[2].isLight}/>
            <Color hexCode={Palette[3].hex} isColorLight={Palette[3].isLight}/>
        </div>
    )
}

export default ColorPalette;