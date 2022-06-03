//Formulario de Registro
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, ModalBody, ModalDialog, ModalHeader, ModalTitle} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-modal';
import "../index.css";

const FormRegister = (props) => {

  const [modalErrorIsOpen, setErrorIsOpen] = React.useState(false);
  const [modalSuccessIsOpen, setSuccessIsOpen] = React.useState(false);


  function openErrorModal() {
    setErrorIsOpen(true);
  }
  function openSuccessModal() {
    setSuccessIsOpen(true);
  }


  function closeModal() {
    setSuccessIsOpen(false);
    setErrorIsOpen(false);    
  }

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
    if(document.getElementById("selectType").value === "selected") {
      alert('Debe seleccionar tipo!');
      return false;
    }
    if(parseInt(props.countFinal) < parseInt(props.inputQuantity) && props.inputTypeMov==='gasto' && !props.edit){
      openErrorModal()
    }else{
      if(props.edit){        
        updateTodo(edit.id, props.inputName, props.inputQuantity, props.inputTypeMov)
        const v1 = parseInt(props.inputQuantity) 
        if(props.inputTypeMov==='ingreso'){
          props.setCountFinal(props.countFinal - parseInt(edit.quantity) +v1)    
        }else{  
          props.setCountFinal(props.countFinal + parseInt(edit.quantity) -v1)
        }
      }else{        
        const newTodo = {id:uuidv4(), typeMov:props.inputTypeMov, name: props.inputName, quantity: props.inputQuantity, completed: false};
        props.setTodos([...props.todos, newTodo]);
        props.setTodosOriginal([...props.todos, newTodo]);
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
      document.getElementById("selectType").selectedIndex = 0
      openSuccessModal()
    }
  }

  const handleDelete=(e)=>{
    e.preventDefault();
    props.setEdit(null)
    props.setInputName("");
    props.setInputQuantity("");
    document.getElementById("selectType").selectedIndex = 0
  }

  const updateTodo=(id, name, quantity, typeMov)=>{
    const v1 = parseInt(props.inputQuantity)
    if(typeMov==='ingreso'){
      props.setCountFinal(props.countFinal+v1)    
    }else{
      props.setCountFinal(props.countFinal-v1)
    }
    const newTodos = props.todos.map((todo) => todo.id === id ? {id, name, quantity, typeMov} : todo)
    props.setTodos(newTodos)
    props.setTodosOriginal(newTodos)
    props.setEdit(null)   
  }

  const {edit, setInputName, setInputQuantity, setInputTypeMov} = props;
  useEffect(() => {
    if(edit){
      setInputName(edit.name);
      setInputQuantity(edit.quantity);
      setInputTypeMov(edit.typeMov);
    }else{
      document.getElementById("selectType").selectedIndex = 0
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
              <select required className="select" name="select" id="selectType" onChange={handleInputChangeTypeMov}>
                <option disabled="disabled" value="selected">..::Seleccione::..</option>
                <option value="ingreso" id="ingreso">Ingreso</option>
                <option value="gasto" id="gasto">Gasto</option>
              </select>
            </div>
          </div>
          <div>
            <div className="divTableCell1">Nombre</div>
            <div className="divTableCell1"><input type="text" id="name" value={props.inputName} onChange={handleInputChangeName} required/></div>
          </div>
          <div>
            <div className="divTableCell1">Cantidad</div>
            <div className="divTableCell1"><input type="number" min="0" id="quantity" value={props.inputQuantity} onChange={handleInputChangeQuantity} required/></div>
          </div>
          <div>
            <div className="divTableCell1"> <button type="submit" className="buttonreg" onClick={handleDelete}>Cancelar</button></div>
            <div className="divTableCell1"><button type="submit" className="buttonreg" >{props.edit ? "Edit Movimiento": "Add Movimiento"}</button></div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalErrorIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error"
        ariaHideApp={false}
        className="custom-modal-style">
        <ModalDialog>
          <ModalHeader><h2>Error</h2></ModalHeader>
          <ModalBody>     
            <div class="col text-center">
              <label>
                <h4>No tiene saldo para realizar la accion.</h4>
              </label>
            </div>
            <div class="col text-center">
              <h1></h1><h1></h1>
              <button onClick={closeModal}>close</button>
            </div>        
          </ModalBody>
        </ModalDialog>
      </Modal>
      <Modal isOpen={modalSuccessIsOpen}
        onRequestClose={closeModal}
        contentLabel="Registro Exitoso"
        ariaHideApp={false}
        className="custom-modal-style">
        <ModalDialog>
          <ModalHeader><h2>Registro Exitoso</h2></ModalHeader>
          <ModalBody>     
            <div className="col text-center">
              <label>
                <h4>El {props.inputTypeMov} fue agregado exitosamente.</h4>
              </label>
            </div>
            <div className="col text-center">
              <h1></h1><h1></h1>
              <button onClick={closeModal}>close</button>
            </div>        
          </ModalBody>
        </ModalDialog>
      </Modal>
    </form>
  )
};

export default FormRegister;