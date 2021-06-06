import React,{useState} from 'react';
import Heading from "./Heading.jsx";
import Footing from "./Footer.jsx";
import Content from "./Content.jsx";

function App(props) {
  return (
    
    <div class="container">
      <Heading />
      <Content />
      <Footing />
    </div>
  );
}

export default App;
