import React,{useState} from 'react';
import './App.css';
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import Input from "./components/Inpit/Input";
function App() {
    const [show,setShow] = useState(false);
    const [newList, setNewList] = useState('');
    const [list,setLists] = useState([
        {
        id:1,
        title:"Coding",
        completed:false
        },
        {
        id:2,
        title:"Eat",
        completed:false
        },
        {
        id:3,
        title:"Sleep",
        completed:false
        },
        {
        id:4,
        title:"Coding",
        completed:false
        }
    ])

  // const changeNewList = (e) => {
  //   setNewList(e.target.value);
  // }

    const handleShow = ()=> setShow(!show)
    const handleChangeCheck = (event)=>{
        setNewList(event.target.value)
    }
    const handleAddTask = ()=>{ {
            setLists((prevState) => [...prevState, {
                id: list.length + 1,
                title: newList,
                completed: false
            }
            ])
        }
    }
const handleDelete = (id)=>{
    setLists(
      list.filter(item => {
        return item.id !== id
      })
    );
  }

    return (
        <div className="App">
            {show && <Modal
                handleChangeCheck={handleChangeCheck}
                handleAdd = {handleAddTask}
                handleShow = {handleShow}/>
            }
            <Input
            name = {'add'}
            onChangeFunc = {handleChangeCheck}
            />
            <Button
                handleClick={handleAddTask}
            >Добавить таск
            </Button>
            <List
                handleDelete = {handleDelete}
                list={list}
            />


        </div>
    );
}

export default App;
//С этим же методом можете реализовать фильтрацию при поиске ).
// Поставьте наш переиспользуемый Input на главной странице.
// Нужно отфильтровать все таски которые совпадают с значением поиска,
// все элементы которые фильтруются нужно передавать в state «tasks» ниже прикреплю пример как работать с search.
