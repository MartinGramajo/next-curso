import Link from 'next/link'
import { HomeFillIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'


const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]



export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
      <Link href={'/'}>
        <HomeFillIcon size={16} />
        <span className='ms-2'>Home</span>
      </Link>

      <div className='flex flex-1'>
      </div>

      {/* Forma dinámica de crear una barra de navegación */}
      {
        navItems.map(navItem => (
          // <Link key={navItem.path} className='mr-2' href={navItem.path} > {navItem.text}</Link>
          <ActiveLink
            key={navItem.path}
            // esta es otra forma de enviar todas las props que voy a ocupar en el componente 
            {...navItem}

          />

        ))
      }

      {/* <Link className='mr-2' href="/about">About</Link>
      <Link className='mr-2' href="/pricing">Pricing</Link>
      <Link className='mr-2' href="/contact">Contact</Link> */}
    </nav >
  )
}
