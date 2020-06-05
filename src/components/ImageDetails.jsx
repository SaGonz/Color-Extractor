import React,{Component,useEffect} from 'react'
import DominantColor from './DominantColor'
import ColorPalette from './ColorPalette'
import './css/ImageDetails.css'

class ImageDetails extends Component {

    constructor (props)  {
        super(props)
        this.state = {
            imgProps: {}
        }
    }

    render(){

        return(
        <div className="Image-details-container">
            <DominantColor imageProps={this.props.imgProps}/>
            <ColorPalette imageProps={this.props.imgProps}/>
        </div>)
    }
}
export default ImageDetails