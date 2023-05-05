import { useState } from "react";

import UseStateArray from './use-state-array';
import UseStateObject from './use-state-object';
import Counter from './counter';

const UseStateExample = () => {
    const [title, setTitle] = useState('useState Example - 1 - Simple');

    // Simple Approach
    // const handleChange = () => {
    //     if(title === 'useState Example - 1 - Simple') {
    //         setTitle('useState Simple Example - Title Change');
    //     } else {
    //         setTitle('useState Example - 1 - Simple');
    //     }
    // }

    // Functional Update
    const handleChange = () => {
        setTitle((prevTitle) => {
            return prevTitle === 'useState Example - 1 - Simple'
                ? 'useState Simple Example - Title Change'
                : 'useState Example - 1 - Simple'
        })
    }    

    return (
        <div className="use-state">
            <h2>useState Hooks</h2>
            <hr className='one' />
            <h3>{ title }</h3>
            <button className='btn' onClick={handleChange} >Change the above text.</button>
            <hr className='two' />
            <UseStateArray />
            <hr className='two' />
            <UseStateObject />
            <hr className='three' />
            <Counter />
            <hr className='one' />
        </div>
    )
}

export default UseStateExample