import { useState, useEffect } from 'react'; 

//Se suma un nuevo Hook: useEffect. 

//El efecto primario de React es renderizar componentes manipulando el DOM. 

//Peeeero, una aplicacion web tien que hacer mucho más que solo mostrarse, tiene que realizar operaciones matemáticas, consumir datos de servidores, apis, base de datos, usar eventos, etc. 

//Para poder manipular todos esos efectos secundarios de los cambios de estado es que usamos el nuevo Hook useEffect. 

const Contador = () => {
    const [contador, setContador] = useState(1);

    useEffect(() => {
        //El primer parametro que le voy a pasar es una función Callback con todo el comportamiento que queremos que realice. 
        document.title = `Contador: ${contador}`; 
    }, [contador]) 
    //El segundo parametro que voy a pasar es un array de dependencias. 
    // Aca coloco el estado que voy a estar vigilando, para que cuando este cambie ejecuto nuevamente la función que pase como primer argumento. (Es decir, actualizo el titulo de la pestaña)

  return (
    <div>
        <button onClick={ () => setContador(contador - 1 ) }> - </button>
        <p> {contador} </p>
        <button onClick={ () => setContador(contador + 1) }> + </button>
    </div>
  )
}

export default Contador