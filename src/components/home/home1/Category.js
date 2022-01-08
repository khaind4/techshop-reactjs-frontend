import React from 'react'
import { Link } from 'react-router-dom'
import {FaLaptop, FaAngleRight, FaMobileAlt, FaVolumeDown, FaMouse, FaHeadphones} from 'react-icons/fa'
import '../../../css/category.css'

const Category = () => {

    return (
        <div className='category'>
            <Link to='/list/phone' className='category-link' >
                <div className='category-icon'><FaMobileAlt /></div>
                <div className='category-text'>Điện thoại</div>
                <div className='Right-icon'><FaAngleRight /></div>
            </Link>

            <Link to='/list/laptop' className='category-link'>
                <div className='category-icon'><FaLaptop /></div>
                <div className='category-text'>Laptop</div>
                <div className='Right-icon'><FaAngleRight /></div>
            </Link> 

            <Link to='/list/headphone' className='category-link'>
                <div className='category-icon'><FaHeadphones /></div>
                <div className='category-text'>Tai nghe</div>
                <div className='Right-icon'><FaAngleRight /></div>
            </Link> 

            <Link to='/list/mouse' className='category-link'>
                <div className='category-icon'><FaMouse /></div>
                <div className='category-text'>Chuột</div>
                <div className='Right-icon'><FaAngleRight /></div>
            </Link> 

            <Link to='/list/speaker' className='category-link'>
                <div className='category-icon'><FaVolumeDown /></div>
                <div className='category-text'>Loa</div>
                <div className='Right-icon'><FaAngleRight /></div>
            </Link> 

        </div>
    )
}

export default Category
