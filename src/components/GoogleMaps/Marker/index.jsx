import React, { Component } from 'react';
import './style.css'

class Marker extends Component {

    onClickMarker = () => {
        const marker = this.props.markerInfo;
        console.log(marker)
    };

    onEnterMarker = () => {
        const marker = this.props.markerInfo;
        console.log(marker)
    };

    onLeaveMarker = () => {
        const marker = this.props.markerInfo;
        console.log(marker)
    };

    render() {
        return (
            <div
                className="SuperAwesomePin"
                onClick={() => this.onClickMarker()}
                onMouseEnter={() => this.onEnterMarker()}
                onMouseLeave={() => this.onLeaveMarker()}
            >

            </div>
        );
    }
}

export default Marker;