import React from 'react'
import '../../css/product.css'
import NumberWithCommas from '../../APIs/NumberWithCommas'
import { Link } from 'react-router-dom'

const Product = (props) => {

    return (
        <Link to={`/product/${props.product.pid}`} className='product'>
            <div className='product-link'>
            <div className='product-image-wrapper'>
                <img alt='Sản phẩm' src={props.product.image} className='product-image' />
            </div>

            <div className='product-name'>
                <span>{props.product.name}</span>
            </div>

            <div className='price'>
                <span>{NumberWithCommas(props.product.price)}đ</span>
            </div>
            </div>
        </Link>
    )
}

export default Product
