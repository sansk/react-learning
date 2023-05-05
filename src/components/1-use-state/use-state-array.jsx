import { useState } from "react";
import { data } from './data';

const UseStateArray = () => {
    const [persons, setPersons] = useState(data);

    const removeItem = (id) => {
        // let newPersons = persons.filter((person) => {
        //     return person.id !== id;
        // });

        // setPersons(newPersons);

        
        setPersons((prevPersons) => {
            return prevPersons.filter((person) => person.id !== id);
        });
    }

    return (
        <>
            <h3>useState Example - 2 - Array</h3>
            {
                persons.map((person) => {
                    return (
                        <div key={person.id} className='item'>
                            <h4>{person.name}</h4>
                            <button onClick={()=>removeItem(person.id)}>Remove</button>
                        </div>
                    )
                })
            }
            <button className='btn' onClick={()=>setPersons([])}> Clear All Items</button>
        </>
    )
};

export default UseStateArray;