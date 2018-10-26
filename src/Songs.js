import React from 'react';
import { ListGroup, ListGroupItem } from 'mdbreact'
import{Container} from 'mdbreact';
import{Button} from 'mdbreact';

const Songs = (props) => {
   
 return(

<div> 
  <ul>
  {props.songs.map((note) => 
    
   <Container> 
<ListGroup>
    <div class="d-flex ">
  <div class="p-2 w-100 ">
  <ListGroupItem >
  <div className="row">
  <div className="col-5">
    <p id={note.mbid}> {note.name}   </p>
     </div>
    <div className="col-3">
    <p> {note.playcount}  </p>
    </div>
    <div className="col-3">
     <Button color="elegant"  onClick = { props.likes } id={note.mbid}>  <i class="fas fa-thumbs-up"></i></Button>
    <Button color="elegant"  onClick = { props.dislike } id={note.mbid}> <i class="fas fa-thumbs-down"></i></Button>
       </div>
 </div>
  </ListGroupItem>
  </div>
</div>
  </ListGroup>
</Container>
       )}   
</ul>
</div>
 )
}

export default Songs