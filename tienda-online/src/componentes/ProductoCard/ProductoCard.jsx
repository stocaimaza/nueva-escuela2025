import React from 'react'
import ProductoInfo from '../ProductoInfo/ProductoInfo'
import ProductoImagen from '../ProductoImagen/ProductoImagen'
import ProductoBoton from '../ProductoBoton/ProductoBoton'
import './ProductoCard.css'; 

const ProductoCard = () => {
  return (
    <div className='card'>
        <ProductoImagen/>
        <ProductoInfo />
        <ProductoBoton />
    </div>
  )
}

export default ProductoCard