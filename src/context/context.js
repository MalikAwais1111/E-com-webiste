import React, { createContext, useState } from "react";

const Cartcontext = createContext();

const CartProvider = ({ children }) => {
    // var c = 1;
    const [data, setdata] = useState([]);
    const [numb, setnumb] = useState(0);
    const [itmsrch,setitmsrch] = useState([]);
    return (
        <Cartcontext.Provider value={{ data,setdata,numb,setnumb,itmsrch,setitmsrch}}>
            {children}
        </Cartcontext.Provider>
    );
}
export { Cartcontext, CartProvider };
