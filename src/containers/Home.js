import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper,Polyline} from 'google-maps-react';
import api from "./Resources/sensitive/api.json";
import trip0 from "./Resources/trips/2016-07-02--11-56-24.json"; // <-- Sample data import
import trip1 from "./Resources/trips/2016-07-02--13-09-31.json";
import "./Home.css";
let i;
export class Home extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
		};
	}

  heatMapColorforValue(value){
    var h = (40 - value)/40 * 150
    return "hsl(" + h + ", 100%, 50%)";
  }
  renderpolyline(coords,speed){
    var indents = [];
    for(var i = 0; i < coords.length-1; i++){
      indents.push(
        <Polyline
          path={[coords[i],coords[i+1]]}
          strokeColor={speed[i]}
          strokeOpacity={1}
          strokeWeight={3}
          />
        );
        };
    return indents;
  }
  render() {
    const coords=[{lat:trip0.coords[0].lat,lng:trip0.coords[0].lng}];
    const speed=[this.heatMapColorforValue(trip0.coords[0].speed)];
    for (i=1; i<trip0.coords.length; i++) {
      coords.push({lat:trip0.coords[i].lat,lng:trip0.coords[i].lng});
      speed.push(this.heatMapColorforValue(trip0.coords[i].speed));
    }
    console.log(speed[1])
    const style = {
      width: 'auto',
      height: '80vh',
      position: 'relative'
    }

    return (
      <div container style={style}>
      <Map google={this.props.google}
          onClick={this.onMapClicked}
          zoom={10}
          initialCenter= {{lat:45.9299084,lng:-66.6647803}}
          >
      </Map>
      </div>
    )
  }
}
 export default GoogleApiWrapper({
   apiKey: api.name
 })(Home)
