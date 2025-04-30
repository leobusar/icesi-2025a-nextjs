import Link from "next/link"

const navItems = [
    {name: 'About', path:'/about'},
    {name: 'Profile', path:'/profile'},
    {name: 'Login', path:'/login'},
]

export const NavBar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-80 p-2 m-2 rounded">
            <Link href="/" className='p-2 m-2 text-white'>Home</Link>
            {
            /*
            <Link href="/about" className='p-2 m-2 text-white'>About</Link>
            <Link href="/profile" className='p-2 m-2 text-white'>Profile</Link>
            <Link href="/login" className='p-2 m-2 text-white'>Login</Link>
            */
            }
            <div className="flex flex-1">
                {
                    navItems.map(item => (
                        <Link href={item.path} className='p-2 m-2 text-white'>{item.name}</Link>
                    ))
                }
            </div>
        </nav>
    )
}