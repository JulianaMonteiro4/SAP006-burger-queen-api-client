
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