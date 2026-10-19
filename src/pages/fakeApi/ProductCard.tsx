// import React from 'react'

import { IoBookmarkOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { url } from "../../utils/api";
import axios from "axios";

interface cardProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: any;
    rating: {
        rate: number;
        count: number
    }
}

const ProductCard = () => {
    const [product, setProduct] = useState<cardProduct[]>();

    useEffect(() => {
      axios.get(`${url}/products`)
      .then((res) => {
        setProduct(res.data);
        console.log("products", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
    }, [])

  return (
    <div className="w-full p-8 min-h-screen bg-[#d7d5d5] flex flex-col items-center justify-center">
      <h4 className="text-[15px] md:text-[20px] mb-5">Our Products</h4>

    {/* cards holder */}
      <div className="w-[90%] flex flex-wrap gap-7">
        {/* card */}

        { Array.isArray(product) && product.map((pro: any) => (
            <div key={pro.id} className="bg-[#ffffff] rounded-md p-3 w-80 h- flex flex-col justify-between">
                <div className="flex justify-between items-center w-full">
                    <h5 className="p-1 px-2 rounded-md border border-[#E8E8E8] text-[13px]">New Season</h5>

                    <IoBookmarkOutline className="text-[20px]" />
                </div>

                <div className="w-full h-50 flex justify-center items-center mb-3">
                    <img src={pro.image}  className="h-full" alt="" />
                </div>

                <div className="flex flex-col gap-1 items-center mb-2.5">
                    <h5 className="text-[15px] font-bold text-center">{pro.title}</h5>
                    <h5 className="text-[15px] text-center">{pro.category}</h5>
                    <h5 className="text-center text-[12px] text-[#959596]">{pro.description}</h5>
                    <h5 className="text-[18px] font-bold text-center">${pro.price}</h5>
                </div>

                <div className="w-full flex items-center justify-between">
                    <div className="flex gap-2 items-center text-[15px]">
                        <h5>Rating:</h5>
                        <h5 className="text-orange-500">{pro.rating.rate}</h5>
                    </div>
                    
                    <div className="flex gap-2 items-center text-[15px]">
                        <h5 className="">Count:</h5>
                        <h5 className="text-orange-500">{pro.rating.count}</h5>
                    </div>
                </div>

                <button className="w-full p-2 bg-orange-400 cursor-pointer hover:bg-orange-900 rounded-md mt-3 text-white">
                    Add To Cart
                </button>
            </div>
        ))}

      </div>
    </div>
  )
}

export default ProductCard
