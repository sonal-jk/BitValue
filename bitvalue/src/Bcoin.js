import React from "react";
function Bcoin({rank,name,symbol,price,change,volume}){
    return (<div><div>{rank}</div>
    <div><h1>{name}</h1></div>
    <div>{symbol}</div>
    <div>{price}</div>
    <div>{change}</div><div>{volume}</div></div>)

}
export default Bcoin;