import React, {useState} from 'react'
import '../css/signup.css'
import { TextField, Button } from '@mui/material';
import { saveCustomerAPI } from '../APIs/CustomerAPI'
import { useNavigate } from 'react-router-dom';
import swalert from '../alert/Alert'

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()

    const onChangeEmail = (e) => setEmail(e.target.value)
    const onChangePassword = (e) => setPassword(e.target.value)
    const onChangeRePassword = (e) => setRePassword(e.target.value)
    const onChangeName = (e) => setName(e.target.value)
    const onChangePhoneNumber = (e) => setPhoneNumber(e.target.value)
    const onChangeAddress = (e) => setAddress(e.target.value)

    const onSubmitSignup = (e) => {
        e.preventDefault();
        if (password!==rePassword) return swalert('error', 'Mật khẩu không trùng khớp !')

        const fetchUpdateCustomerAPI = async (cus) => {
            const res = await saveCustomerAPI(cus)
            if(res===true) {
                swalert('success', 'Đăng ký thành công !')
                navigate('/login')
            }
                
            else swalert('error', 'Email đã được sử dụng !')
        }

        const signupCustomer = {
            email,
            name,
            password,
            phoneNumber,
            address
        }
        fetchUpdateCustomerAPI(signupCustomer)
    }

    return (
        <div className='signup'>
            <form className='signupForm' onSubmit={onSubmitSignup}>
                <h2>ĐĂNG KÝ</h2>
                <TextField className="signupTextField" value={email} onChange={onChangeEmail} label="Email (Dùng để đăng nhập)" variant="outlined" size="medium" type="email" required />
                <TextField className="signupTextField" value={password} onChange={onChangePassword} label="Mật khẩu" variant="outlined" size="medium" type="password" required />
                <TextField className="signupTextField" value={rePassword} onChange={onChangeRePassword} label="Nhập lại mật khẩu" variant="outlined" size="medium" type="password" required />
                <TextField className="signupTextField" value={name} onChange={onChangeName} label="Họ tên" variant="outlined" size="medium" type="text" required />
                <TextField className="signupTextField" value={phoneNumber} onChange={onChangePhoneNumber} label="Số điện thoại" variant="outlined" size="medium" type="number" required />
                <TextField className="signupTextField" value={address} onChange={onChangeAddress} label="Địa chỉ" variant="outlined" size="medium" type="text" required />
                <Button className='signupButton' variant="contained" type="submit"><h3>Đăng Ký</h3></Button>
            </form>
        </div>
    )
}

export default Signup
