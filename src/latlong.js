import React, { Component } from 'react'

class Latlong extends Component {

  constructor(props) {

  super(props);
  this.birdArray = []
  this.state = {birds: []}
  }

  componentDidMount() {
    fetch("https://api.opencagedata.com/geocode/v1/json?q=london&pretty=1&key=66d9b9ecaef64c0eb0999b478cf680cc")
          .then(res => res.json())
          .then((data) => {
            let lat = data.results.[0].annotations.DMS.['lat'].split(' ').[0]
            console.log(lat)
            let lng = data.results.[0].annotations.DMS.['lng'].split(' ').[0]
            console.log(lng)
          })

        }

  render() {
    return (
      <div>
    test
      </div>
    )
  }

}

export default Latlong
