import React, {useEffect, useState} from 'react'
import '../../css/home.css'
import Home1 from './home1/Home1'
import Home2 from './home2/Home2'
import {findAllProductAPI} from '../../APIs/ProductAPI'

const Home = () => {
    const [phone, setPhone] = useState([])
    const [laptop, setLaptop] = useState([])
    const [headphone, setHeadphone] = useState([])
    const [mouse, setMouse] = useState([])
    const [speaker, setSpeaker] = useState([])

    // Loading products when homepage is started
    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchData = async () => {
            const products = await findAllProductAPI()
            const loadProducts = (category) => {
                const data = []
                products.forEach(item => {
                    if(item.category===category && data.length<5) data.push(item)
                })
                return data
            }

            setPhone(loadProducts('phone'))
            setLaptop(loadProducts('laptop'))
            setHeadphone(loadProducts('headphone'))
            setMouse(loadProducts('mouse'))
            setSpeaker(loadProducts('speaker'))
        }
        fetchData()
    }, [])
    
    return (
        <div className='home'>
            <Home1 />
            <Home2 category={phone} title='ĐIỆN THOẠI' />
            <Home2 category={laptop} title='LAPTOP' />
            <Home2 category={headphone} title='TAI NGHE' />
            <Home2 category={mouse} title='CHUỘT' />
            <Home2 category={speaker} title='LOA' />
        </div>
    )
}

export default Home
