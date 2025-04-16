import { use, useState } from 'react'
import './App.css'
import { Shoping } from '../componentes/Shoping';
import { Listo } from '../componentes/Listo';

function App() {
  const [list, setList] = useState([]);
  const [comprado, setState] = useState([])  
  const [name, setName] = useState("");
  const [cant, setCant] = useState("");

  const nuevoItem = (e) => /* Funcion que recolecta las variables name y cant y las envía a la lista "list"*/{
    e.preventDefault();
    if (!name.trim()) /*Trim es una funcion que detecta que no sea una cadena vacia ni sea una de caracteres vacios*/  {
      alert("Por favor ingrese un nombre");
      return;
    }
    if (!cant || parseInt(cant) <= 0) {
      alert("Por favor ingrese una cantidad válida mayor a 0");
      return;
    }
    
    setList([{name, cant: parseInt(cant), stado: true}, ...list]);
    setName("");
    setCant("");
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target; /* target se usa para obtener los valores que existen en los imput */
    if (name === "itemName") {
      setName(value);
    } else if (name === "itemCant") {
      setCant(value);
    }
    /*Se lee 'name', que seria el id de cada input y se guarda en su respectiva variable*/
  }
  const sacar = (name) => {
    const itemToMove = list.find(item => item.name === name);
    if (itemToMove!== null) {
      const newList = list.filter(item => item.name !== name);
      setList(newList);
      setState([{name: itemToMove.name}, ...comprado]);
    }
    /* Se busca el item que se desea sacar, se crea una lista donde se elimine,y se le agrega a la otra lista. */
  }
  const devolver = (name) => {
    const itemToMove = comprado.find(item => item.name === name);
    if (itemToMove!== null) {
      const newList = comprado.filter(item => item.name!== name);
      setState(newList);
      setList([{name: itemToMove.name, cant: 1},...list]);
    }
    /* Se hace lo inverso de la funcion sacar */
  }
  const cambio = (name, cant, supr,  stado) => {
    if (supr) {
      if (stado){
        const newList = list.filter(item => item.name!== name);
        setList(newList);
      }else{
        const newList2 = comprado.filter(item => item.name!== name);
        setState(newList2);
      }
      
      return;
    }else{
      const newList = list.map(item => 
        item.name === name ? {name: name, cant: parseInt(cant)} : item
      );
      setList(newList);
    }
    /* Si supr retorna verdadero se elimina, sino se edita el item*/
  }

  return (
    <>
      <header>
        <h1>
          Grocery List
        </h1>
      </header>
      <main>
      <section className='container'>
        <section className="formu">
          <form onSubmit={nuevoItem}>
            <input 
              type="text" 
              name="itemName"
              value={name} 
              onChange={handleChangeInput}
              placeholder="Nombre"
            />
            <input 
              type="number" 
              name="itemCant"
              value={cant} 
              onChange={handleChangeInput}
              placeholder="Cantidad"
            />
            <button className='submit'>+</button>
          </form>
        </section>
      </section>
      <section className="list">
            <Shoping key="ListaDeCompras" lista={list} sacar={sacar} cambio={cambio}/>
          </section>
          <section className="comprados">
              <Listo key="ListaYaComprado" lista={comprado} devolver={devolver} cambio={cambio}/>
          </section>
      </main>
      
    </>
  )
}

export default App
