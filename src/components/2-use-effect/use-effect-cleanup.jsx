import { useState, useEffect } from 'react'

const UseEffectCleanup = () => {
    const [size, setSize ] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    // Having a return from useEffect will claen up the event listerners we 
    // created. In the below case, it is enough to have a empty dependencies but in complex cases like this
    // signup etc, it is always good to have return as cleanup .
    useEffect(() => {
        console.log("WindowSize - Render");
        window.addEventListener('resize', checkSize);
        // return () => {
        //     console.log("Cleaning Up...");
        //     window.removeEventListener('resize', checkSize);  
        // }
    }, [])
  return (
    <>
        <h3>useEffect Example - 3 - Cleanup</h3>
        <h4>Use Console. To avaoid useEffect crating multiple eventlisters</h4>
        <h3>Window Width: { size }px</h3>
    </>
  )
};

export default UseEffectCleanup;