import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ApiKey from '../../keys/apiKeys';
import './style.css'

const Marker = ({ text }) => <div className="SuperAwesomePin"></div>;

class SimpleMap extends Component {
    state = {
        coords: [
            {lat: 59.95, lng: 30.33}
        ],
        isMapLoad: false
    };

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11,
        marker: [
            {lat: 59.95, lng: 30.33, img_src: 'YOUR-IMG-SRC'}
        ]
    };
    initGeocoder = ({ maps }) => {
        const geocoder = new maps.Geocoder();

        geocoder.geocode({ 'address': 'United Kingdom Bakerstreet, 2'}, (results, status) => {
            if (status === 'OK') {
                const coords = results[0].geometry.location.toJSON();
                const updateCoords = [coords, ...this.state.coords];

                this.setState({ updateCoords, isMapLoad: true })
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });

    };

    render() {
        const props = this.props;
        const state = this.state;
        const key = ApiKey.GoogleMapApiKey;

        console.log(state.isMapLoad)

        return (
            <div className="googleMap">
                    <GoogleMapReact
                    bootstrapURLKeys={{key}}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
                    onGoogleApiLoaded={this.initGeocoder}
                    >
                    {(state.isMapLoad) (
                        state.coords.map((marker, i) => {
                            console.log('----------')
                            console.log(state.coords)
                            return (
                                <Marker
                                    key={i}
                                    lat={state.coords.lat}
                                    lng={state.coords.lng}
                                />
                            )
                        })
                    )}
                    </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;