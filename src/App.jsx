import { use, useState } from 'react'
import './App.css'
import { Itemlist } from '../componentes/Itemlist';
import {ItemComprado} from '../componentes/ItemComprado'

function App() {
  const [list, setList] = useState([]);
  const [comprado, setState] = useState([])
  const [name, setName] = useState("");
  const [cant, setCant] = useState(0);

  const nuevoItem = (e) => {
    e.preventDefault();
    if(name.length){
    setList([{name, cant}, ...list]);
    setName("");
    }else{
      alert("Ingrese un nombre")
    }
  }

  const handleChangeInput = (e) => {
    setName(e.target.value);
  }
  const sacar =(name) => {
    const lista = list.filter(item =>{
      if(item.name!== name){
        return item
      }else{
        e.preventDefault();
        setState([{name, cant}, ...lista])
      }
    }
    )
    setList(lista)
  }


  return (
    <>
      <header>
        <h1>
          GroceryList
        </h1>
      </header>
      <section className='container'>
        <section className="formu">
          <form onSubmit={nuevoItem}>
            <input type="text" value={name} onChange={handleChangeInput}/>
            <input type='text' value={cant} onChange={handleChangeInput}/>
            <button className='submit'>+</button>
          </form>
          <section className="list">
            {list.map(item => (
              <Itemlist key={item.name} name={item.name} cant={item.cant} func={sacar}/>
            ))}
          </section>
          <section className="comprados">
            {
              comprado.map(item => (
                <ItemComprado key={item.name} name={item.name} />
              ))
            }
          </section>
        </section>
      </section>
    </>
  )
}

export default App
