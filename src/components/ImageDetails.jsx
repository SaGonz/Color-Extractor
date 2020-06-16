import React,{Component} from 'react'
import DominantColor from './DominantColor'
import ColorPalette from './ColorPalette'
import './css/ImageDetails.css'

class ImageDetails extends Component {

    constructor (props)  {
        super(props)
        this.state = {
            imgProps: {},
            imgPropsPalette: {}
        }
    }

    render(){

        return(
        <div className="Image-details-container">
            <DominantColor imageProps={this.props.imgProps}/>
            <ColorPalette imagePropsPalette={this.props.imgPropsPalette}/>
        </div>)
    }
}
export default ImageDetails