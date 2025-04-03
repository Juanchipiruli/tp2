import { useState } from 'react'

 export function Itemlist ({name}) {
    const [cant, setCant]= useState(0)
    function sum () {
        setCant(prepCant => prepCant + 1);
    }
    return (
        <>
        <p>
            {name}
        </p>
        <div>
            <button onClick={sum}></button>
            <p>
                {cant}
            </p>
        </div>
        </>
    )
}