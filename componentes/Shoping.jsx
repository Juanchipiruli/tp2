import { Itemlist } from "./Itemlist";

export function Shoping({ lista=[], sacar, cambio }) {
    return (
        <section className="list">
            <h2>Lista de Compra</h2>
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
                <p>No hy items por comprar</p>
            )}
        </section>
    );
}