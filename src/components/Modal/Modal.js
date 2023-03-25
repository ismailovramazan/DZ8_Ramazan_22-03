import React, {useState} from "react";
import classes from './Modal.module.css'
import Button from "../Button/Button";
const Modal = ({handleShow,handleAdd})=>{

    return(
        <React.Fragment>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent} >
            <Button handleClick={handleShow}>Закрыть модалку</Button>
            {/*<Input*/}
            {/*name = {'add'}*/}
            {/*onChangeFunc = {handleChangeCheck}*/}
            {/*/>*/}
            <Button
                handleClick={handleAdd}
            >Добавить таск
            </Button>
            </div>

        </React.Fragment>
    )
};
export default Modal
//
//С этим же методом можете реализовать фильтрацию при поиске ).
// Поставьте наш переиспользуемый Input на главной странице.
// Нужно отфильтровать все таски которые совпадают с значением поиска,
// все элементы которые фильтруются нужно передавать в state «tasks» ниже прикреплю пример как работать с search.