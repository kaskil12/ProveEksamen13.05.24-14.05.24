import logo from '../assets/logo.png'
export function Header() {
    return (
        <>
            <img src={logo} className="absolute top-9 left-60 h-12 inline-block" alt="logo" />
            <div className='text-gray-400 text-center flex justify-center space-x-9 pt-10'>
                <h1>Products</h1>
                <h1>Services</h1>
                <h1>Industries</h1>
                <h1>Industries</h1>
                <h1>Industries</h1>
            </div>
        </>
    )
}