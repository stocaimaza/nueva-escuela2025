// Para capturar un datito que viene de la URL podemos usar un Hook llamado useParams: 

//Por ejemplo: https://www.cellshop.com/sillas/10
//Acá yo me puedo guardar ese 10 que representa el id de un producto y mostrar sus detalles. 

import { useParams } from "react-router-dom"; 

const Sillas = () => {
  // Me voy a guardar el id del producto:
    let {id} = useParams(); 
    console.log(id); 

  return (
    <div>
      <h2>Sillas</h2>
      <h3>ID de Producto: {id} </h3>

    </div>
  )
}

export default Sillas