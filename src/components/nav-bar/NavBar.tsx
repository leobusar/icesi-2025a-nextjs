import Link from "next/link"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    {name: 'About', path:'/about'},
    {name: 'Profile', path:'/profile'},
    {name: 'Login', path:'/login'},
    {name:'Counter', path: '/counter'}
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
                        <ActiveLink {...item} key={item.path} />
                    ))
                }
            </div>
        </nav>
    )
}