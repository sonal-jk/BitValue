import React from "react";
import './App.scss'

//var a=document.getElementById("Change")
function Bcoin({rank,name,symbol,price,change,volume,cap}){
    const style1={color:'red'}
    const style2={color:'green'}
    //(a.<0) ? (a.style.color='red') :(a.style.color='green');
    return (<div className="tr"><p>{rank}.</p>
    <p>{name}</p>
    <p>{symbol}</p>
    <p>${Number.parseFloat(price).toFixed(2)}</p>
    {Number.parseFloat(change) <0 ?(<p id="Change" style={style1} >{Number.parseFloat(change).toFixed(2)} % </p>):(<p id="Change" style={style2} >{Number.parseFloat(change).toFixed(2)} % </p>)}
    <p>${Number.parseFloat(cap).toFixed(0)}</p>
    <p>{Number.parseFloat(volume).toFixed(0)}</p></div>)

}
export default Bcoin;