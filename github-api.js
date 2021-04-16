
 class Portfolio extend Component {
    constructor(props) {
    super(props)
    this.state = {
    userData : {}
    }
   }

   componentDidMount() {
   fetch("https://api.github.com/users/paulinakoz")
   .then(data => data.json())
   .then(parsedData => this.setState({userData: parsedData}))
   }

   render() {
   return(
   <div>
    <h1> {this.state.userData.name}</h1>
   </div>
   )
   }
}
