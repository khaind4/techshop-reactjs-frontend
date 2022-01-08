const initialState = {
    isLogined: false,
    products: [],
    customer: {},
    isUpdated: 0,
    cartCount: 0,
    cart: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'customer/login': 
            return {
                ...state,
                isLogined: true,
                customer: action.payload
            }
        case 'customer/signout': 
            return {
                ...state,
                isLogined: false,
                customer: {},
                cart: [],
                cartCount: 0
            }
        case 'customer/update': 
            return {
                ...state,
                isUpdated: state.isUpdated + 1,
                customer: action.payload
            }
        case 'order/addToCart':
            // Checking add same product to cart
            const product = action.payload
            let cartCopy = state.cart
            let isAdded = false
            
            if(cartCopy.length > 0) {
                cartCopy.forEach(item => {
                    if(item.pid===product.pid) {
                        item.quantity += product.quantity
                        isAdded = true
                    }
                })}
                
            if (isAdded===false) cartCopy.push(product)

            return {
                ...state,
                cart: cartCopy,
                cartCount: cartCopy.length
            }
        case 'order/delete': 
            return {
                ...state,
                cart: action.payload,
                cartCount: action.payload.length
            }
        case 'order/successBuy': 
            return {
                ...state,
                cart: [],
                cartCount: 0
            }
        default:
            return state;
    }
}

export default rootReducer