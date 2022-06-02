import Header from "./components/Header";
import FormRegister from "./components/FormRegister";
import FormListMov from "./components/FormListMov";
import { useState } from "react";
import './App.css';

function App() {

  const [inputTypeMov, setInputTypeMov] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [count, setCount] = useState(0);
  const [countFinal, setCountFinal] = useState(100000)
  const [countInitial, setCountInitial] = useState(100000)

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header 
          countFinal = {countFinal}
          countInitial = {countInitial}
          />
        </div>
        <div>
          <div >
            <div className="divTableCell"><FormRegister 
              inputTypeMov={inputTypeMov} setInputTypeMov={setInputTypeMov}
              inputName={inputName} setInputName ={setInputName }
              inputQuantity={inputQuantity} setInputQuantity={setInputQuantity}
              todos={todos} setTodos={setTodos}
              edit={edit}
              setEdit={setEdit}
              count={count}
              setCount={setCount}
              countFinal = {countFinal}
              setCountFinal = {setCountFinal}
              countInitial = {countInitial}
            /></div>
            <div className="divTableCell"><FormListMov 
              todos={todos} 
              setTodos={setTodos}
              setEdit={setEdit}
              count={count}
              setCount={setCount}
            /></div>
          </div>
        </div>
      </div> 
    </div>     
  );
};

export default App;