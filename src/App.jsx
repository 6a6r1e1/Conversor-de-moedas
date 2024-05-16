import React, { useState } from 'react';
import ConversorDeMoedas from './components/ConversorDeMoedas';
import './App.css';

function App() { 
  const [quantia, setQuantia] = useState (0);
  const [deMoeda, setDeMoeda] = useState ("BRL");
  const [paraMoeda, setParaMoeda] = useState ("USD");

  const [resultado, setResultado] = useState(0);
  
  function converterMoeda(){
    
    if (quantia <= 0 || deMoeda === paraMoeda) return setResultado(quantia);
    
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${quantia}&from=${deMoeda}&to=${paraMoeda}`)
    .then((resp) => resp.json())
    .then((data) => setResultado(data.rates[paraMoeda]));
    }
  
  return( 
  <div className='container'>
    <div>
      <label>Quantia:</label>
      <input type="number" value={quantia} onChange={(e)=> setQuantia(e.target.value)} />
    </div>
    <select value={deMoeda} onChange={e=>setDeMoeda(e.target.value)}>

      <option value='USD'>DOLAR</option>
      <option value='BRL'>REAL</option>
      <option value='EUR'>EURO</option>
    </select>
    <select value={paraMoeda} onChange={(e)=>setParaMoeda(e.target.value)}>

    <option value='USD'>DOLAR</option>
    <option value='BRL'>REAL</option>
    <option value='EUR'>EURO</option>
   </select>

   <button onClick={()=> converterMoeda()}>Converter</button>
   <div className="resultado">{resultado ? resultado : ""}</div>
 </div> 
 );
} 

export default App; 