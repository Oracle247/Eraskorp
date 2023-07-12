import React, { useEffect, useState } from 'react'
import { MdChevronRight } from 'react-icons/md'
import Loader from '@/components/Loader'
import Image from 'next/image'
import { IProduct, IProductTest } from '@/interfaces'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import Table from '@/components/Table'

const initialState: IProduct = {
  _id: null,
  name: '',
  description: '',
  image: '',
  performantFeature: '',
  testResults: [],
  testResultsImage: '',
  storage: '',
  sizes: []
}

const Product = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<IProduct>(initialState)

    const router = useRouter()
    const { id } = router.query

    const columns = [
      {
        name: "parameter",
        label: "Test Parameter",
        options: {
          filter: true,
          sort: true,
        },
        extra: true,
        custom: (val: string, meta: any) => {
          return  (
              <p className="text-sm text-black/70">{val?.length < 40 ? val : val.slice(0, 40) + '...'}</p>
          )
        },
      },
      {
        name: "method",
        label: "Test Method",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "result",
        label: "Result",
        options: {
          filter: true,
          sort: false,
        },
      }
    ];
    
  
    useEffect(() => {
      const fetchProduct = async () => {
        setIsLoading(true)
        try {
          const res = await fetch(`/api/product/${id}`)
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data?.message || 'An error Occured')
          }
          setProduct(data)
        } catch (error) {
          console.log({error})
        }
        setIsLoading(false)
      }
  
      fetchProduct()
    }, [])

    console.log({product})

  return (
    <>
      <Header />
      {isLoading && <Loader modalOpen={isLoading} />}
      <main className='h-screen pt-24'>
        <img src={product?.image} className='w-[15rem] h-[15rem]'alt="" />
        <h2 className=''>{product?.name}</h2>
        <p className='' dangerouslySetInnerHTML={{ __html: product?.description }}></p>
        <h2 className="font-medium">Performant Features</h2>
        <div className='' dangerouslySetInnerHTML={{ __html: product?.performantFeature }} ></div>
        <div className="flex flex-col gap-2 bg-blue text-white">
          <div className="flex px-20">
            <div className="flex">
              <img src={product?.testResultsImage} className='w-[10rem] h-[10rem]' alt="" />
            </div>
            <div className="flex flex-col w-full bg-red-400 h-full overflow-y-auto">
              <div className="flex justify-between items-end w-full">
                <h2 className="font-bold text-2xl">{product?.name}</h2>
                {
                  product?.sizes.map((size, index) => (
                    <div key={index} className="flex items-center justify-center font-bold h-12 px-3 rounded-md text-white bg-blue-light">
                      {size} L
                    </div>
                  ))
                }
              </div>
              <div className="flex w-full bg-green-400">
                <Table<IProductTest> data={product?.testResults} columns={columns} isSearch={false} className={'w-full'} />
              </div>
            </div>
          </div>
          <div className="flex">{product?.storage}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Product