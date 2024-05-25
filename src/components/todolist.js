import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { addtodo } from "../features/todo/todoSlice";

const Addtodo = () => {

    const [input,setinput] = useState('')
    const dispatch = useDispatch()

    const addtodohandler = (e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setinput('')
    }

    return ( 
        <form onSubmit={addtodohandler}>
            <div className="newbar">
                <input 
                placeholder="Add todo"
                value={input}
                onChange={(e)=>setinput(e.target.value)}
                type="text" />
                <button className="btnc" type="submit">Add todo</button>
            </div>
      </form>
     );
}
 
export default Addtodo;