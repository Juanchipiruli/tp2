import { useState } from 'react'
import './estilos/items.css';

export function Itemlist ({name, cant, func, stado, cambio}) {
    const [editing, setEditing] = useState(false);
    const [newCant, setNewCant] = useState(cant);

    const editar = () => {
        setEditing(!editing);
    }/* Funciona como una funcion que invierte el valor de una flag que activa o desactiva el modo de edicion*/

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
    /* Se actualizan los datos del objeto, se manda al app.jsx los nuevos datos y si se desea eliminar o no (con el supr) */
    const supr = () => {
        cambio(name, cant, true);
    }

    return (
        <div className='ContItem'>
            {stado ? (
                <div className='item'>
                    <div className="info">
                        <h3>
                            {name} 
                        </h3>
                        <h3>
                            {cant}
                        </h3>
                    </div>
                    <div className='botones'>
                        <button className='tildar' onClick={() => func(name)}>
                            <img src="../fotos/download.png" alt="delete" />
                        </button>
                        {editing ? (
                            <>
                                <input 
                                    type="number"
                                    value={newCant}
                                    onChange={handleCantChange}
                                    min="1"
                                />
                                <button className='guardar' onClick={saveChanges}>
                                    <img src="../fotos/palomita.png"/>
                                </button>
                                <button className='borrar' onClick={supr}>
                                    <img src="../fotos/trash.png"/>
                                </button>
                            </>
                        ) : (
                            <button className='editar' onClick={editar}>
                                <img src="../fotos/edit.png"/>
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className='item'>
                    <div className="info">
                        <h3>
                            {name}
                        </h3>
                    </div>
                    
                    <div className='botones'>
                        <button className='devolver' onClick={() => func(name)}>
                            <img src="../fotos/up.png"/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}