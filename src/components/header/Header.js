import React from 'react'
import { Link } from "react-router-dom";
import '../../css/header.css'
import Search from './Search.js'
import HeaderBar from './HeaderBar.js'

const Header = () => {

    return (
        <div className='header'>
            <Link to='/' className='shopNameLink'>
                <div className='shopName'>TechShop</div>
            </Link>
            <Search />
            <HeaderBar />
        </div>
    )
}

export default Header
