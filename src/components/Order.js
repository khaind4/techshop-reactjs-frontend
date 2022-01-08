import React, {useState, useEffect} from 'react'
import '../css/cart.css'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {FaArrowLeft} from 'react-icons/fa'
import NumberWithCommas from '../APIs/NumberWithCommas'
import { Link, useParams } from 'react-router-dom'
import {findByIdOrderAPI} from '../APIs/OrderAPI'


const Cart = () => {
    const [order, setOrder] = useState({})
    const [rows, setRows] = useState([])
    const [customer, setCustomer] = useState({})
    const {id} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchAPI = async (id) => {
            const res = await findByIdOrderAPI(id)
            setOrder(res)
            setRows(res.orderDetail)
            setCustomer(res.customer)
        }
        fetchAPI(id)
        return () => {
        }
    }, [])

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
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.odid} >
                        <TableCell ><img alt='sản phẩm' src={row.product.image} className='cartImage' /></TableCell>
                        <TableCell >{row.product.name}</TableCell>
                        <TableCell >{row.product.brand}</TableCell>
                        <TableCell >{NumberWithCommas(row.product.price)}</TableCell>
                        <TableCell >{row.quantity}</TableCell>
                        <TableCell >{NumberWithCommas(row.odPrice)}</TableCell>
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
                        <div className='cinfo21'>{customer.name}</div>
                        <div className='cinfo22'>{customer.phoneNumber}</div>
                    </div>
                    <div className='cinfo3'>{customer.address}</div>
                </div>
                <div className='ctotal'>
                    <div className='ctotal1'>Tổng cộng</div>
                    <div className='ctotal2'>{NumberWithCommas(parseInt(order.totalPrice))}</div>
                </div>
                <Link to='/customer' style={{'textDecoration':'none'}}>
                    <Button className='cbutton' color='warning' variant="contained" size='large'>
                        <FaArrowLeft className='arrow'/><h3>QUAY LẠI</h3>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
