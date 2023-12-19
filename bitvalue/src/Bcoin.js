import React from "react";
import './App.scss'
function Bcoin({rank,name,symbol,price,change,volume}){
    return (<tr><td>{rank}</td>
    <td>{name}</td>
    <td>{symbol}</td>
    <td>{price}</td>
    <td>{change}</td>
    <td>{volume}</td></tr>)

}
export default Bcoin;