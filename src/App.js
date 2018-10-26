import React from 'react';
import Lista from './Lista'
import Songs from './Songs'
import{Button} from 'mdbreact';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
      artists: [],
      index: 0,
      disabledNext: false,
      disabledPrev: false ,
      like:0
    }
  }

  componentDidMount( ) {
    const profile = this.props.profiles 
   const artistInfo = profile.map(artist =>
      fetch(artist.songs)
        .then(response => response.json())
        .catch(err => console.error(err))
    )
    Promise.all(artistInfo)
      .then(arrayArtist => {
        const dataArtist = arrayArtist.map(artist => {
          console.log(artist);
          

           return {
              name:  artist.toptracks.track[0].artist.name,
          image: artist.toptracks.track[0].image[3]['#text'],
            songs:artist.toptracks.track  ,
              
               }
        })
        this.setState({
          artists: dataArtist
        })
      })
  

  }
 
  togglePrev(e) {
    let index = this.state.index - 1
    let disabledPrev = false
    if (index <= 0) {
      e.preventDefault()
      index = 0
      disabledPrev = true
    }

    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
  }

  toggleNext(e) {
    let index = this.state.index + 1
    let disabledNext = false
    if (index === this.props.profiles.length - 1    ) {
      e.preventDefault()
      index = this.props.profiles.length - 1
      disabledNext = true
    }

    this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
  }


  like = ( ) => {

    this.setState({
      like: this.state.like + 1
  });
  } 
  dislike = ( ) => {
    if( this.state.like > 0  ) {
      this.setState({
      like: this.state.like - 1
  });
    }
  } 
  render() {
    const { disabledNext, disabledPrev } = this.state
        return (
        <div className = "App" > 
          <div>
            
            {this.state.artists.map((artist) =>
              <Lista 
                name={artist.name}
                image={artist.image}
                
                // songs={artist.songs}
               />

            )[this.state.index]
 }

 <div className="d-flex justify-content-center">
 <Button color="elegant" onClick={this.togglePrev.bind(this)} disabled={disabledPrev} ><i class="fas fa-backward"></i></Button>
       <Button color="elegant" onClick={this.toggleNext.bind(this)} disabled={disabledNext}><i class="fas fa-forward"></i></Button>
       {/* <Button color="elegant" onClick={this.like} ><i class="fas fa-forward"> {this.state.like} </i></Button>
       <Button color="elegant" onClick={this.dislike} ><i class="fas fa-forward">  </i></Button> */}

 </div>
           {/* <button onClick={this.togglePrev.bind(this)} disabled={disabledPrev}>Prev</button>
            <button onClick={this.toggleNext.bind(this)} disabled={disabledNext}>Next</button>

   */}
  {this.state.artists.map((artist) =>
              <Songs
                songs={artist.songs}
                counter = {this.state.like}
                likes={this.like }
                dislike = {this.dislike}
               />

            )[this.state.index]
 }

 
          </div>
       
</div>
      )
    
  }
}
export default App