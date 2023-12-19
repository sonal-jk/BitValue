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

  <div>
    <h1>Bit Value</h1>
    <p>A cryptocurrency app that provides all information about leading cryptocurrencies!</p>
    <div><p>Search what you are looking for</p>
    <div><input type='text' placeholder='write here...' onChange={change} /><img src='#' alt='nope' /></div></div>

    <table>
      <thead><tr><th>Rank</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Price</th>
      <th>Change(per 24hr)</th>
      <th>Volume</th></tr></thead>
      <tbody>
        {filtered.map((bit,id)=>{
          //console.log(bit.name)
          return (
           <Bcoin name={bit.name} rank={bit.rank} price={bit.priceUsd} symbol={bit.symbol} volume={bit.volumeUsd24Hr} change={bit.changePercent24Hr} />
      )  })}
   </tbody>
    </table>
  </div>




  );
}

export default App;
