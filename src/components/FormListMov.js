//Busqueda Movimientos

import React, {useState} from 'react';
import ListMovItem from './ListMovItem';

const FormListMov = (props) => {
  const deleteTodo=(todo)=>{
    const newTodos = props.todos.filter((item)=>item.id !== todo.id)
    props.setTodos(newTodos)
    props.setTodosOriginal(newTodos)
    props.setCount(props.count-1)
  }

  const filterBuscar = ()=>{
    const buscar = document.getElementById("textoBuscar").children[0].value
    if(buscar === ""){
      props.setTodos(props.todosOriginal)
    }else{
      if(props.todosOriginal.length > 0){
        const newTodos = props.todosOriginal.filter((item)=>item.name.includes(buscar))
        props.setTodos(newTodos)
        document.getElementById("gastos").children[0].checked = false
        document.getElementById("ingresos").children[0].checked = false
        document.getElementById("todos").children[0].checked = false
      }
    }    
  }

  const filterTodos = ()=>{
    if(props.todos.length > 0){
      props.setTodos(props.todosOriginal)
      document.getElementById("todos").children[0].checked = true
      document.getElementById("ingresos").children[0].checked = false
      document.getElementById("gastos").children[0].checked = false
    }
  }

  const filterIngresos = ()=>{
    if(props.todosOriginal.length > 0){
      const newTodos = props.todosOriginal.filter((item)=>item.typeMov === "ingreso")
      props.setTodos(newTodos)
      document.getElementById("gastos").children[0].checked = false
      document.getElementById("todos").children[0].checked = false
    }
  }

  const filterGastos = ()=>{
    if(props.todosOriginal.length > 0){      
      const newTodos = props.todosOriginal.filter((item)=>item.typeMov === "gasto")
      props.setTodos(newTodos)
      document.getElementById("ingresos").children[0].checked = false
      document.getElementById("todos").children[0].checked = false
    }
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
            <div className='search' id="textoBuscar">
              <input className="mainLoginInput" type="search" placeholder="&#61442;" onChange={filterBuscar} />
            </div>
            <div className='search' id="todos"><input required type="radio" name="todos" value="todos" onChange={filterTodos}/> Todos</div>
            <div className='search' id="ingresos"><input required type="radio" name="ingreso" value="ingreso" onChange={filterIngresos} /> Ingreso</div>
            <div className='search' id="gastos"><input required type="radio" name="gasto" value="gasto" onChange={filterGastos} /> Gasto</div>
          </div>
        </div>
        <div>
        {props.todos.map((todo)=>(
            <ListMovItem key={todo.id} todo={todo}
            deleteTodo={deleteTodo}
            setEdit={props.setEdit}
            setCountFinal={props.setCountFinal}
            setCount={props.setCount}
            countFinal={props.countFinal}/>
        ))}
        </div>
      </div>
    </form>
  )
}

export default FormListMov