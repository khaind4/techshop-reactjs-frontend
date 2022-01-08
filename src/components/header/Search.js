import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import '../../css/search.css'

const Search = () => {
    const [input, setInput] = useState('')
    let navigate = useNavigate()

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }

    const onSubmitSearch = (e) => {
        e.preventDefault()
        navigate(`/list/search=${input}`)
        setInput('')
    }

    return (
        <form className='search' onSubmit={onSubmitSearch}>
            <input type="text" value={input} placeholder='Nhập tên sản phẩm...' className='searchInput' onChange={onChangeInput}/>
            <input type="submit" value="Tìm kiếm" className='searchButton'/>
        </form>
    )
}

export default Search
