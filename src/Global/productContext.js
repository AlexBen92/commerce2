import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import iphone from "../assets/iphone.jpg";
import ecouteurs from "../assets/headphones.jpg"
import microphone from "../assets/microphone.jpg"
import bagues from "../assets/rings.jpg"
import chaussaures from "../assets/shoes.jpg"
import montre from "../assets/watch.jpg"
import parfum from "../assets/perfume.jpg"
import camera from "../assets/dslr.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'Camera', price: 40, image: camera, productStatus: 'hot'},
        {id: 2, name: 'Parfum', price: 200, image: parfum,productStatus: 'new'},
        {id: 3, name: 'Montre', price: 300, image: montre,productStatus: 'new'},
        {id: 4, name: 'Chaussaures', price: 150, image: chaussaures,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'Ecouteurs', price: 500, image: ecouteurs,productStatus: 'new'},
        {id: 7, name: 'Iphone', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Bagues', price: 120, image: bagues,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;