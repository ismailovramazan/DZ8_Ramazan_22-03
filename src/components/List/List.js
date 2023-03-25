import React, {useState} from "react";
import TodoCard from "../TodoCards/TodoCard";


const List = ({ list,handleDelete })=>{
    return (
        <div>
            {list.map(list => <TodoCard
            handleDelete={handleDelete}
            key = {list.id}
            list={list}/>)}
        </div>
    )
}
export default List