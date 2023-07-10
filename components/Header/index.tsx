import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from "@/assets/eraskorp/IMG-20230608-WA0069-removebg-preview.png"
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='section flex items-center justify-between bg-blue text-black py-2 md:py-5 fixed top-0 left-0 z-30 w-full min-h-[50px]'>
    <header className='w-full flex items-center justify-between '>
        <Link href={"/"} className="flex justify-center items-end gap-4">
          <Image src={Logo} className='w-12 h-12 md:h-12' alt='' />
          <h2 className="text-white font-extrabold text-2xl">ERASKORP</h2>
        </Link>
        <nav className="hidden text-white lg:flex items-center gap-2 lg:gap-4 whitespace-nowrap">
          <ul className='flex flex-col lg:flex-row items-center text-sm text-dark-light gap-2 lg:gap-4 font-medium'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
            {/* <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Scholarship</Link></li> */}
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Our Products</Link></li>
            <li className='relative bg-blue group cursor-pointer'>
              <span className={`pb-1.5 px-1 font-medium`}>Login</span>
              <div className='hidden absolute top-6 left-0 group-hover:flex flex-col gap-2 bg-white shadow-md'>
                <Link href={`/login`} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Admin
                  </span>
                </Link>
              </div>
            </li>
            {/* {!user ? 
            <li><Link href="/login" className={`${pathname==="/login" && "text-green border-b-2"} pb-1.5 px-1 font-medium`}>Login</Link></li>
            :
            <li>
              <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                 Logout
              </div>
            </li>
            } */}
          </ul>
          <a href={`https://box.reinsys.net/brilliant/`}>
              <Button className={`py-2 pb-2.5 px-6 text-xs font-medium text-blue font-semibold bg-gold rounded-full`}>
                Sign Up
              </Button>
          </a>
        </nav>
      </header>
      <div className={`lg:hidden shadow fixed top-0 right-0 w-5/6 min-h-screen h-screen bg-white text-black px-4  py-2 md:px-10 z-30 ${isOpen ? "translate-x-0" : "translate-x-full"} transition-all duration-300`}>
        <nav className="lg:hidden flex flex-col gap-16 p-4 pt-20 px-8 mb-8">
          <ul className='flex flex-col text-sm text-dark-light gap-7 md:gap-4 lg:gap-7 font-medium'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link href="/about-us" className={`pb-1.5 px-1 font-medium`}>About</Link></li>
            {/* <li><Link href="/" className={`pb-1.5 px-1 font-medium`}>Scholarship</Link></li> */}
            <li><Link href="/winners" className={`pb-1.5 px-1 font-medium`}>Winners</Link></li>
            <li><Link href="/ambassadors" className={`pb-1.5 px-1 font-medium`}>Ambassadors</Link></li>
            <li><Link href="/news" className={`pb-1.5 px-1 font-medium`}>News</Link></li>
            <li><Link href="/scholarships" className={`pb-1.5 px-1 font-medium`}>Available Scholarships</Link></li>
            <li><Link href="/contact-us" className={`pb-1.5 px-1 font-medium`}>Contact Us</Link></li>
            <li><Link href="/faqs" className={`pb-1.5 px-1 font-medium`}>FAQs</Link></li>
            <li className='relative bg-white group cursor-pointer'>
              <span className={`pb-1.5 px-1 font-medium`}>Login</span>
              <div className='hidden absolute top-6 left-0 group-hover:flex flex-col gap-2 bg-white shadow-md'>
                <a href={`https://box.reinsys.net/brilliant/`} className='border-b-2 py-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    User
                  </span>
                </a>
                <Link href={`/login`} className='pb-2'>
                  <span className={`py-2 pb-2.5 px-6 text-xs font-medium`}>
                    Admin
                  </span>
                </Link>
              </div>
            </li>
            {/* {!user ? 
            <li><Link href="/login" className={`${pathname==="/login" && "text-green"} pb-1.5 px-1 font-medium`}>Login</Link></li>
              :
              <li>
                <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                  Logout
                </div>
              </li>
            } */}
          </ul>
          <a href={`https://box.reinsys.net/brilliant/`}>
            <Button className={`py-2 pb-2.5 px-6 text-xs font-medium text-white bg-primary rounded-full`}>
              Sign Up
            </Button>
          </a>
        </nav>
      </div>
      { isOpen ? 
        <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl lg:hidden relative z-50  text-green`} /> 
        : <BiMenu onClick={() => setIsOpen(true)} className='cursor-pointer text-3xl lg:hidden relative z-50 text-green' />
      }
    </div>
  )
}

export default Header