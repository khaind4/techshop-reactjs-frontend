const axios = require('axios');
const http = 'https://techshopmysql.herokuapp.com'

export const saveCustomerAPI = async (customer) => {
    let data = []
    await axios.post(`${http}/customer/`, {
        "email": customer.email,
        "password": customer.password,
        "name": customer.name,
        "address": customer.address,
        "phoneNumber": customer.phoneNumber
    }).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const loginAPI = async (email,password) => {
    let data = []
    await axios.post(`${http}/customer/login`, {
            "email": email,
            "password": password
    }).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const updateCustomerAPI = async (customer) => {
    let data = []
    await axios.put(`${http}/customer/${customer.cid}`, {
        "name": customer.name,
        "phoneNumber": customer.phoneNumber,
        "address": customer.address
    }).then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}