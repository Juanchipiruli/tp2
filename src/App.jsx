import { useState } from 'react'
import './App.css'
import { Itemlist } from '../componentes/Itemlist';

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState("");

  const nuevoItem = (e) => {
    e.preventDefault();
    if(inputValue.length){
    setList([inputValue, ...list]);
    setInputValue("");
    }else{
      alert("Ingrese un nombre")
    }
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }

  console.log(list[0]);

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
            <input type="text" value={inputValue} onChange={handleChangeInput}/>
            <button className='submit'>+</button>
          </form>
          <section className="list">
            {list.map(item => (
              <Itemlist key={item} name={item}/>
            ))}
          </section>
        </section>
      </section>
    </>
  )
}

export default App
