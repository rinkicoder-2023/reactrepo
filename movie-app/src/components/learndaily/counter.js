import React, { useState } from 'react';
//create a functional component
const Counter = () => {

    //use usestate hook to declare a state variable 'count' 
    const [count, setCount] = useState(0);

    return (<div>

        <p>Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>);
};

export default Counter;

//steps to do this--
// step 1 : declare a functional component
//step2 : create a state variable and setter method
//step3 : create return and there define count and buttoon 
//step 4 : inside button pass onclick event.
//now export the dumb function Counter