import React, { Component } from 'react'
import api from './Resources/sensitive/api.json'
import getData from '../components/APIClient'
import parksList from './Resources/parks.json'
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react'

export class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      venueData: []
    }
    this.clickPark = this.clickPark.bind(this)
  }

  componentWillMount () {
    getData('Gyms').then((data) => {
      this.setState({
        venueData: data.features
      }, () => {
        this.render()
      })
    })
  }

  clickPark (e) {
    console.log('Park clicked! -> ', e)
  }

  render () {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: parksList.initialCoords.lat, lng: parksList.initialCoords.lng }}
      >
        {parksList.parks.map(park => {
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
          return (
            <InfoWindow
              visible={park !== undefined && park !== null}
              position={{ lat: park.middle.lat, lng: park.middle.lng }}>
              <div>
                <h1>{park.title}</h1>
              </div>
            </InfoWindow>
          )
        })}
        {this.state.venueData.map(park => {
          return (
            <InfoWindow
              key={park.attributes.Name}
              visible={park !== undefined && park !== null}
              position={{ lat: park.geometry.x, lng: park.geometry.y }}
              onClick={this.clickPark}>
              <div>
                <h1>{park.attributes.Name}</h1>
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
