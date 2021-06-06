import React, { useState } from 'react';
import Module from "./Module.jsx";
import Entry from "./Entry.jsx";
var message=[{title:"sent title1", text:"sent content1."},{title:"sent title2", text:"sent content2"},{title:"sent title3", text:"sent content3"}];
var today=new Date();
var count=0;
function Content(props) {
  const [onadd,updateonadd]=useState([]);
  const [newentry,updatenewentry]=useState({title:"",text:""});  
  function createcard(messagein,index)
  {
      return <Module modulesel={moduleclick} keyin={index} message={messagein} />;
  }
  function moduleclick(ident)
  {
        //console.log("clicked "+ident);
        message=message.filter(function(value,index)
        {
          return index !==ident;
        });
        count++;
        updateonadd(count);
  }
  function inputchange(event)
  {
    //console.log(newentry);
    if(event.target.name=="newtitle")
    {
      updatenewentry({title:event.target.value,text:newentry.text});
    }
    else if(event.target.name=="newtext")
    {
      updatenewentry({title:newentry.title,text:event.target.value});
    }
  }
  function additem()
  {
    //var newitem={title:"new title",text:"new content"};
    message.push(newentry);
    //console.log(message);
    //updateonadd(message.length);
    updatenewentry({title:"",text:""});
  }    
    return (
      <div>
        <div>
            {message.map(createcard)}
        </div>        
        <div class="row content">
            <Entry onMod={inputchange} newvalue={newentry} onCheck={additem}/>
        </div>
      </div>
    );
  }
  
  export default Content;