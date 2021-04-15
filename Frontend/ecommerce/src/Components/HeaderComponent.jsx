import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component{
    render(){
        const isAdmin = AuthenticationService.isAdmin();
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isAdmin);
        return(
            <header className="mb-5px">
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className = "navbar-nav">
                        <li><Link className = "nav-link navbar-brand">ShoppingCart</Link></li>
                        {isUserLoggedIn && <li><Link className = "nav-link" to = "/products">Products</Link></li>}
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                    {isAdmin && <li><Link className = "nav-link" to = "/admin" >Admin</Link></li>}
                        {!isUserLoggedIn && <li><Link className = "nav-link" to = "/signup">Signup</Link></li>}
                        {!isUserLoggedIn && <li><Link className = "nav-link" to = "/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className = "nav-link" to = "/logout" onClick = {AuthenticationService.logout}>Logout</Link></li>}
                        {isUserLoggedIn && <li><Link className = "nav-link" to = "/cart">Cart</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent