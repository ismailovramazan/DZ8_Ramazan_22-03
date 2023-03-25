import React from "react";
 const Input = ({name,onChangeFunc})=>{
     return(
         <input
         // type={"search"}
         name={name}
         onChange={onChangeFunc}
         />
     )
 }
 export default Input