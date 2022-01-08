import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, ListItemButton, ListItemText, ListItem, List, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../css/customer.css'
import { signoutAction, updateCustomerAction } from '../redux/action';
import { updateCustomerAPI } from '../APIs/CustomerAPI';
import { findByIdCustomerOrderAPI } from '../APIs/OrderAPI';
import swalert from '../alert/Alert'
import NumberWithCommas from '../APIs/NumberWithCommas'


const Customer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [customer, setCustomer] = useState({})
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [order, setOrder] = useState([])
    const isLoginedSelector = useSelector(state => state.isLogined)
    const customerSelector = useSelector(state => state.customer)

    useEffect(() => {
        setCustomer(customerSelector)
        setName(customerSelector.name)
        setAddress(customerSelector.address)
        setPhoneNumber(customerSelector.phoneNumber)

        // loading customer's order
        const fetchAPI = async (cid) => {
            const res = await findByIdCustomerOrderAPI(cid)
            if(res.length>0) setOrder(res)
        }
        fetchAPI(customerSelector.cid)
        return () => {
            
        }
    }, [isLoginedSelector])

    const onClickSignout = () => {
        dispatch(signoutAction())
        navigate('/')
        swalert('info', 'Bạn đã đăng xuất !')
    }

    const onSubmitUpdateCustomer = (e) => {
        e.preventDefault()
        const fetchUpdateCustomerAPI = async (cus) => {
            const res = await updateCustomerAPI(cus)
            if(res.cid!=null) {
                dispatch(updateCustomerAction(res))
                setName(res.name)
                setAddress(res.address)
                setPhoneNumber(res.phoneNumber)
                swalert('success', 'Cập nhật thành công !')
            } else swalert('error', 'Đăng nhập không thành công !')
        }
        const updateCustomer = {
            ...customer,
            name,
            phoneNumber,
            address
        }
        fetchUpdateCustomerAPI(updateCustomer)
    }
    
    const onChangeName = (e) => setName(e.target.value)
    const onChangePhoneNumber = (e) => setPhoneNumber(e.target.value)
    const onChangeAddress = (e) => setAddress(e.target.value)

    const OrderList = (props) => {
        return (
            <div>
                <Link to={`/order/${props.item.oid}`} style={{'textDecoration':'none'}}>
                    <ListItem>
                    <ListItemButton>
                        <ListItemText primary={`Đơn hàng #${props.item.oid}`} secondary={`${props.item.date.slice(0,10)} ${props.item.date.slice(11,19)}`} />
                        <div style={{'marginLeft':'auto', 'color': 'black'}}>Tổng cộng: </div>
                        <div style={{'color':'red', 'marginLeft':'10px'}}>{NumberWithCommas(props.item.totalPrice)}</div>
                    </ListItemButton>
                    </ListItem>
                </Link>
            </div>
        )
    }

    return (
        <div className='customer-wrapper'>
            <div className='orderList'>
            <List>
                <ListItem>
                    <ListItemText style={{'textAlign':'center'}}>
                        <b>DANH SÁCH ĐƠN HÀNG</b>
                    </ListItemText>
                </ListItem>
                <Divider />
                
                {order.map(item => <OrderList  key={item.oid} item={item}/>)}
            </List>
            </div>
        
            <div className='customer'>
                <form className='customerForm' onSubmit={onSubmitUpdateCustomer}>
                    <h2>THÔNG TIN TÀI KHOẢN </h2>
                    <TextField value={name} type='text' label="Họ tên" variant="outlined" onChange={onChangeName} required />
                    <TextField value={phoneNumber} type='text' label="Số điện thoại" variant="outlined" onChange={onChangePhoneNumber} required />
                    <TextField value={address} type='text' label="Địa chỉ" variant="outlined" onChange={onChangeAddress} required />
                    <Button className='loginButton' color='success' type='submit' variant="contained"><h3>Cập nhật</h3></Button>
                    <Button className='loginButton' color='error' variant="contained" onClick={onClickSignout}><h3>Đăng xuất</h3></Button>
                </form>
            </div>
        </div>
    )
}

export default Customer
