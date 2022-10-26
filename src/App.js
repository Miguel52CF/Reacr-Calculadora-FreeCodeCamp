import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import LogoFreeCodeCamp from './components/Logo';

function App() {

  const [input, setInput] = useState ('');

  const agregarInput = val => {
    
    // variables para saber si se repite un operador

    var valor = input+ val;
    let r1 = valor.indexOf("++") !== -1;
    let r2 = valor.indexOf("--") !== -1;
    let r3 = valor.indexOf("**") !== -1;
    let r4 = valor.indexOf("//") !== -1;
    let r5 = valor.indexOf("..") !== -1;
    let resultado = r1+r2+r3+r4+r5;

    // Formula para no repetir ningun operador

    switch (valor) {
      case "..":
      case "//":
      case "**":
      case "--":
      case "++":
        alert ("Por favor valores logicos para realizar calculos");
      break;
      default:
        if (resultado >0 ){
          alert ("Por favor valores logicos para realizar calculos");
        } else{
        setInput(input + val);
        }
      break;
    }
  };

  const calularResultado = () => {
    if (input){
      setInput(evaluate(input))
    } else{
      alert("por favor ingrese valores para realizar los calculos");
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <LogoFreeCodeCamp />
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
