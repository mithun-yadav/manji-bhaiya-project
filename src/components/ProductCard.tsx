import React from 'react';
import { IoMdStar } from "react-icons/io";

type propData = {
    image:string,
    productName:string,
    desc:string,
    price:number,
    rating:number
}


function ProductCard({image,productName,desc,price,rating}:propData) {
  return (
    <div className='flex flex-col h-[400px] md:min-w-[270px] w-[95%] shadow-xl rounded-md mx-auto'>
        <div className='h-[55%]'>
            <img src={`${image}`} alt="img1" className='object-cover h-full w-full'/>
        </div>
        <div className='h-[45%] p-[10px]'>
            <h4 className='text-xl font-bold'>{productName}</h4>
            <p>{desc}</p>
            <div className='flex justify-between items-center pt-3'>
            <h3 className='text-blue-500 font-bold text-2xl'>${price}</h3>
            <span className='flex items-center gap-[1px] text-xl bg-amber-500 text-white px-2 rounded-[100vw]'>{rating.toFixed(1)} <IoMdStar/></span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
