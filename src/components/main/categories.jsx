import axios from 'axios';
import React from 'react'


const token = "67e147cb2ac3b760a778e330";
const Categories = async () => {
  const res = await axios.get(
    `${process.env.NEXT_API}/flower/category?access_token=${token}`
  );
  const data = await res.data.data;

  // console.log(data);


  return (<div>
    <div className="w-[310px]  pt-[50px] bg-[#F5F5F5] pb-[400px]">
<h2 className='font-inter text-[18px] font-[700] text-[#3D3D3D] pl-[22px] '>Categories</h2>

      {data?.map(({ title, count }, index) => {
        return (
          <div className="" key={index}>
            
            <div className="flex justify-between pl-[26px] pr-[26px]">
              <a className='font-inter text-[16px] font-[700] text-[#3D3D3D] hover:text-[#46A358] mt-[10px] mb-[6px] ' href=''>{title}</a>
              <span className='font-inter text-[15px] font-[400] text-[#3D3D3D] hover:text-[#46A358] mt-[10px] mb-[6px] ' >({count})</span>
            </div>
          </div>


        )

      })}
    </div>


  </div>

  )
}

export default Categories