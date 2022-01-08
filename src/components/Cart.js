import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {FaTrashAlt} from 'react-icons/fa'
import NumberWithCommas from '../APIs/NumberWithCommas'
import { saveOrderAPI } from '../APIs/OrderAPI'
import { deleteProductAction, successBuyAction } from '../redux/action'
import swalert from '../alert/Alert';


const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const cartSelector = useSelector(state => state.cart)
    const customerSelector = useSelector(state => state.customer)

    useEffect(() => {
        window.scrollTo(0, 0);

        setCart(cartSelector)
        let total1 = 0
        cartSelector.forEach(item => total1 += item.price*item.quantity)
        setTotal(total1)
        return () => {
        }
    }, [cartSelector])

    const onClickDelete = (e) => {
        e.preventDefault()
        let cartCopy = cart.filter(item => item.pid!==parseInt(e.currentTarget.id))
        dispatch(deleteProductAction(cartCopy))
        swalert('success', 'Xóa sản phẩm thành công !')
    }

    const onClickBuy = () => {
        if (cart.length<1) {
            swalert('info', 'Vui lòng chọn sản phẩm !')
            return
        }
        const fetchAPI = async (cid, cart) => {
            await saveOrderAPI(cid, cart)
        }

        let cart1 = []
        cart.forEach(item => {
            const cart2 = {
                quantity: item.quantity,
                product: {
                    pid: item.pid
                }
            }
            cart1.push(cart2)
        })
        fetchAPI(customerSelector.cid, cart1)
        dispatch(successBuyAction())
        navigate('/')
        swalert('success', 'Mua hàng thành công !')
    }

    return (
        <div className='cart'>
            <div className='cleft'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ảnh</TableCell>
                            <TableCell>Tên sản phẩm</TableCell>
                            <TableCell>Thương hiệu</TableCell>
                            <TableCell>Giá</TableCell>
                            <TableCell>Số lượng</TableCell>
                            <TableCell>Thành tiền</TableCell>
                            <TableCell>Xóa</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {cart.map((row) => (
                        <TableRow key={row.pid} >
                        <TableCell ><img alt='sản phẩm' src={row.image} className='cartImage' /></TableCell>
                        <TableCell >{row.name}</TableCell>
                        <TableCell >{row.brand}</TableCell>
                        <TableCell >{NumberWithCommas(row.price)}</TableCell>
                        <TableCell >{row.quantity}</TableCell>
                        <TableCell >{NumberWithCommas(row.price*row.quantity)}</TableCell>
                        <TableCell ><a href="/#" className='trash' id={row.pid} onClick={onClickDelete} ><FaTrashAlt /></a></TableCell>
                        </TableRow>
                    ))} 
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            <div className='cright'>
                <div className='cinfo'>
                    <div className='cinfo1'>Giao tới</div>
                    <div className='cinfo2'>
                        <div className='cinfo21'>{customerSelector.name}</div>
                        <div className='cinfo22'>{customerSelector.phoneNumber}</div>
                    </div>
                    <div className='cinfo3'>{customerSelector.address}</div>
                </div>
                <div className='ctotal'>
                    <div className='ctotal1'>Tổng cộng</div>
                    <div className='ctotal2'>{NumberWithCommas(total)}</div>
                </div>
                <Button className='cbutton' color='error' variant="contained" size='large' onClick={onClickBuy} ><h3>Mua hàng</h3></Button>
            </div>
        </div>
    )
}

export default Cart
