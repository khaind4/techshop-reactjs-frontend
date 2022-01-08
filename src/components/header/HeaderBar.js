import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import {FaUser, FaShoppingCart} from 'react-icons/fa'
import { Badge } from '@mui/material';
import '../../css/headerBar.css'
import swalert from '../../alert/Alert'

const Headerbar = () => {
    const [loginText,setLoginText] = useState('Đăng nhập')
    const [name,setName] = useState('')
    const [link,setLink] = useState('/login')

    const isLoginedSelector = useSelector(state => state.isLogined)
    const isUpdatedSelector = useSelector(state => state.isUpdated)
    const nameSelector = useSelector(state => state.customer.name)
    const cartCountSelector = useSelector(state => state.cartCount)

    useEffect(() => {
        if(isLoginedSelector===true) {
            setLoginText('Xin chào')
            setName(nameSelector)
            setLink('/customer')
        } else {
            setLoginText('Đăng nhập')
            setName('')
            setLink('/login')
        }
    }, [isLoginedSelector, isUpdatedSelector])

    const onClickCart = (e) => {
        if (isLoginedSelector===false) {
            e.preventDefault();
            swalert('info', 'Bạn cần đăng nhập để sử dụng chức năng này !')
        }
        
    }

    return (
        <div className='headerBar'>
            <Link to='/cart' className='headerBarComponent' onClick={onClickCart}>
                <div className='barText'>Giỏ hàng</div>
                <Badge badgeContent={cartCountSelector} color="primary" >
                <div className='icon'><FaShoppingCart/></div>
                </Badge>
            </Link>

            <Link to={link} className='headerBarComponent'>
                <div className='barText'>{loginText}<br/>{name}</div>
                <div className='icon'><FaUser/></div>
            </Link>
        </div>
    )
}

export default Headerbar
