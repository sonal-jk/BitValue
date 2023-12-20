//API-key:4b5831d4-1092-4e16-ad54-794a8981ffc6
import './App.scss';
import axios from 'axios';
import Bcoin from './Bcoin';
import { useEffect, useState } from 'react';
//import { keys } from '@material-ui/core/styles/createBreakpoints';

function App() {
  const [bit,changebit]=useState([])
  const [search,setSearch]=useState('')

  useEffect(()=>{
  axios.defaults.headers['Authorization']='Bearer 4b5831d4-1092-4e16-ad54-794a8981ffc6'
  axios.get("https://api.coincap.io/v2/assets")
  .then(a=>{
    changebit(a.data.data)
    console.log(a.data.data)}).catch(e=>{console.log(e)})},[])

  //const filter=bit.filter(c=>{return c.name.toLowerCase()})
  const change=(e)=>{
    setSearch(e.target.value)
  }
  const filtered = bit.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    /*<>{Object.keys(bit).forEach(function(key) {
      //console.log(Object.values(bit));
      console.log(bit[key].name) 
      return (
        <div>{bit[key]}</div>
      )
      
  })}

  </>
  /*<>{Object.keys(bit).map(keys=>{
    return (
      <div><h1>{keys.name}</h1></div>
    )
  })}</>*/

  <div className='App' >
    <strong id='title'>Bit Value</strong>
    <p className='p1'>A cryptocurrency app that provides all information about leading cryptocurrencies!</p>
    <div><p>Search what you are looking for...</p>
    <div><input type='text' placeholder='write here...' onChange={change} /><img src='#' alt='nope' /></div></div>
<div className='container'>
    <div className='table'>
      <div className='thead'><div className='tr'><strong>Rank</strong>
      <strong><p>Name</p></strong>
      <strong><p>Symbol</p></strong>
      <strong><p>Price(USD)</p></strong>
      <strong><p>Change(per 24hr)</p></strong>
      <strong><p>MarketCap(USD)</p></strong>
      <strong><p>Volume</p></strong></div></div>
      <div className='tbody'>
        {filtered.map((bit,id)=>{
          //console.log(bit.name)
          return (
           <Bcoin name={bit.name} rank={bit.rank} price={bit.priceUsd} symbol={bit.symbol} volume={bit.volumeUsd24Hr} change={bit.changePercent24Hr} cap={bit.marketCapUsd} />
      )  })}
   </div>
   </div></div>
  </div>




  );
}

export default App;
