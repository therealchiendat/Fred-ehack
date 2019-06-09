import React, { Component } from "react";
import getData from "../components/APIClient";
import {Map, InfoWindow, Marker, GoogleApiWrapper,Polyline} from 'google-maps-react';
import { makeStyles } from '@material-ui/core/styles';
import api from './Resources/sensitive/api.json';
import {Paper, InputBase, IconButton, List, ListItem, ListItemText, ListItemLink} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Home.css';

const searchstyle = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});


const SearchComponent = () =>{
  const classes = searchstyle();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search for events'
        inputProps={{ 'aria-label': 'Search for events' }}
      />
      <IconButton className={classes.iconButton} aria-label='Search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}


export class Home extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        venueData: {}
		};
  }
  componentWillMount(){
    getData("Gyms").then((data)=>{
      this.setState({venueData: data.features});
      console.log(this.state["venueData"]);
    });
  }


  render() {
    const mapstyle = {
      width: 'auto',
      height: '75vh',
      position: 'relative',
    }
    return (
      <div  className='Home'>
        <div className='Searchsection'
          style={{
            'backgroundColor':'white',
            'marginBottom':'20px',
            'padding':'20px',
            'borderRadius':'10px',
            'boxShadow': '0 4px 4px 0 rgba(0,0,0,0.1)'}}>
          <SearchComponent />
          <List>
            <ListItem button>
              <ListItemText primary='Fredericton Rib Fest' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='LGBT Pride Parade' />
            </ListItem>

            <ListItem button>
              <ListItemText primary='Wild Karaoke' />
            </ListItem>
          </List>
        </div>
        <div
        style={{
          'backgroundColor':'white',
          'width': 'auto',
          'position': 'relative',
          'height': '80vh',
          'paddingTop':'20px',
          'borderRadius':'10px',
          'boxShadow': '0 4px 4px 0 rgba(0,0,0,0.1)'}}
        >
        <Map
            style={mapstyle}
            google={this.props.google}
            onClick={this.onMapClicked}
            zoom={10}
            initialCenter= {{lat:45.9299084,lng:-66.6647803}}
            >
        </Map>
        </div>
      </div>
    )
  }
}
 export default GoogleApiWrapper({
   apiKey: api.name
 })(Home)
