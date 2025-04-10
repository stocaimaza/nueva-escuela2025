import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
        <h2> Recurso no encontrado </h2>

        <p> Te invito a que sigas navegando en nuestra Web </p>
        <Link to="/" > Home </Link>
    </div>
  )
}

export default Error