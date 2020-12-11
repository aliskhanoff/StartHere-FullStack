import React from 'react'
import { Link } from 'react-router-dom'



export const MainLayout = ({ children }) => {
    return (
        <div className="columns">
            <div className="column is-auto"></div>
            <div className="column is-8">
                
                <nav className="navbar">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link to='/' className="navbar-item">Home</Link>
                        </div>
                        <div className="navbar-end">
                            <Link className="navbar-item" to='/about'>About</Link>
                            <Link className="navbar-item" to='/contacts'>Contacts</Link>
                        </div>
                    </div>
                </nav>

                {children}

            </div>
            <div className="column is-auto"></div>
        </div>
    )
}

export default MainLayout
