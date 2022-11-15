import React from "react";
import { CountCartContext } from "..";

export default function Cart () {
    
    return (
        <CountCartContext.Consumer>
           {count => <h1> Корзина {count}</h1>}
        </CountCartContext.Consumer>
    
    )
}
