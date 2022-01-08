const axios = require('axios');
const http = 'https://techshopmysql.herokuapp.com'

export const saveOrderAPI = async (cid,order) => {
    let data = []
    await axios.post(`${http}/order1/`, {
        "customer": {
            "cid" : cid
        },
        "orderDetail": order
    }).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const findByIdCustomerOrderAPI = async (id) => {
    let data = []
    await axios.get(`${http}/order1/customer/${id}`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const findByIdOrderAPI = async (id) => {
    let data = []
    await axios.get(`${http}/order1/${id}`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}