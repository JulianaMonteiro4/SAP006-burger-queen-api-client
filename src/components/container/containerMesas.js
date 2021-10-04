import React, {useState} from "react";

import './container.css';

import mesa from '../../img/table.png'
// import mesaRed from '../../img/table-red.png'
// import mesaYellow from '../../img/table-yellow.png'
// import mesaGreen from '../../img/table-green.png'


const ContainerMesas = () => {

  // const [table, setTable] = useState([mesa])
  // function tableStatus() {
  //   setTable(mesaGreen)
  // }

  return (
    <section className="container-mesas">
      <div className="mesas" id="mesas">
        <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
         <img className="mesa1"
         src={mesa} onClick={null} alt="mesa" />
      </div>
    </section>
  )
}

export default ContainerMesas;
