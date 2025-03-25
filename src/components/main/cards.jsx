import axios from 'axios';
import React from 'react'


const token = "67e147cb2ac3b760a778e330";
export const Cards = async () => {
    const res = await axios.get(
        `${process.env.NEXT_API}/flower/category/house-plants?access_token=${token}`
    );
    const data = await res.data.data;
    console.log(data);



    return <div>
        <main className='w-[840px] mx-auto'>
            <div className="main_nav flex justify-between pt-[20px]">
                <ul className='flex gap-[34px] pt-[8px]'>
                    <li><a className='font-inter text-[#3D3D3D] hover:text-[#46A358] active-[#46A358] text-[15px] font-[700]' href="">All Plants</a></li>
                    <li><a className='font-inter text-[#3D3D3D] hover:text-[#46A358] active-[#46A358] text-[15px] font-[700]' href="" >New Arrivals</a></li>
                    <li><a className='font-inter text-[#3D3D3D] hover:text-[#46A358] active-[#46A358] text-[15px] font-[700]' href="" >Sale</a></li>
                </ul>
                <div className=" flex gap-[1px]">
                    <p className='font-inter text-[#3D3D3D] text-[16px] font-[700] pt-[8px]'>Sort by:</p>
                    <button className='font-inter text-[#3D3D3D]  text-[15px] font-[700] pt-[6px] pb-[6px] pl-[12px] pr-[12px] rounded-lg '>Default Sorting</button>
                </div>
            </div>
            <div className=" ml-[25px] mt-[10px] grid grid-cols-3 ">
                {data?.map((info, index) => {
                    return (
                        <div className="" key={index}>
                            <div className="box mt-[20px]">
                                <div className='w-[250px] h-[320px] bg-cover bg-center bg-no-repeat border-[1px]  ' style={{ backgroundImage: `url(${info.main_image})` }} />
                                <p className='font-inter text-[16px] font-[700] text-[#3D3D3D]'>{info.title}</p>
                                <p className='font-[700px] text-[#46A358] textr-[18px] font-inter mt-[6px]'>{info.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    </div>
};
