import React, { useState } from "react";

import { Button } from '../../components/button/button'

import './product.css'

const Product = ({children}) => {

    return(
        <div>
            <article>
                <p>{children}</p>                
            </article>
        </div>
    )
}

export default Product;