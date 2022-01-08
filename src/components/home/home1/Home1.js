import React from 'react'
import '../../../css/home1.css'
import Category from './Category'

const Home1 = () => {
    return (
        <div className='home1'>
            <Category />
            <div className='promotion'>
                <img alt='banner' src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/DELL_Vostro-3500_690x300.png' className='promotion-image'/>
            </div>
            <div className='banner'>
                <img alt='banner' src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/desk_690x300_right-banner_DienThoai.png' className='banner-image' />
                <img alt='banner' src='https://cdn.cellphones.com.vn/media/ltsoft/promotion/desk_690x300_right-banner_Laptop.png' className='banner-image' />
            </div>
        </div>
    )
}

export default Home1
