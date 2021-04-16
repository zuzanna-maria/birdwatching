import React, { Component } from 'react'




class Input extends Component {
    constructor(props) {
    super(props);
    this.state = {species: '', location:'', sightings: [], birds: [], lat: '', lng: ''}
    this.sightings = []
    this.birdArray = []
    this.lat = ''
    this.lng = ''
  }





saveSpecies = (event) => {
  this.setState({species: event.target.value})
}

saveLocation = (event) => {
  this.setState({location: event.target.value})
}

displaySightings = (event) => {
  let date = new Date();
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let sighting = [day.toString(), ':', month.toString(), ':', year.toString(), ' : ', this.state.species, ' : ', this.state.location]
  this.sightings.push(sighting)
  this.setState({sightings: this.sightings})

  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.location}&pretty=1&key=66d9b9ecaef64c0eb0999b478cf680cc`)
        .then(res => res.json())
        .then((data) => {
          let lat = data.results.[0].annotations.DMS.['lat'].split(' ').[0]
          let lat2 = data.results.[0].annotations.DMS.['lat'].split(' ').[1]
          let cleanlat = lat.replace('°', '')
          let cleanlat2 = lat2.replace("''", " ")
          let newlat = [cleanlat, cleanlat2]
          let joinedlat = newlat.join('.')
          this.setState({lat: cleanlat})
          let lng = data.results.[0].annotations.DMS.['lng'].split(' ').[0]
          let cleanlng = lng.replace('°', '')
          this.setState({lng: cleanlng})
          console.log(joinedlat)
        })


}

displayBirds = () => {

  fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${this.state.lat}&lng=${this.state.lng}&sort=species`, {
    headers: {
      "X-Ebirdapitoken": "26tniak8t61c"
        }
      })
        .then(res => res.json())
        .then((data) => {
          this.birdArray = []
          this.setState({birds: []})
          console.log(this.state.birds)
          this.birdArray.push(data[0].comName)
          this.birdArray.push(data[1].comName)
          this.birdArray.push(data[2].comName)
          this.birdArray.push(data[3].comName)
          this.birdArray.push(data[4].comName)
          this.setState({birds: this.birdArray})
          console.log(this.state.birds)
        })
}




  render() {
    return (
      <div>

      <p>Species</p>
      <input  type="text" style={{ marginLeft: '.5rem' }}  onChange={this.saveSpecies} />
      <p>Location</p>
      <input type="text" onChange={this.saveLocation} />
      <p><button onClick={this.displaySightings}> Add to log </button></p>
      <p>Sighting Log: </p>

      <ul style={{ listStyleType: "none" }}>
                {this.state.sightings.map(function(name, index){
                    return <li  key={ index }>{name}</li>;
                  })}

            </ul>
            <p>Birds recently spotted in this area:</p>
            <p><button onClick={this.displayBirds}> Check </button></p>

            <ul style={{ listStyleType: "none" }}>
                      {this.state.birds.map(function(name, index){

                          return <li  key={ index }>{name}</li>;
                        })} </ul>

      </div>
    );
  }
}


export default Input
