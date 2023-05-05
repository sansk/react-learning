import { useState, useEffect } from 'react';
import UseEffectCleanup from './use-effect-cleanup';
import UseEffectFetch from './use-effect-fetchData';

const UseEffectExample = () => {
    const [value, setValue] = useState(0);

    // useEffect using dependency as the second parameter => []
    // We can't use Hooks within conditional but can use conditions within Hooks.
    useEffect(() => {
        console.log("useEffect on Re-rendering of component. Now Value = ", value);
    }, [value])

    // Can use useEffect multiple times within a component
    // useEffect with empty dependency [], will run only once while loading the page
    useEffect(() => {
        console.log("Rendereing only Once while loading because of empty Dependencies")
    }, [])

    console.log("Rendering of Component");
  return (
    <div className="use-state">
        <h2>useEffect Hooks</h2>
        <hr className='one' />
        <h3>useEffect Example - 1 - Simple</h3>
        <h2>{ value }</h2>
        <h4>Simple example showing the side effects of re-rendering. Use console.</h4>
        <button className='btn' onClick={()=>setValue(value + 1)}>Increase</button>
        <hr className='two' />
        <h3>useEffect Example - 2 - Dependencies</h3>
        <h4>Use Console. Second Paramemeter in useEffect as Dependencies.</h4>
        <hr className='two' />
        <UseEffectCleanup />
        <hr className='two' />
        <UseEffectFetch />
        <hr className='two' />
    </div>
  )
};

export default UseEffectExample;