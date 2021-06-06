import React from 'react';
const today=new Date();

function Footing() {
    return (
        <div class="navbar footer">
            <p>&copy; The Phoenix Network {today.getFullYear()}</p>
      </div>
    );
  }
  
  export default Footing;