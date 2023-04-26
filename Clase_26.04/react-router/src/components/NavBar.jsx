import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/empresa'>Empresa</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto'>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to='/acerca'>Acerca de</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar