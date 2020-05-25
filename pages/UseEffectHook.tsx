import React, { useEffect, useState } from "react";
import Link from "next/link"

const useEffectExample = () => {
  const [visits, setVisits] = useState(1);
  useEffect(() => {
    console.log("useEffect callBack called");

    const listener = (e: MouseEvent) => {
        console.log('mouse down', e.offsetX, e.offsetY)
    };

    document.addEventListener('mousedown', listener)
    // clean up 
    return () => {
        console.log('use Effect Clean UP called')
        document.removeEventListener('mousedown',listener);
    }
  }, []);

  return (
    <div>
      Use Effect
      <p>Visit {visits} </p>
      <button onClick={() => setVisits(visits + 1)}>Click</button><br/>
      <Link href={{pathname: '/about'}}><a>About</a></Link>
    </div>
  );
};

export default useEffectExample;
