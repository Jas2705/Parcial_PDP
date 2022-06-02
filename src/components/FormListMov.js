//Busqueda Movimientos

import React from 'react';
import ListMovItem from './ListMovItem';

const FormListMov = (props) => {

  const deleteTodo=(todo)=>{
    const newTodos = props.todos.filter((item)=>item.id !== todo.id)
    props.setTodos(newTodos)
    props.setCount(props.count-1)
  }

  return (
      
    <form>
      <div className='register'>
        <div>
          <div>
              <div>
                <div className="divTableRow">
                <div className="divTableCell">Listado Movimientos</div>
                <div className="divTableCellCount">{props.count}</div>
              </div>
            </div>
          </div>
          <div className="divTableRow1">
            <div className='search'>
              <input className="mainLoginInput" type="search" placeholder="&#61442;" />
            </div>
            <div className='search'><input type="radio" name="todos" value="todos" required /> Todos</div>
            <div className='search'><input type="radio" name="todos" value="ingreso" required /> Ingreso</div>
            <div className='search'><input type="radio" name="todos" value="gasto" required /> Gasto</div>
          </div>
        </div>
        <div>
        {props.todos.map((todo)=>(
            <ListMovItem key={todo.id} todo={todo}
            deleteTodo={deleteTodo}
            setEdit={props.setEdit}/>
        ))}
        </div>
      </div>
    </form>
  )
}

export default FormListMov