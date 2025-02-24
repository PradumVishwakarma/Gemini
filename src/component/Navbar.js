import React from 'react'
import Logo from "./Gemini_logo.svg.png";
import "../App.css"

const Navbar = () => {
    return (
        <div >
            <nav className="navbar " style={{ height: '10vh' }}>
                <div className="container-fluid w-100 d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="/">Pradum Gemini</a>
                    <img src={Logo} alt="" height={'80%'} width={'100px'} style={{ marginRight: '20px' }} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
