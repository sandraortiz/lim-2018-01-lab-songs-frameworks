import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super() 
    this.state = {
      data:[],
    }
    this.getData();
  
} 
getData() {
fetch('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=f36f678dce4b7175b8c9e6e14507ac28&format=json&mbid=251f6d72-a1d9-4b9d-944a-2df9b26f6212')
.then((response)=>{
  return response.json()
})
.then((data))


//  .then((resp)=>{
//    resp.json().then((res) =>{
//      console.log(res.track);
//      console.log(res.track.name);
//      this.setState({data:res.track})
//    } )
//  } )

} 
  render() {
    
    return (
      <div className="App">
      {
        
 <h3>data</h3>
      }
    </div>
     )
    }
  }
export default App;
