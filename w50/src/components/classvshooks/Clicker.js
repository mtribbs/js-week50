import { useState } from "react";

const Clicker = ({rand}) => {
    const [num, setNum] = useState(1);

    const genRandom = () => {
        rand = Math.floor(Math.random() * 10) +1;
        setNum(rand);
    }

    return (
        <div>
            <h1>Number is: {num}</h1>
            {num === 7 ? (
                <h2>You won!</h2>
            ) : (
                <button onClick={genRandom}>Random Number</button>
            )}
        </div>
    );
};

export default Clicker; 