import { Itemlist } from "./Itemlist";
import './estilos/shoping.css'
export function Listo({ lista= [], devolver, cambio}) {
    return (
        <section className="list">
            <h2>Items Comprados</h2>
            <div className="listaitems">
            {lista.length!== 0? (
                lista.map(item => (
                    <Itemlist
                        key={item.name}
                        name={item.name}
                        cant={item.cant}
                        func={devolver}
                        stado={false}
                        cambio={cambio}
                    />
                ))
            ): (
                <p>No hay items comprados</p>
            )}
            </div>
            
        </section>
    );
    /* Se mapea la lista y se muestra su contenido, sino  se muestra que no hay items */
}