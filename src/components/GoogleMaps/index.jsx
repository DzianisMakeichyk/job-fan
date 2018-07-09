import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ApiKey from '../../keys/apiKeys';
import './style.css'

const Marker = ({ text }) => <div className="SuperAwesomePin"></div>;

class SimpleMap extends Component {
    state = {
        coords: []
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

                this.setState({...this.state.coords, coords })
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });

    };

    render() {
        const props = this.props;
        const state = this.state;
        const key = ApiKey.GoogleMapApiKey;

        console.log(state.coords)
        console.log(props.marker)

        return (
            <div className="googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key }}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
                    onGoogleApiLoaded={this.initGeocoder}
                >
                    {/*{state.coords.map((marker, i) =>{*/}
                        {/*return(*/}
                            {/*<Marker*/}
                                {/*key={i}*/}
                                {/*lat={state.coords.lat}*/}
                                {/*lng={state.coords.lng}*/}
                            {/*/>*/}

                        {/*)*/}
                    {/*})}*/}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;