import React from 'react';
import '../app/App.css'

const ItemListContainer = ({ Productos }) => {
    return (
        <div className="ListaProductos">
            <p>¡Bienvenido! Mira nuestra lista de productos: {Productos}</p>
        </div>
    )
}

export default ItemListContainer;