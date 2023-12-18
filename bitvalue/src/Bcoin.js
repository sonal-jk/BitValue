import React from "react";
function Bcoin({img,name,price,volume,pricerange,marketcap}){
    return(
        <div><div><img src={img} alt="no"/>
        <h2>{name}</h2><p>{price}</p>
        {pricerange}{marketcap}</div></div>
    )
}
export default Bcoin;