import React,{Component} from 'react'
import DominantColor from './DominantColor'
import ColorPalette from './ColorPalette'
import './css/ImageDetails.css'


class ImageDetails extends Component {

    constructor (props)  {
        super(props)
        this.boo()
    }

    boo () {
        console.log('imgprops on imagedetails',this.props.imageProps)
        console.log('imgpropspalette on imagedetails', this.props.imagePropsPalette)
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