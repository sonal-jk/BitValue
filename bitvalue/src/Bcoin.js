import React from "react";
import './App.scss'
function Bcoin({rank,name,symbol,price,change,volume,cap}){
    return (<tr><td>{rank}.</td>
    <td>{name}</td>
    <td>{symbol}</td>
    <td>${Number.parseFloat(price).toFixed(2)}</td>
    <td>{Number.parseFloat(change).toFixed(2)} % </td>
    <td>${Number.parseFloat(cap).toFixed(0)}</td>
    <td>{Number.parseFloat(volume).toFixed(0)}</td></tr>)

}
export default Bcoin;