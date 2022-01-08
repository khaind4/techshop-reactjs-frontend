export const loginAction = (data) => {
    return {
        type: 'customer/login',
        payload: data
    }
}

export const signoutAction = () => {
    return {
        type: 'customer/signout'
    }
}

export const updateCustomerAction = (data) => {
    return {
        type: 'customer/update',
        payload: data
    }
}

export const addToCartAction = (data) => {
    return {
        type: 'order/addToCart',
        payload: data
    }
}

export const deleteProductAction = (data) => {
    return {
        type: 'order/delete',
        payload: data
    }
}

export const successBuyAction = () => {
    return {
        type: 'order/successBuy'
    }
}