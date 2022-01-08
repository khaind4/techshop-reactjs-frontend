import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import '../css/productDetail.css'
import { findByIdProductAPI } from '../APIs/ProductAPI'
import NumberWithCommas from '../APIs/NumberWithCommas'
import { addToCartAction } from '../redux/action'
import swalert from '../alert/Alert'

const ProductDetail = () => {
    const dispatch = useDispatch()

    const {id} = useParams()
    const [quantity,setQuantity] = useState(0)
    const [product,setProduct] = useState(0)
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [bCategory, setBCategory] = useState('')
    const [price, setPrice] = useState(0)

    const isLoginedSelector = useSelector(state => state.isLogined)

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const fetchAPI = async (id1) => {
            const res = await findByIdProductAPI(id1)
            setProduct(res)
            setName(res.name)
            setBrand(res.brand)
            setImage(res.image)
            setPrice(res.price)
            setCategory(res.category)
            switch(res.category) {
                case 'phone': return setBCategory("Điện thoại")
                case 'laptop': return setBCategory("Laptop")
                case 'headphone': return setBCategory("Tai nghe")
                case 'mouse': return setBCategory("Chuột")
                case 'speaker': return setBCategory("Loa")
                default: break;
            }
        }
        fetchAPI(id)
        return () => {
        }
    }, [])

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const onClickMinus = (e) => {
        e.preventDefault()
        if(quantity>0) {
            const copyQty = quantity - 1
            setQuantity(copyQty)
        }
    }

    const onClickPlus = (e) => {
        e.preventDefault()
        const copyQty = quantity + 1
        setQuantity(copyQty)
        
    }

    const onClickCart = () => {
        if(isLoginedSelector===true) {
            const product1 = {
                ...product,
                quantity
            }
            if(quantity>0) {
                dispatch(addToCartAction(product1))
                swalert('success', 'Thêm sản phẩm thành công !')
            }
            else swalert('info', 'Vui lòng nhập số lượng !')
        } else swalert('info', 'Bạn cần đăng nhập để sử dụng chức năng này !')
    }

    return (
        <div className='productDetail'>
            <div className='pdTop'>
                <div className='pdLeft'>
                    <div className='breadcrumb-wrapper'>
                        <Breadcrumbs className='breadcrumb'>
                            <Link to='/' className='breadcrumbText'> Trang chủ </Link>
                            <Link to={`/list/${category}`} className='breadcrumbText'> {bCategory}</Link>
                            <span> {brand} </span>
                        </Breadcrumbs>
                    </div>
                    <img alt='sản phẩm' src={image} className='pdImage' />
                </div>

                <div className='pdRight'>
                    <h1>{name}</h1>
                    <div>Thương hiệu: <span className='highlight-text'>{brand}</span></div>
                    <h3 className='pdRightPrice'>{NumberWithCommas(price)}đ</h3>
                    <div className='qty'>
                        <div className='qtyTitle'>Số lượng</div>
                        <a href="/#" className='decreButton' onClick={onClickMinus} >-</a>
                        <input type='number' className='qtyInput' value={quantity} onChange={onChangeQuantity} />
                        <a href="/#" className='increButton' onClick={onClickPlus} >+</a>
                    </div>
                    <Button variant="contained" size='large' onClick={onClickCart}>Thêm vào giỏ hàng</Button>
                </div>
                
            </div>
            
            <div className='pdBottom'>
                <h3 className='pdBottomTitle'>MÔ TẢ SẢN PHẨM</h3>
                <div className='pdBottomText'>
                    <h4>Được xem là một trong những phiên bản iPhone "giá rẻ" của bộ 3 
                        iPhone 11 series nhưng iPhone 11 128GB vẫn sở hữu cho mình rất nhiều 
                        ưu điểm mà hiếm có một chiếc smartphone nào khác sở hữu.
                    </h4>
                    <div>Năm nay với iPhone 11 thì Apple đã nâng cấp khá nhiều về camera nếu 
                        so sánh với chiếc iPhone Xr 128GB năm ngoái. Chúng ta đã có bộ đôi 
                        camera kép thay vì camera đơn như trên thế hệ cũ và với một camera 
                        góc siêu rộng thì bạn cũng có nhiều hơn những lựa chọn khi chụp hình.
                        Trước đây để lấy được hết kiến trúc của một tòa nhà, để ghi lại hết 
                        sự hùng vĩ của một ngọn núi thì không còn cách nào khác là bạn phải 
                        di chuyển ra khá xa để chụp. Nhưng với góc siêu rộng trên iPhone 11 
                        thì có thể cho bạn những bức ảnh với hiệu ứng góc rộng rất ấn tượng 
                        và thích mắt.
                    </div> 
                    <h4>Camera trước cũng đã tốt hơn nhiều</h4>
                    <div>Đầu tiên phải kể đến là độ phân giải camera trước đã được nâng từ 
                        7 MP lên thành 12 MP cho người dùng những bức ảnh chi tiết hơn. 
                        iPhone 11 cũng là chiếc iPhone đầu tiên hỗ trợ quay video siêu chậm 
                        ở camera trước với tên gọi là Slofies, bạn có thể có được cho mình 
                        những thước phim khá thú vị với tính năng này. Apple cũng rất 
                        "tâm lý" khi trang bị thêm tính năng tự động thay đổi góc chụp rộng 
                        fhơn khi bạn xoay ngang chiếc iPhone của mình để có thể thoải mái 
                        selfie với bạn bè.
                    </div>
                    <h4>Hiệu năng mạnh mẽ hàng đầu thế giới</h4>
                    <div> Hiệu năng luôn là vấn đề mà người dùng iPhone chưa bao giờ phải 
                        phàn nàn và với iPhone 11 128 GB năm nay cũng không phải là ngoại 
                        lệ. Máy sở hữu con chip mạnh mẽ nhất của Apple cho những chiếc 
                        iPhone năm 2019 Apple A13 Bionic cùng 4 GB RAM và 128 GB bộ nhớ 
                        trong giúp điện thoại chơi game tốt mượt mà với mức cấu hình max 
                        setting cũng như mọi thao tác cơ bản đều cho tốc độ phản hồi 
                        nhanh chóng. Với những trang bị như vậy thì bạn có thể chơi mọi 
                        tựa game, sử dụng mọi ứng dụng nặng nhất hiện nay mà vẫn đảm bảo 
                        máy hoạt động trơn tru và mượt mà.
                    </div>
                    <h4>Pin đã tốt nay còn tốt hơn</h4>
                    <div>
                        Như các bạn đã biết thì iPhone Xr năm ngoái là chiếc iPhone có 
                        thời lượng pin tốt nhất từ trước tới nay của Apple. Và iPhone 11 
                        năm nay thậm chí Apple còn làm tốt hơn thế với thêm 1 giờ sử dụng 
                        pin. Apple cũng nói rằng họ đã cải tiến bên trong để chiếc iPhone 11 
                        mới có thể chống nước tốt hơn thế hệ cũ. Và cũng không thể không 
                        nhắc tới thiết kế kính mới ở cả mặt trước và mặt sau của iPhone 11 
                        và được Apple giới thiệu là loại kính bền nhất từng được sử dụng 
                        trên smartphone.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail
