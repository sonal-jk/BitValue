//API-key:4b5831d4-1092-4e16-ad54-794a8981ffc6
import './App.css';
import axios from 'axios';
import Bcoin from './Bcoin';
import { useEffect, useState } from 'react';

function App() {
  const [bit,changebit]=useState([])
  const [search,setSearch]=useState('')

  useEffect(()=>{
  axios.defaults.headers['Authorization']='Bearer 4b5831d4-1092-4e16-ad54-794a8981ffc6'
  axios.get("https://api.coincap.io/v2/assets")
  .then(a=>{
    changebit(a.data)
    console.log(a.data)}).catch(e=>{console.log(e)})},[])

  //const filter=bit.filter(c=>{return c.name.toLowerCase()})
 
  return (
    /*<>{Object.keys(bit).forEach(function(key) {
      console.log(Object.values(bit)); 
  })}</>*/
  <>{Object.keys(bit).map()}</>
  );
}

export default App;
