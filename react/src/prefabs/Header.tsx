import { SocialIcon } from 'react-social-icons'
import logo from '../assets/logo.png'
export function Header() {
    return (
        <>
            <img src={logo} className="absolute top-9 left-60 h-12 inline-block" alt="logo" />
            <div className='text-gray-400 text-center flex justify-center space-x-9 pt-10'>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Products</h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Services</h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Industries</h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Industries</h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Industries</h1>
            </div>
            <div className='justify-center flex space-x-9 pt-10 absolute right-10 top-0'>
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.twitter.com" />
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.instagram.com" />
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.facebook.com" />
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.linkedin.com" />
            </div>
        </>
    )
}