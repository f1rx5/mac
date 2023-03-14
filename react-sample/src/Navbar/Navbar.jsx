import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='#'className='navbar-brand'>React Practice</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link className='nav-link' to='/login'>Login-useRef</Link></li>
                <li className='nav-list'><Link className='nav-link' to='/expense'>Expense-Tracker</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar