import React from "react";
import { useState } from "react";

function Frase(){
    const [state, setState] = useState("Minha Frase");

    return(
        <>
            <input 
            value={state}
            onChange={
                (event) => setState(event.target.value)
            }
            />
            <p>
                <strong>Seu texto: </strong>
                {state}
            </p>
        </>
    )
}
export default Frase