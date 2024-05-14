import { SocialIcon } from 'react-social-icons';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <div className="flex justify-between items-center p-4 flex-col md:flex-row">
                <div className='md:w-96'>
                    <Link to="/" className=''>
                        <img src={logo} className="h-12" alt="logo" />
                    </Link>
                </div>
                <div className="text-gray-400 text-center">
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>
                            <Link to="/ansatte">Ansatte</Link>
                        </h1>
                        <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>
                            <Link to="/">Hjem</Link>
                        </h1>
                        <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>
                            <Link to="/lokasjon">Lokasjon</Link>
                        </h1>
                        
                    </div>
                </div>
                <div className="flex items-center md:w-96 gap-4 justify-end">                    
                        <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.twitter.com" />
                        <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.instagram.com" />
                        <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.facebook.com" />
                        <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.linkedin.com" />
                </div>
            </div>
        </>
    )
}
