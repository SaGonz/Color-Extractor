import React from 'react'
import './css/Color.css'

class Color extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            hue: '',
            saturation: '',
            value: '',
            fontColor: '#F5F5F5'
        }
    }

    componentDidMount() {
        if(this.props.isLight) {
            this.setState({fontColor: '#131213'})
            console.log('is light')
        }
    }

    render() {
        return <div className="color-block" style={{backgroundColor: this.props.hexCode, colorProps: this.state.fontColor}}>
            <p>{this.props.hexCode}</p>
            <div>
                {this.state.hue}
                {this.state.saturation}
                {this.state.value}
            </div>
        </div>
    }
}

export default Color