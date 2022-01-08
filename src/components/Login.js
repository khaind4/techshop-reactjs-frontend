import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css'
import { loginAction} from '../redux/action';
import { loginAPI } from '../APIs/CustomerAPI';
import swalert from '../alert/Alert'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const isLoginedSelector = useSelector(state => state.isLogined)

    useEffect(() => {
        window.scrollTo(0, 0);
        if(isLoginedSelector===true) {
            navigate('/')
        }
    }, [])

    const onChangeEmail = (e) => setEmail(e.target.value)

    const onChangePassword = (e) => setPassword(e.target.value)

    const onSubmitLogin = (e) => {
        e.preventDefault();
        const fetchLoginAPI = async (em,pw) => {
            const res = await loginAPI(em,pw)
            if(res.cid!=null) {
                dispatch(loginAction(res))
                navigate('/')
                swalert('success', 'Đăng nhập thành công !')
            } else {
                swalert('error', 'Email hoặc mật khẩu không đúng !')
                setPassword('')
            }
        }
        fetchLoginAPI(email,password)
    }

    return (
        <div className='login'>
            <form className='loginForm' onSubmit={onSubmitLogin}>
                <h2>ĐĂNG NHẬP</h2>
                <TextField className="loginTextField" type='email' value={email} label="Email" variant="outlined" onChange={onChangeEmail} required />
                <TextField className="loginTextField" type='password' value={password} label="Mật khẩu" variant="outlined" onChange={onChangePassword} required />
                <Button className='loginButton' type='submit' variant="contained"><h3>Đăng nhập</h3></Button>
                <span className='isSignuped'>Bạn chưa có tài khoản? <Link to='/signup' className='isSignupedLink'>Đăng ký</Link></span>
            </form>
        </div>
    )
}

export default Login
