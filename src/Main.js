import React from 'react';

import { Container, Row, Col , Button } from 'mdbreact';
class Main extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
      index: 0,
      disabledNext: false,
      disabledPrev: false
    }
   }
  
  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = (index === 0);

    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false })
  }

 toggleNext(e) {
     let index = this.state.index + 1;
     let disabledNext = index === (this.props.profiles.length - 1);

     this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false })
   }

render() {
     const { index, disabledNext, disabledPrev } = this.state
     const profile = this.props.profiles ? this.props.profiles[index] : null
     
     if (profile) {
       return (
         <div className='profile'>
                
           <Profile {...profile} />
           <div>
             <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
             <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
           
           </div>
         
         </div>
       )
     } else {
       return <span>error</span>
     }
  }

  
}

const Prev = (props) => {
  return ( 
    <Container>
    <Row>
      <Col md="6">
    <Button onClick={props.toggle} disabled={props.active}>Previous</Button>
    </Col>
        </Row>
      </Container>
    
  );
}

const Next = (props)=> {
  return (
    <Container>
    <Row>
      <Col md="6">
    <Button onClick={props.toggle} disabled={props.active}>Next</Button>

    </Col>
        </Row>
      </Container>
  );
}

const Profile = (props) => {
  const data = [] ;
  fetch(props.songs)
  .then(response =>  response.json() )
  //  .then(text =>  console.log(text.toptracks.track))
   .then(artistsData => {
    Object.values(artistsData).forEach(artistData => {
      data.push({
        artistData: artistData.track
      })
     console.log(data);
    })
  })
  return (


    <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">{props.name}</p>
              
              <div className="text-center">
              <img src= {props.image} className="mx-auto d-block"/> 
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Main;