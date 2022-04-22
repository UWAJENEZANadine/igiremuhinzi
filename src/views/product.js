import React from 'react';
import HomeLayout from "../components/homeLayout";
import ProductCard from "../components/productcard";


import  allProductData from '../assets/constants/product.json';


const ProductView=()=>{
    return(
        <HomeLayout>
            <div className="product-container">
{
     allProductData.map((data)=>(<ProductCard data={data}/>))
}
                      
                

            </div>

            </HomeLayout>

    )
}
export default ProductView;