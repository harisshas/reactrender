import React from 'react';
function Module(props) {
    
    return (
        <div onClick={function(){props.modulesel(props.keyin)}} class="col col-12 col-md-3 module">
            <p class="content-heading"> {props.message.title} </p>
            <p class="content-text"> {props.message.text} </p>
        </div>
    );
  }
  
  export default Module;