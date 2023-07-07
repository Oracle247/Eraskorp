import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from "next/image";
import Winner1 from '@/assets/winner1.png'
import Winner2 from '@/assets/winner2.png'
import Winner3 from '@/assets/winner3.png'
import WinnerList from "@/components/Winners";


const Winners = () => {
  return (
    <>
        <Header />
        <section className='section top-section grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">Scholarship  Winners</h1>
        </section> 
        <WinnerList />
        <Footer />
    </>
  )
}

export default Winners

{/* <section className="section pt-20 pb-20 text-center">
<div className="flex flex-col items-center gap-4">
  <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-10">Scholarship <br /> Winners</h3>
</div>
<div className="flex flex-col md:flex-row items-center md:justify-center gap-8 mb-8 text-center">
  <div className="max-w-sm flex flex-col gap-4 items-center">
    <Image src={Winner1} alt="" className="h-72 w-72 rounded-full" />
    <div>
      <h4 className="text-3xl font-bold">John Doe</h4>
      <span className="text-[#F60707] font-extrabold">First Position</span>
    </div>
  </div>
  <div className="max-w-sm flex flex-col gap-4 items-center">
    <Image src={Winner2} alt="" className="h-72 w-72 rounded-full" />
    <div>
      <h4 className="text-3xl font-bold">John Doe</h4>
      <span className="text-[#F60707] font-extrabold">Second Position</span>
    </div>
  </div>
  <div className="max-w-sm flex flex-col gap-4 items-center">
    <Image src={Winner3} alt="" className="h-72 w-72 rounded-full" />
    <div>
      <h4 className="text-3xl font-bold">John Doe</h4>
      <span className="text-[#F60707] font-extrabold">Third Position</span>
    </div>
  </div>
</div>
<div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
   <div className="max-w-sm flex flex-col gap-4 items-center">
      <Image src={Winner1} alt="" className="h-72 w-72 rounded-full" />
    <div>
      <h4 className="text-3xl font-bold">John Doe</h4>
      <span className="text-[#F60707] font-extrabold">First Position</span>
    </div>
  </div>
   <div className="max-w-sm flex flex-col gap-4 items-center">
      <Image src={Winner2} alt="" className="h-72 w-72 rounded-full" />
    <div>
      <h4 className="text-3xl font-bold">John Doe</h4>
      <span className="text-[#F60707] font-extrabold">Second Position</span>
    </div>
  </div>
   <div className="max-w-sm flex flex-col gap-4 items-center">
      <Image src={Winner3} alt="" className="h-72 w-72 rounded-full" />
    <div>
      <h4 className="text-3xl font-bold">John Doe</h4>
      <span className="text-[#F60707] font-extrabold">Third Position</span>
    </div>
  </div>
</div>
</section> */}