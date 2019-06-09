const endpointList =
    [
        {
            name: "Ball Fields",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/BallFields/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "Baseball, Softball, T-Ball fields"
        },
        {
            name: "Gyms",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/Gyms/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "Gym name and general comments such as the size"
        },
        {
            name: "Pools and Beaches",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/Pools%20and%20Beaches/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "Locations of City of Fredericton Pools"
        },
        {
            name: "Trails",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/Trail/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "The Fredericton trails data contains walking trails along former railway beds as well as trails located in the City's two major parklands - Odell and Killarney. The parkland trail systems were collected by means of a GPS while the other trails have been collected through digitizing from current orthophotography. Trail systems are maintained by the City's Parks and Trees Division."
        },
        {
            name: "Parks",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/Park%20Areas/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "Park name and associated Ward number"
        },
        {
            name: "Tennis Courts",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/Tennis%20Courts/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "The tennis court dataset includes the location name, number of courts, type of court surface and condition."
        },
        {
            name: "Basketball",
            URL: "https://services2.arcgis.com/iLWAxhpxafhOza2U/arcgis/rest/services/Basketball/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
            description: "Point locations with court names"
        }
    ];

const getURL = (name) => {
    for (let endpoint of endpointList) {
        if (endpoint.name == name)
            return endpoint;
    }
}

const getData = (name) => {
    const endpoint = getURL(name);
    return fetch(endpoint.URL).then((data) => data.json()).then((data) =>  data);
}

export default getData;
