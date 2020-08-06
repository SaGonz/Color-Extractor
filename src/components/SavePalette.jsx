import React from 'react'

function SavePalette (props) {

    const savePalette = () => {
        console.log('save palette hit')
    }
    const savePaletteWithImage = () => {
        console.log('save palette with image hit')
    }

    return(
        <div className="save-pallettes">
            <button onClick={savePalette}>Save palette</button>
            <button onClick={savePaletteWithImage}>Save palette with image</button>
        </div>

    )
}

export default SavePalette