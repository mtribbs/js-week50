import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <button onClick={() => setCount(count + 1)}>Click me! Count is: {count}</button>
        </div>
    );
};

export default Counter;


// hooks do not work within class components
// hooks are used instead of class components (but can be used in the same project)
// useState is a function, will return an array with two values:
// getter: get the value, setter: set the value
// count is 0
