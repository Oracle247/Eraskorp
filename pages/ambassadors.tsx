import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from "next/image";
import JohnDoe1 from '@/assets/doe1.png'
import JohnDoe2 from '@/assets/doe2.png'
import JohnDoe3 from '@/assets/doe3.png'
import Ambassadors from '@/components/Ambassadors';


const Ambassador = () => {
  return (
    <>
        <Header />
        <section className='section top-section grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">Ambassadors</h1>
        </section> 
        <Ambassadors />
    
        <Footer />
    </>
  )
}

export default Ambassador

{/* <section className="section pt-20 pb-20 text-center">
<div className="flex flex-col items-center gap-4 max-w-3xl mx-auto mb-12 text-center">
   <h3 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Our <br /> Ambassadors</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo recusandae necessitatibus voluptas nobis voluptatum nesciunt incidunt facilis, a provident dicta repudiandae ratione mollitia fuga deleniti! Alias explicabo aliquid repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus adipisci qui ratione excepturi unde inventore aspernatur. Accusamus numquam, officia laboriosam similique nemo repellat libero consequatur eum minima quas doloremque. </p>
 </div>
 <div className="flex flex-col md:flex-row md:justify-center items-center gap-8">
   <div className="max-w-sm flex flex-col gap-4 justify-center">
     <Image src={JohnDoe1} alt="" className="h-72 w-72 rounded-full" />
     <div>
       <h4 className="text-3xl font-bold">John Doe</h4>
       <span className="text-primary font-bold text-xl">Lorem Ileum</span>
     </div>
   </div>
   <div className="max-w-sm flex flex-col gap-4 justify-center">
     <Image src={JohnDoe2} alt="" className="h-72 w-72 rounded-full" />
     <div>
       <h4 className="text-3xl font-bold">John Doe</h4>
       <span className="text-primary font-bold text-xl">Lorem Ileum</span>
     </div>
   </div>
   <div className="max-w-sm flex flex-col gap-4 justify-center">
     <Image src={JohnDoe3} alt="" className="h-72 w-72 rounded-full" />
     <div>
       <h4 className="text-3xl font-bold">John Doe</h4>
       <span className="text-primary font-bold text-xl">Lorem Ileum</span>
     </div>
   </div>
 </div>
</section> */}