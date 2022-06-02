//Listar los movimientos
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListMovItem = (props) => {

  const handlerDelete=()=>{
    props.deleteTodo(props.todo)
    props.setCount(props.count-1)
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
            {props.todo.quantity}
        </div>
        <div>
            <button className='button-edit' onClick={handlerEdit}><FaEdit /></button>
            <button className='button-delete' onClick={handlerDelete}><FaTrash /></button>
        </div>
    </li>
  )
}

export default ListMovItem