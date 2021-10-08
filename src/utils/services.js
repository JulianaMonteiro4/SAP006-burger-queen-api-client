
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


export const registerOrder = (name, table, itensOrder) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders';
    const response = fetch(url, {
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

export const updateOrderStatus = (orderId, orderStatus) => {
    const url = `https://lab-api-bq.herokuapp.com/orders/${orderId}`;
    const response = fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${isUserActive}`,
        },
        body: JSON.stringify({
            status: orderStatus
        }),
    });
    return response;
};
