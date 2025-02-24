import React from 'react'
import Logo from "./Gemini_logo.svg.png";

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg  d-flex" style={{height:'60px'}}>
                <div className="container-fluid" style={{width: '90%'}}>
                    <a className="navbar-brand" href="/">Navbar</a>
                </div>
                <img src={Logo} alt=""  height={'80%'} width={'100px'} style={{marginRight:'20px'}}/>
            </nav>
        </div>
    )
}

export default Navbar
