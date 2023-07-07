import { FormEvent, useEffect, useReducer, useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ContactImg from '@/assets/contact.png'
import { IFeedback, IReducerAction } from '@/interfaces'
import usePost from '@/hooks/usePost';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';


const initialState: IFeedback = {
    email: '',
    name: '',
    message: '',
}

type IAction = 'email' | 'name' | 'message' | 'reset'

const ContactUs = () => {
    const [feedback, dispatch] = useReducer((state: IFeedback, action: IReducerAction<IAction>) => {
        if (action.type === 'reset') return initialState
        return { ...state, [action.type]: action.payload }
    }, initialState)

    const { loading, error, data, post } = usePost({ 
        api: "/feedbacks",
        onSuccess: () => {
            toast('Feedback Sent Successfullly')
            dispatch({ type: 'reset'})
        } 
    })

    const sendFeedback = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        post(feedback)
    }
  return (
    <>
        <Header />
        {(loading) && <Loader modalOpen={true} />}
        <section className='section top-section grad-to-right grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">Contact Us <br /> Address</h1>
            {/* <span className='font-bold'>Home / Contact Us</span> */}
        </section> 
        <section className="section flex flex-col md:flex-row gap-3 pt-20 pb-20">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-between w-full">
                <div className="flex-1 flex flex-col gap-4">
                    <Image src={ContactImg} alt="" className="h-40 w-full max-w-sm mb-8" />
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 font-argentinum mb-3">Office Address</h3>
                        <p className="text-sm text-[#6D6D6D] font-medium">Office Address:<br /> 13B, Mambila Street<br /> Off Aso Drive
Maitama, FCT-Abuja, Nigeria </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 font-argentinum mb-3">Phone Number</h3>
                        <div className="text-sm text-[#6D6D6D] font-medium flex flex-col">
                            <a href='tel:+2347001020300'>+2347001020300</a>
                            <a href='tel:+2347030858742'>+2347030858742</a>
                            <a href='tel:+2348024419117'>+2348024419117</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 font-argentinum mb-3">Email/Website Address</h3>
                        <div className="text-sm text-[#6D6D6D] font-medium flex flex-col">
                            <a href="https://box.reinsys.net/brilliant/" className="hover:text-primary">
                                https://box.reinsys.net/brilliant/
                            </a>
                            <a href="mailto:info@bbscholarships.org" className="hover:text-primary">
                                info@bbscholarships.org
                            </a>
                        </div>
                        {/* <div className="text-sm text-[#6D6D6D] font-medium flex flex-col">
                            <a href="www.bbscholarships.org" className="hover:text-primary">
                                www.bbscholarships.org
                            </a>
                            <a href="mailto:info@bbscholarships.org" className="hover:text-primary">
                                info@bbscholarships.org
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="flex-1 flex flex-col p-4 md:p-10 bg-white rounded-xl shadow-lg text-black/50">
                    <h1 className="text-lg font-bold font-argentinum mb-3">SEND US A MESSAGE</h1>
                    <form className="flex flex-col gap-4 mt-4" onSubmit={sendFeedback}>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className="text-xs font-bold">Full Name</label>
                            <input required onChange={(e) => dispatch({ type: 'name', payload: e.target.value })} value={feedback?.name} type="text" placeholder="name" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className="text-xs font-bold">Email</label>
                            <input required onChange={(e) => dispatch({ type: 'email', payload: e.target.value })} value={feedback?.email} type="email" placeholder="Email" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message" className="text-xs font-bold">Message</label>
                            <textarea required onChange={(e) => dispatch({ type: 'message', payload: e.target.value })} value={feedback?.message} rows={5} cols={10} id='message' placeholder="message" className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:opacity-35 placeholder:text-xs text-xs" />
                        </div>
                        <Button className="px-4 py-2 text-white bg-primary rounded-xl hover:bg-primary-hover focus:bg-primary-hover focus:outline-none">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default ContactUs