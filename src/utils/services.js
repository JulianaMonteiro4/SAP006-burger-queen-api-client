
import { isUserActive } from './auth'

export const getProducts = () => {
    console.log(isUserActive)
    const url = 'https://lab-api-bq.herokuapp.com/products'
    const response = fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${isUserActive}`,
        }
    })
    return response
}


export const registerOrder = /*async*/(name, table, itensOrder) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders';
    const response = /*await*/ fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${isUserActive}`,
        },
        body: JSON.stringify({
            client: name,
            table: table,
            products: itensOrder
        }),
    });
    return response;
};

export const getAllOrders = () => {
    console.log(isUserActive)
    const url = 'https://lab-api-bq.herokuapp.com/orders'
    const response = fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${isUserActive}`,
        }
    })
    return response
};


