import { useState } from 'react'

 export function Itemlist ({name, cant, func}) {
    
    return (
        <>
        <p>
            item:{name} cantidad:{cant}
        </p>
        <div>
            <button onClick={()=>func(name)}></button>
        </div>
        </>
    )
}