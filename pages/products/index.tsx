import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { paginate, changePage } from '@/utils'
import Product from '@/components/ProductCard'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IProduct } from '@/interfaces'
import { useRouter } from "next/router";



const Products = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const num_per_page = 6

  const router = useRouter()


  const handleClick = (id: any) => {
    router.push(`/products/${id}`)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('/api/product')
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data?.message || 'An error Occured')
        }
        setData(data)
      } catch (error) {
        console.log({error})
      }
      setIsLoading(false)
    }

    fetchProduct()
  }, [])

  // console.log('news', news)

  return (
    <div className=''>
      <Header />
      {isLoading && <Loader modalOpen={isLoading} />}
      <div className="section top-section grad-to-right flex flex-col justify-center items-center gap-4">
        <h1 className="text-xl md:text-3xl text-white font-semibold text-center">
          Our Products
        </h1> 
      </div>
      <div className="flex flex-col gap-20 px-4 md:px-8 lg:px-[8.4375rem] py-20 min-h-[50vh]">
        <div className="flex flex-col gap-4">
          <h2 className="w-full text-center text-blue text-xl font-semibold">Available Product</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
             data?.length > 0 ? (
               data?.map((item: IProduct, index: number) => (
                  <Product key={index} product={item} handleClick={handleClick} mode="user" />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <h1 className="text-2xl font-argentinum">No Products</h1>
                </div>
              )
            }
          </div>
        </div>
        { data?.length > 0 && data?.length > num_per_page &&
          <div className="flex justify-center items-center w-full mt-4">
            <MdChevronLeft size={"1.5rem"} />
            {data && [...Array(paginate({page, num_per_page, data: data})?.pages).keys()]?.map((page_num) => 
              <span key={page_num+1} onClick={() => changePage(page_num+1, setPage)} className={`${page===page_num+1 && "bg-primary text-white"} font-medium w-6 h-6 text-sm text-white grid place-items-center cursor-pointer`}>1</span>
            )}
            <MdChevronRight size={"1.5rem"} />
          </div>
          }
      </div>
      <Footer />
    </div>
  )
}

export default Products