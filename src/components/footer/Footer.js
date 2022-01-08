import React from 'react'
import '../../css/footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer-component'>
                <h3>Địa chỉ</h3>
                403 Cách Mạng Tháng Tám, Phường 13, <br/>Quận 10, TP. Hồ Chí Minh <span className='br'/>
                Giờ làm việc: <span className='highlight-text'>8:00 - 18:00</span> <span className='br'/>
                Hotline: <span className='highlight-text'>0978.362341</span> <span className='br'/>
                Email: <span className='highlight-text'>khaind4@gmail.com</span> <span className='br'/>
            </div>

            <div className='footer-component'>
                <h3>Về TechShop</h3>
                Giới thiệu <span className='br'/>
                Tuyển dụng <span className='br'/>
                Liên hệ hợp tác <span className='br'/>
            </div>

            <div className='footer-component'>
                <h3>Hỗ trợ</h3>
                Hướng dẫn mua hàng <span className='br'/>
                Câu hỏi thường gặp <span className='br'/>
                Chính sách bảo mật <span className='br'/>
                Chính sách bảo hành <span className='br'/>
                Chính sách đổi trả <span className='br'/>
                Chính sách vận chuyển <span className='br'/>
            </div>

            <div className='footer-component'>
                <h3>Thanh toán</h3>
                <img alt='thanh toán' src={'https://ipjico.vn/wp-content/uploads/2017/03/the-0.jpg'} className='payment-image'/>
                <span className='br'/>
                <img alt='bộ công thương' src={'https://meta.vn/images/bo-cong-thuong.png'} className='bo-cong-thuong'/>
            </div>
        </div>
    )
}

export default Footer
