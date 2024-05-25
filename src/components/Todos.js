import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { removetodo } from "../features/todo/todoSlice";

const Todos = () => {
     const todos = useSelector(state => state.todos)
     const dispatch = useDispatch()
     
    return ( 
        <>
            <div>
                {todos.map((todo) => (
                    <ul class="">
                        <li key={todo.id} class="list1">
                        <div >
                            <div>{todo.text} <button onClick={()=>dispatch(removetodo(todo.id))} class="dlt">
                                Delete
                            </button></div>
                        </div>
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}

export default Todos;
