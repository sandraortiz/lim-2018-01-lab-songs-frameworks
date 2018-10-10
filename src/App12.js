import React, { Component } from 'react';
import './App.css';



// Application name    songs
// API key  f36f678dce4b7175b8c9e6e14507ac28
// Shared secret 1485c49cb57fdbec82a6e6374df1be45
// Registered to ortizSandra
//http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json

class App extends Component {
constructor(){
  super() 
    this.state = {data:[],songs:[]
    }
  }
componentWillMount(){
 fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json')
.then((response) => {
  return response.json()
})
.then((data) => {
this.setState({data:data.artists.artist})
console.log(data.artists.artist);

})
fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=MichaelJackson&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json')
.then((response) => {
  return response.json()
})
.then((data) => {
this.setState({songs:data})
console.log(data);

})
}
  


  render() {

 
      return (
        <div>
        
      <ul>
           {this.state.data.map((note) => {
            return (    

              
              <ul>
      <li id={note.mbid} >{note.name} </li>   
     </ul> 
  
           ) })}          
       </ul>
        </div>
      )
  

  }
  
    }
  
  
export default App;

// azdiworld.com