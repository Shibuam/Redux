
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import ProductComponent from "./productComponent"
import { setProducts } from '../redux/actions/productActions'

const ProductListing=()=>{
    const dispatch=useDispatch()
    const fetchProducts = async () => {

        try {
            let {data} = await axios.get('https://fakestoreapi.com/products')
            console.log(data)
            dispatch(setProducts(data))
           
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return(
    <div className="ui grid container">
      <h1>  Product Listing</h1>
      <ProductComponent/>
    </div>
    )
}
export default ProductListing
