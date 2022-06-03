//Listar los movimientos
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListMovItem = (props) => {
  const handlerDelete=()=>{
    props.deleteTodo(props.todo)
    if(props.todo.typeMov === "ingreso"){
      props.setCountFinal(parseInt(props.countFinal) - parseInt(props.todo.quantity))
    }else{
      props.setCountFinal(parseInt(props.countFinal) + parseInt(props.todo.quantity))
    }
  }

  const handlerEdit =() => {
    props.setEdit(props.todo)
  }

  return (
    <li className='list'>
        <div className='list-item'>
            {props.todo.name}
        </div>
        <div className={`list-item ${props.todo.typeMov === 'gasto' ? "completeGasto" : "completeIngreso"}`}>
            {parseFloat(props.todo.quantity, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
        </div>
        <div className='list-item' hidden>
            {props.todo.typeMov}
        </div>
        <div>
            <button className='button-edit' onClick={handlerEdit}><FaEdit /></button>
            <button className='button-delete' onClick={handlerDelete}><FaTrash /></button>
        </div>
    </li>
  )
}

export default ListMovItem