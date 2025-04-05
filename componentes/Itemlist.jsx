import { useState } from 'react'

export function Itemlist ({name, cant, func, stado, cambio}) {
    const [editing, setEditing] = useState(false);
    const [newCant, setNewCant] = useState(cant);

    const editar = () => {
        setEditing(!editing);
    }

    const handleCantChange = (e) => {
        setNewCant(e.target.value);
    }

    const saveChanges = () => {
        if (!newCant || parseInt(newCant) <= 0) {
            alert("Por favor ingrese una cantidad válida mayor a 0");
            return;
          }
        cambio(name, parseInt(newCant), false);
        setNewCant("");
        setEditing(false);
    }
    const supr = () => {
        cambio(name, cant, true);
    }

    return (
        <>
            {stado ? (
                <div className='item'>
                    <p>
                        {name} 
                    </p>
                    <p>
                        {cant}
                    </p>
                    <div>
                        <button onClick={() => func(name)}>Comprado</button>
                    </div>
                    <div>
                        {editing ? (
                            <>
                                <input 
                                    type="number"
                                    value={newCant}
                                    onChange={handleCantChange}
                                    min="1"
                                />
                                <button onClick={saveChanges}>Guardar</button>
                                <button onClick={supr}>Borrar</button>
                            </>
                        ) : (
                            <button onClick={editar}>Editar</button>
                        )}
                    </div>
                </div>
            ) : (
                <div className='compradito'>
                    <p>
                        item:{name}
                    </p>
                    <div>
                        <button onClick={() => func(name)}>Devolver</button>
                    </div>
                </div>
            )}
        </>
    )
}