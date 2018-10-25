import React from 'react';
const Songs = (props) => {
  console.log(props.playcount);
  
 return(
<div> 
  
  <ul>
  {props.songs.map((note) => {
        return (    
  <ul >
  <li>{note.name} </li> 
  <li> {note.playcount} </li> 
 </ul> 

       ) })}   
</ul>
</div>
 )
}

export default Songs