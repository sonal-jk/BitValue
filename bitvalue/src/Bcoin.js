import React from "react";
import './App.scss'
function Bcoin({rank,name,symbol,price,change,volume,cap}){
    return (<div className="tr"><p>{rank}.</p>
    <p>{name}</p>
    <p>{symbol}</p>
    <p>${Number.parseFloat(price).toFixed(2)}</p>
    <p>{Number.parseFloat(change).toFixed(2)} % </p>
    <p>${Number.parseFloat(cap).toFixed(0)}</p>
    <p>{Number.parseFloat(volume).toFixed(0)}</p></div>)

}
export default Bcoin;