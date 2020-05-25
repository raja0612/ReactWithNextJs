import React, { useState } from 'react';

const ShowCookies = () => {
  const [toggleFlag, setToggle] = useState(true);

  const handleClick = () => {
      setToggle(false);
  }


    return (
            toggleFlag && 
            <div style={{background:"peachpuff",fontWeight:"bold", padding: "10px", textAlign: "center"}}>
                This website is using cookies. 
            <button onClick={handleClick}>I Agree</button>
          </div>
    )
}

export default ShowCookies;