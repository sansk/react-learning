import { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    const [delayVal, setDelayVal] = useState(0);

    const increaseCount = () => setValue(value + 1);
    const decreaseCount = () => setValue(value - 1);
    const resetCount = () => setValue(0);

    const delayCount = () => {
        setTimeout(() => {
            setDelayVal((prevValue) => {
                return prevValue + 1;
            });
        }, 5000);
    }

    return (
        <>
            <section>
                <h2>Mini Project: Simple Counter</h2>
                <h3>Using useState Hooks</h3>
                <br />
                <h2>{value}</h2>
                <button className="btn" onClick={decreaseCount}>Decrease</button>
                <button className="btn" onClick={resetCount}>Reset</button>
                <button className="btn" onClick={increaseCount}>Increase</button>

                <h2>Mini Project: Delay Counter</h2>
                <h3>Using useState Hooks and setTimeout, Delayed Counter</h3>
                <br />
                <h2>{delayVal}</h2>
                <button className="btn" onClick={delayCount}>Delay Increase</button>
            </section>
        </>
    )
};

export default Counter;