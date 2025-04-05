import { Itemlist } from "./Itemlist";
export function Listo({ lista= [], devolver }) {
    return (
        <section className="comprados">
            <h2>Items Comprados</h2>
            {lista.length!== 0? (
                lista.map(item => (
                    <Itemlist
                        key={item.name}
                        name={item.name}
                        cant={item.cant}
                        func={devolver}
                        stado={false}
                    />
                ))
            ): (
                <p>No hay items comprados</p>
            )}
        </section>
    );
}