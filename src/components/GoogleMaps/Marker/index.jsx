import React, { Component } from 'react';
import './style.css'

class Marker extends Component {

    onClickMarker = () => {
        const marker = this.props.markerInfo;
        console.log(marker)
    };

    render() {
        return (
            <div className="SuperAwesomePin" onClick={() => this.onClickMarker()}>

            </div>
        );
    }
}

export default Marker;