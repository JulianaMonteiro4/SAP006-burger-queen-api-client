import { isUserActive, roleUser } from './auth'


export const getProducts = async (isUserActive) => {
    console.log(isUserActive)
    const url = 'https://lab-api-bq.herokuapp.com/products'
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `${isUserActive}`,
        }
    })
    return response
}


export const registerOrder = async (name, table, itensOrder) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders';
    const response = await fetch(url, {
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

export const updateOrderStatus = async (orderId, orderStatus) => {
    const url = `https://lab-api-bq.herokuapp.com/orders/${orderId}`;
    const response = await fetch(url, {
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

export const getRoleUser = (role) => {
    let userRole = false
    console.log(role)

    if (roleUser === role || roleUser === 'gerente') {
         userRole = true
    }
    console.log(userRole)
    console.log(roleUser)

    return userRole
};