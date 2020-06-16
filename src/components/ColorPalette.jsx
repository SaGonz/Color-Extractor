import React from 'react';

function ColorPalette (props) {

    //Only display the palette if the palette prop has loaded and all its items have loaded aswell
    if (props.imagePropsPalette === null) return ''
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
    //Push each shade's respective text-color depending on its lightness
    const textColor = []
    for( const Color of Palette ) {
        if (Color.isLight) textColor.push("#131213")
        else textColor.push("#F5F5F5")
    }
    
    //Each object's style 
    const bgColorTop = { backgroundColor: Palette[0].hex, color: textColor[0] }
    const bgColorBttm = { backgroundColor: Palette[1].hex, color: textColor[1] }
    const bgColorLft = { backgroundColor: Palette[2].hex, color: textColor[2] }
    const bgColorRght = { backgroundColor: Palette[3].hex, color: textColor[3] }

    return( 
        <div className="Details-color-palette">
            <div style={bgColorTop}><p>{Palette[0].hex}</p></div>
            <div style={bgColorBttm}><p>{Palette[1].hex}</p></div>
            <div style={bgColorLft}><p>{Palette[2].hex}</p></div>
            <div style={bgColorRght}><p>{Palette[3].hex}</p></div>
        </div>
    )
}

export default ColorPalette;