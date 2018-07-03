import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div className="googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC6IBlaI46HTK5sIftIe3sVX3R-IL_I3h4'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;