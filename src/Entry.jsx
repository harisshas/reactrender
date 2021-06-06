import React from 'react';

function Entry(props) {
  return (
    <div class="col col-12 col-md-12 module">
            <input onChange={props.onMod} class="form-control" type="text" name="newtitle" id="" placeholder="enter title" value={props.newvalue.title}/>
            <br></br>
            <input onChange={props.onMod} class="form-control" type="text" name="newtext" id="" placeholder="enter text" value={props.newvalue.text}/>
            <br></br>
            <button onClick={props.onCheck} class="btn btn-primary">Submit</button>
    </div>
  );
}

export default Entry;