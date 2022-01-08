import React from 'react'
import '../../../css/home2.css'
import Product from '../../productList/Product'

const Home2 = (props) => {
    return (
        <div className='home2'>
            <div className='title'>
                <span className='titleText'>{props.title} NỔI BẬT</span>
            </div>
            <div className='products'>
                {props.category.map(item => <Product key={item.pid} product={item}/>)}
            </div>
        </div>
    )
}

export default Home2
