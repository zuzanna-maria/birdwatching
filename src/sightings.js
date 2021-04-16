import React, { Component } from 'react'

class RecentSpottings extends Component {

  constructor(props) {

  super(props);
    this.birdArray = []
    this.state = {birds: [], }
    this.lat = ''
    this.lng = ''
  }

  componentDidMount() {
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.location}&pretty=1&key=66d9b9ecaef64c0eb0999b478cf680cc`)
          .then(res => res.json())
          .then((data) => {
            this.lat = data.results.[0].annotations.DMS.['lat'].split(' ').[0]
            console.log(this.lat)
            this.lng = data.results.[0].annotations.DMS.['lng'].split(' ').[0]
            console.log(this.lng)
          })

    fetch("https://api.ebird.org/v2/data/obs/geo/recent?lat=51.507351&lng=-0.127758&sort=species", {
      headers: {
        "X-Ebirdapitoken": "26tniak8t61c"
          }
        })
          .then(res => res.json())
          .then((data) => {
            this.birdArray.push(data[0].comName)
            this.birdArray.push(data[1].comName)
            this.birdArray.push(data[2].comName)
            this.birdArray.push(data[3].comName)
            this.birdArray.push(data[4].comName)
            this.setState({birds: this.birdArray})
          })

        }

        handleInput = (event) => {
          this.setState({location: event.target.value})
        }
handleClick =() => {

}
  render() {
    return (

      <div>
      <p>Check what birds were recently spotted here</p>
      <input  type="text" style={{ marginLeft: '.5rem' }}  onChange={this.handleInput} />
      <p><button onClick={this.handleClick}> Check </button></p>
      <p>Birds recently spotted in this area:</p>
      <ul style={{ listStyleType: "none" }}>
                {this.state.birds.map(function(name, index){
                    return <li  key={ index }>{name}</li>;
                  })}
            </ul>
      </div>
    )
  }

}

export default RecentSpottings
