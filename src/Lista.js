
import React from 'react';
const Lista = (props) => {
 return(
<div> 
  <p>{props.name}</p>
  <img src= {props.image} className="mx-auto d-block"/> 

  
</div>
 )
}

export default Lista