import React, { Component } from 'react';
import {Marker, GoogleMap} from 'google-map-react';
import GoogleMapApiKey from '../../keys/apiKeys';
import './style.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        markers: [
            {lat: 59.95, lng: 30.33, img_src: 'YOUR-IMG-SRC'},
            {lat: 59.85, lng: 30.23, img_src: 'YOUR-IMG-SRC' },
            {lat: 59.75, lng: 30.13,  img_src: 'YOUR-IMG-SRC'}
        ]
    };

    render() {
        const props = this.props;
        const ApiKey = GoogleMapApiKey.GoogleMapApiKey;

        return (
            <div className="googleMap">
                <GoogleMap
                    bootstrapURLKeys={{ key: ApiKey}}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
                >
                    {props.markers.map((marker, i) =>{
                        return(
                            <Marker
                                key={i}
                                lat={marker.lat}
                                lng={marker.lng}
                            />

                        )
                    })}
                </GoogleMap>
            </div>
        );
    }
}

export default SimpleMap;