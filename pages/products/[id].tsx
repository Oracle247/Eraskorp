import React, { useEffect, useState, useCallback } from 'react'
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
  // const [id, setId] = useState<string>('')
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
        return (
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


  // useEffect(() => {

  //   // setId(_id as string)
  //   const fetchProduct = async () => {
  //     setIsLoading(true)
  //     try {
  //       const res = await fetch(`/api/product/${id}`)
  //       const data = await res.json()
  //       if (!res.ok) {
  //         throw new Error(data?.message || 'An error Occured')
  //       }
  //       setProduct(data)
  //     } catch (error) {
  //       console.log({ error })
  //     }
  //     setIsLoading(false)
  //   }

  //   fetchProduct()
  // }, [])

  const fetchProduct = useCallback(
    async () => {
      try {
        if (id) {
          setIsLoading(true)
          const res = await fetch(`/api/product/${id}`)
          const data = await res.json()
          if (!res.ok) {
            throw new Error(data?.message || 'An error Occured')
          }
          setProduct(data)
          console.log({ product })
        }
      } catch (error) {
        console.log({ error })
      }
      setIsLoading(false)
    },
    [id],
  )

  useEffect(() => {
    fetchProduct()
  }, [id, fetchProduct])

  return (
    <>
      <Header />
      {isLoading && <Loader modalOpen={isLoading} />}
      <main className='min-h-screen pt-24 my-8'>
        <div className="flex flex-col my-4 gap-4 px-4 md:px-40 justify-center">
          <div className="flex justify-center items-center">
            <img src={product?.image} className='w-[15rem] h-[15rem]' alt="" />
          </div>
          <h2 className='font-extrabold  text-blue text-3xl'>{product?.name}</h2>
          <div className="flex">
            <p className='' dangerouslySetInnerHTML={{ __html: product?.description }}></p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-xl text-blue-light">Performant Features:</h2>
            <div className='' dangerouslySetInnerHTML={{ __html: product?.performantFeature }} ></div>
          </div>
        </div>
        <div className="flex flex-col py-4 gap-6 bg-blue text-white px-4 md:px-40">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex md:w-2/5">
              <img src={product?.testResultsImage} className='w-[10rem] h-[10rem]' alt="" />
            </div>
            <div className="flex flex-col gap-4 w-full h-full">
              <div className="flex justify-between items-end w-full">
                <h2 className="font-bold text-xl md:text-2xl">{product?.name}</h2>
                <div className="flex gap-2">
                  {
                    product?.sizes.map((size, index) => (
                      <div key={index} className="flex items-center justify-center font-bold h-12 px-3 rounded-md text-white bg-blue-light">
                        {size} L
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="flex w-full">
                <Table<IProductTest> data={product?.testResults} columns={columns} isSearch={false} className={''} />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 text-gold">
            <div className="">Storage:</div>
            <div className='text-white'>
              {product?.storage}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Product