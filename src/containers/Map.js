import React, { Component } from 'react'
import api from './Resources/sensitive/api.json'
import parksList from './Resources/parks.json'
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react'

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    this.clickPark = this.clickPark.bind(this)
  }

  clickPark (e) {
    console.log('Park clicked! -> ', e)
  }

  render () {
    const initialCoords = parksList.initialCoords

    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: initialCoords.lat, lng: initialCoords.lng }}
      >
        {parksList.parks.map(park => {
          console.log('park in second map: ', park)
          const pathArray = []
          for (let i = 0; i < park.coords.length; i++) {
            pathArray.push(park.coords[i])
          }
          return (
            <Polygon
              name={park.name}
              title={park.title}
              paths={pathArray}
              strokeColor={park.fillColor}
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor={park.fillColor}
              fillOpacity={0.35}
              onClick={this.clickPark}
            />
          )
        })}
        {parksList.parks.map(park => {
          console.log('park in map: ', park)
          console.log('position dig', park.middle.lat)
          console.log(park !== undefined)
          return (
            <InfoWindow
              visible={park !== undefined}
              position={{ lat: park.middle.lat, lng: park.middle.lng }}>
              <div>
                <h1>{park.title}</h1>
              </div>
            </InfoWindow>
          )
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: api.name
})(MapContainer)
