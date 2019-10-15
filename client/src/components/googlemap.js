import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react'
import { isAbsolute } from 'path';
import { positions } from '@material-ui/system';

const API_KEY = process.env.API_KEY


export class MapContainer extends Component {

    
  render() {
    const style = {
        width: '10',
        height: '10',
        position: 'absolute',
        right: '60',
        
      }
    return (
      <Map google={this.props.google}   style={style} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>look</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)