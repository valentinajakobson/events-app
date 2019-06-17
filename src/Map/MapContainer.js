import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Map.css';
 
export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markerArr: props.markers,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      streetViewControl: true,
      names: []
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }


  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={this.props.center} style={this.props.style}>
          {this.props.events.map((el, index) => {
              return <Marker key={index}
              position={{lat: el.lat, lng: el.lon}}
              
              />
          })
          }

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)