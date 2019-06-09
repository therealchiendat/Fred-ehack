import React from 'react'
import './Home.css'
import MapComponent from './Map.js'
export class Home extends React.Component {
  render () {
    const style = {
      width: 'auto',
      height: '80vh',
      position: 'relative'
    }

    return (
      <div container style={style}>
        <MapComponent
          google={this.props.google}
          onClick={this.onMapClicked}
          zoom={10}
          initialCenter={{ lat: 45.9299084, lng: -66.6647803 }}
        />
      </div>
    )
  }
}

export default Home
