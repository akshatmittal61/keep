import React from 'react'
import { Link } from 'react-router-dom';
import Theme from './theme'

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <Link to='/' className="header-logo">
                    Keeper
                </Link>
            </div>
            <div className="header-right">
                <div className="header-right-links">
                    <div className="header-right-link">
                        <Theme />
                    </div>
                    <div className="header-right-link">
                        <Link to='/' className="contact-us">
                            <span className="material-icons">home</span>
                        </Link>
                    </div>
                    <div className="header-right-link">
                        <Link to='/about' className="contact-us">
                            <span className="material-icons">info</span>
                        </Link>
                    </div>
                    <div className="header-right-link">
                        <Link to='/add' className="contact-us">
                            <span className="material-icons">add</span>
                        </Link>
                    </div>
                    <div className="header-right-link">
                        <Link to='/contact' className="contact-us">
                            <span className="material-icons">account_circle</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
