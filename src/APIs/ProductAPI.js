const axios = require('axios');
const http = 'https://techshopmysql.herokuapp.com'

export const findAllProductAPI = async () => {
    let data = []
    await axios.get(`${http}/product`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const findByIdProductAPI = async (id) => {
    let data = []
    await axios.get(`${http}/product/${id}`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const findByCategoryAPI = async (category) => {
    let data = []
    await axios.get(`${http}/product/category/${category}`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const searchProductAPI = async (search) => {
    let data = []
    await axios.get(`${http}/product/search?s=${search}`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}

export const sortAPI = async (category,attr,asc) => {
    let data = []
    await axios.get(`${http}/product/sort?category=${category}&attr=${attr}&asc=${asc}`)
    .then(function (response) {
        data = response.data
    }).catch(function (error) {
        console.log(error)
    })
    return data
}