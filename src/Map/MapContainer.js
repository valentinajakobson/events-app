import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './Map.css';
import CurrentLocation from './CurrentLocation';


 class MapContainer extends Component {

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

    // binding this to event-handler functions
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
    const style = {
      width: '100%',
      height: '94vh',
      position:'relative',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        style={style}
        onClick={this.onMapClicked}

      >

   {this.props.events.map((el, index) => {

     /*const unique = [...new Set(this.props.events.map(item => item.location.address.street_address))];
     if (unique) {
       this.state.names.push(el.name.fi);
     }
     console.log(this.state.names);*/


         return(
    <Marker
        key={index}
        onClick={this.onMarkerClick}
        position = {{ lat: el.location.lat, lng: el.location.lon }}
         name={el.name.fi}

            />
         )
       } )
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
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer);
