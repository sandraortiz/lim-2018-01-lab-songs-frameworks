
import React from 'react';
const Lista = (props) => {
 return(
<div> 

  <h1 className="text-center">{props.name}</h1>
  <img src= {props.image} className="mx-auto d-block"/> 

  
</div>
 )
}

export default Lista