import { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'SK',
        age: 39,
        message: 'Hello Darling!'
    });

    const changeMessage = () => {
        // setPerson({...person, message: 'Darling Baby!'});

        setPerson((prevPerson) => {
            //return {...prevPerson, message: 'Darling Baby!'}
            return prevPerson.message === 'Hello Darling!'
                    ? {...prevPerson, message: 'Darling Baby!'}
                    : {...prevPerson, message: 'Hello Darling!'}
        });
    }
    return (
        <>
            <h3>useState Example - 2 - Object</h3>
            <div className="item">
                <h5>{person.name}</h5>
                <h5>{person.age}</h5>
                <h5>{person.message}</h5>
                <button onClick={changeMessage}>Change Message</button>
            </div>
        </>
    )
};

export default UseStateObject;