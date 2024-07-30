import React from "react";
import { useState } from "react";

function Calculadora(){
    const [resultado, setResultado] = useState("");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    return(
        <>
            <input 
            type="number"
            value={num1}
            onChange={
                (event) => setNum1(parseFloat(event.target.value))
            }
            />
            <input 
            type="number" 
            value={num2}
            onChange={
                (event) => setNum2(parseFloat(event.target.value))
            }
            />
            <button onClick={() => setResultado(num1 + num2)}>+</button>
            <button onClick={() => setResultado(num1 - num2)}>-</button>
            <button onClick={() => setResultado(num1 * num2)}>x</button>
            <button onClick={() => setResultado(num1 / num2)}>/</button>
            <p><strong>
                {resultado}
                </strong>
            </p>
        </>
    )
}
export default Calculadora