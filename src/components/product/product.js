import React from "react";

import './product.css'

const Product = ({ key, image, name, flavor, complement, price, onClick }) => {

    return (
        <article className='item-products' key={key}>
            <p className='name-products'>{name}</p>
            <img src={image} className='img-products' alt=""></img>
            <div className='info-products'>
                <p className='flavor-products'>{flavor}</p>
                <p className='complement-products'>{complement}</p>
                <div className='info-price-products'>                    
                    <p className='price-products'>R${price},00</p>
                    <i className="far fa-plus-square" onClick={onClick}></i>
                </div>                
            </div>
        </article>
    )
}

export default Product;



