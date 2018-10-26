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
    <p> {note.name}   </p>
    
    </div>

    <div className="col-3">
    <p> {note.playcount} </p>
    </div>


    <div className="col-3">
    {/* <p> {note.playcount} </p> */}
    <Button color="elegant"  onClick = {() => props.likes }  ><i class="fas fa-thumbs-up"></i></Button>
    <Button color="elegant"><i class="fas fa-thumbs-down"></i></Button>
    
    </div>

  </div>

<div  >

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