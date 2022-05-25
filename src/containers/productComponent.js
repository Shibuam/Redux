import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { setProducts } from '../redux/actions/productActions'

function ProductComponent() {

    

    const products = useSelector((state) => state.allProducts.products)
 let renderList=   products.map((product)=>{
        const{category,description,id,image,price,title}=product
        return(
            <div className='four column wide' key={id} >
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'> <img src={image} alt={title} />  </div>
                        <div className='content'>

                            <div className='header'>{title}</div>
                            <div className='meta price'>${price}</div>
                            <div className='description'>{description}</div>
                            <div>{category}</div>



                    
                    </div>

                </div>
            </div>
        </div>
        )
    })

   
    return (
       <div>
{renderList}
       </div> 
      
    )
}
export default ProductComponent