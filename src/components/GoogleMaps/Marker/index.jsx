import React, { Component } from 'react';
import { stateDetails } from '../../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import update from 'react-addons-update';
import store from '../../../store'
import './style.css'

class Marker extends Component {

    onClickMarker = () => {
        // const marker = this.props.markerInfo;
        // console.log(marker)
    };

    onEnterMarker = () => {
        this.newMarkerInfo();
    };

    onLeaveMarker = () => {
        this.newMarkerInfo();
    };

    newMarkerInfo = () => {
        const markerInfo = this.props.info;

        const newMarkerInfo = update(markerInfo, {isHover: {$apply: () => { return markerInfo.isHover = !markerInfo.isHover }}});

        store.dispatch(stateDetails(newMarkerInfo));
    };

    render() {
        const { info } = this.props;
        const divStyle = {
            border: '5px solid pink'
        };
        const divStyle2 = {
            border: '5px solid blue'
        };

        return (

            <div
                className="SuperAwesomePin"
                onClick={() => this.onClickMarker()}
                onMouseEnter={() => this.onEnterMarker()}
                onMouseLeave={() => this.onLeaveMarker()}
                style={info.isHover ? divStyle : divStyle2}
            >

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    stateDetails
}, dispatch);


export default connect(mapDispatchToProps)(Marker);