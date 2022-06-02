//Formulario de Registro
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormRegister = (props) => {

  const handleInputChangeName = (e) => {
    props.setInputName(e.target.value);
  }

  const handleInputChangeQuantity = (e) => {
    props.setInputQuantity(e.target.value);
  }

  const handleInputChangeTypeMov = (e) => {
    props.setInputTypeMov(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(props.edit){
      updateTodo(edit.id, props.inputName, props.inputQuantity)
    }else{
    const newTodo = {id:uuidv4(), typeMov:props.inputTypeMov, name: props.inputName, quantity: props.inputQuantity, completed: false};
    props.setTodos([...props.todos, newTodo]);
    props.setInputName("");
    props.setInputQuantity("");
    props.setCount(props.count+1)

    const v1 = parseInt(props.inputQuantity)

      if(props.inputTypeMov==='ingreso'){
        props.setCountFinal(props.countFinal+v1)    
      }else{

        props.setCountFinal(props.countFinal-v1)
      }
    }
  }

  const handleDelete=(e)=>{
    e.preventDefault();
    props.setInputName("");
    props.setInputQuantity("");
  }

  const updateTodo=(id, name, quantity)=>{
    const newTodos = props.todos.map((todo) => todo.id === id ? {id, name, quantity} : todo)
    props.setTodos(newTodos)
    props.setEdit(null)   
  }

  const {edit, setInputName, setInputQuantity, setInputTypeMov} = props;
  useEffect(() => {
    if(edit){
      setInputName(edit.name);
      setInputQuantity(edit.quantity);
      setInputTypeMov(edit.typeMov);
    }else{
      setInputName("");
      setInputQuantity("");
      setInputTypeMov("");
    }
  }, [edit, setInputName, setInputQuantity, setInputTypeMov])

  return (
    <form onSubmit={handleSubmit}>
      <div className='register'>
        <div>
          <div>
          <div className="divTableRow">{props.edit ? "Editar Movimiento": "Registrar Movimiento"}</div>
          </div>
          <div>
            <div className="divTableCell1"><label>Tipo Movimiento</label></div>
            <div className="divTableCell1">      
                  <select required className="select" name="select" id="select" onChange={handleInputChangeTypeMov}>
                    <option disabled="disabled" selected="selected">..::Seleccione::..</option>
                    <option value="ingreso" id="ingreso">Ingreso</option>
                    <option value="gasto" id="gasto">Gasto</option>
                  </select></div>
          </div>
          <div>
            <div className="divTableCell1">Nombre</div>
            <div className="divTableCell1"><input type="text" id="name" value={props.inputName} onChange={handleInputChangeName} required/></div>
          </div>
          <div>
            <div className="divTableCell1">Cantidad</div>
            <div className="divTableCell1"><input type="text" id="quantity" value={props.inputQuantity} onChange={handleInputChangeQuantity} pattern="^[1-9]\d*$" required/></div>
          </div>
          <div>
            <div className="divTableCell1"> <button type="submit" className="buttonreg" onClick={handleDelete}>Cancelar</button></div>
            <div className="divTableCell1"><button type="submit" className="buttonreg" >{props.edit ? "Edit Movimiento": "Add Movimiento"}</button></div>
          </div>
        </div>
      </div>
    </form>
  )
};

export default FormRegister;