import React, { Component } from 'react';
import './style.css'

class Marker extends Component {

    onClickMarker = () => {
        // const marker = this.props.markerInfo;
        // console.log(marker)
    };

    onEnterMarker = () => {
        console.log(this.props.info)
    };

    onLeaveMarker = () => {

    };

    render() {
        let markerInfo;
            markerInfo = this.props.info;
            markerInfo = markerInfo.isHover;
        const divStyle = {
            border: '5px solid pink'
        };
        const divStyle2 = {
            border: '5px solid blue'
        };

        // console.log(markerInfo);
        return (
            <div
                className="SuperAwesomePin"
                onClick={() => this.onClickMarker()}
                onMouseEnter={() => this.onEnterMarker()}
                onMouseLeave={() => this.onLeaveMarker()}
                style={markerInfo ? divStyle : divStyle2}
            >

            </div>
        );
    }
}

export default Marker;