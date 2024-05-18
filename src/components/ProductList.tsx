import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

type passingProps = {
    id?: number,
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail: string,
    images:object
}

function ProductList() {
    let [data, setData] = useState([]);

    async function fetchData() {
        const dataFetch = await axios("https://dummyjson.com/products?limit=10")
            setData(dataFetch.data.products);
            console.log(data)
    };

    useEffect(()=>{
        axios("https://dummyjson.com/products?limit=10").then((res)=>{
            console.log((res.data));
            return res.data.products
        }).then((res)=>setData(res));
    },[]);

    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 xl:grid-cols-3 gap-[2rem] md:grid-cols-2 grid-cols-1'>
            {data && data.map((item:passingProps, index) => {
                return <ProductCard key={index} image={item.thumbnail} productName={item.title} desc={item.description} price={item.price} rating={item.rating}/>
            })}
        </div>
        </div>
    )
}

export default ProductList
