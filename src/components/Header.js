//Encabezado
import { AiOutlineDollarCircle } from "react-icons/ai";

const Header = (props) => {
  return (
    <div>
      <div>
        <div className="divTableRow">
          <div><img src="./logo-poli.png" alt="Poli" className="img"/>
          </div>
            <div className="title"><h1>Manejo Cartera</h1></div>
              <div>
                <div className="header">
                  <div>Salario Inicial:</div>
			            <div><label className="label"><AiOutlineDollarCircle /> {props.countInitial} </label></div>
		            </div>
              </div>
              <div>
                <div className="header">
                  <div>Salario Final:</div>
			            <div><label className="label"><AiOutlineDollarCircle /> {props.countFinal} </label></div>
		            </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Header;