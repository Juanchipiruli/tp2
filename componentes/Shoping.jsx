import { Itemlist } from "./Itemlist";
import './estilos/shoping.css';

export function Shoping({ lista=[], sacar, cambio }) {
    return (
        <section className="list">
            <h2>Lista de Compra</h2>
            <div className="listaitems">
            {lista.length !== 0 ? (
                lista.map(item => (
                    <Itemlist
                        key={item.name}
                        name={item.name}
                        cant={item.cant}
                        func={sacar}
                        stado={true}
                        cambio={cambio}
                    />
                ))
            ) : (
                <p>No hay items por comprar</p>
            )}
            </div>
        </section>
    );
    /* Se mapea la lista y se muestra su contenido, sino  se muestra que no hay items */
}