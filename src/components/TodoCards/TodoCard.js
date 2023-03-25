import React from "react";
import classes from "./TodoCard.module.css";

const TodoCard = ({list,handleDelete})=>{
    return(
        <div className={classes.todoCard}>
            <p>{list.id}</p>
            <h5>{list.title}</h5>
            <button onClick={()=>handleDelete(list.id)}>Delete</button>
        </div>
    )
}
export default TodoCard