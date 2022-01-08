import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Pagination, Breadcrumbs } from '@mui/material'
import compareFunc from 'compare-func'
import '../../css/productList.css'
import Product from './Product'
import {findByCategoryAPI, searchProductAPI} from '../../APIs/ProductAPI'

const ProductList = () => {
    const {s} = useParams()
    const [products, setProducts] = useState([])
    const [title, setTitle] = useState([])
    const [sort, setSort] = useState('ascName')
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const loadProductList = async (data) => {
            // search
            if(data.slice(0,6) ==='search') {
                const res = await searchProductAPI(data.slice(7))
                setProducts(res)
                if(res.length>0) setTitle("Kết quả tìm kiếm ")
                else setTitle("Không tìm thấy sản phẩm")
            } else {
                // product category
                const res = await findByCategoryAPI(data)
                setProducts(res)
                switch(data) {
                    case 'phone': return setTitle("Điện thoại")
                    case 'laptop': return setTitle("Laptop")
                    case 'headphone': return setTitle("Tai nghe")
                    case 'mouse': return setTitle("Chuột")
                    case 'speaker': return setTitle("Loa")
                    default: return navigate('/*');
                }
            }
            
        }
        loadProductList(s)

        return function cleanup() {

          };
    }, [s])

    const onChangeSort = (e) => {
        setSort(e.target.value)

        switch(e.target.value) {
            case 'ascPrice': 
                setProducts(products.sort(compareFunc('price')))
                break
            case 'desPrice': 
                setProducts(products.sort(compareFunc('price')).reverse())
                break
            case 'ascName': 
                setProducts(products.sort(compareFunc('name')))
                break
            case 'desName': 
                setProducts(products.sort(compareFunc('name')).reverse())
                break
            default: return null
                
        }
    }

    return (
        <div className='product-list'>
            <div className='list-title'>
                <Breadcrumbs className='breadcrumb'>
                    <Link to='/' className='breadcrumbText'> Trang chủ </Link>
                    <span> {title} </span>
                </Breadcrumbs>

                <span className='list-title-text'>{title.toString().toUpperCase()}</span>
            </div> 

            <div className='sort-select-wrapper'>
                <select name="cars" id="cars" className='sort-select' value={sort} onChange={onChangeSort}>
                    <option className='select-option' value="ascPrice">Giá: tăng dần </option>
                    <option className='select-option' value="desPrice">Giá: giảm dần </option>
                    <option className='select-option' value="ascName">Tên: tăng dần </option>
                    <option className='select-option' value="desName">Tên: giảm dần </option>
                </select>
            </div>

            <div className='list'>
                {products.map(item => <Product key={item.pid} product={item} />)}
            </div>

            <Pagination count={1} size='large' className='pagination'/>
        </div>
    )
}

export default ProductList
