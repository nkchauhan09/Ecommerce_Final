import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import CartComponent from './CartComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import ProductComponent from './ProductComponent'
import SignupComponent from './SignupComponent'
import UserLoginComponent from './UserLoginComponent'
import AdminPanel from './AdminPanel'
import ModifyProducts from './ModifyProducts.jsx'

class Ecommerce extends Component
{
    render(){
        return(
            <div className = 'Ecommerce'>
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path = "/" exact component = {UserLoginComponent}></Route>
                            <Route path = "/login" component = {UserLoginComponent}></Route>
                            <AuthenticatedRoute path = "/admin" component = {AdminPanel}></AuthenticatedRoute>
                            <AuthenticatedRoute path = "/logout" component = {LogoutComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path = "/products" component = {ProductComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path = "/modifyProduct/:id" component = {ModifyProducts}></AuthenticatedRoute>
                            <Route path = "/signup" component = {SignupComponent}></Route>
                            <AuthenticatedRoute path = "/cart" component = {CartComponent}></AuthenticatedRoute>
                            <Route component = {ErrorComponent}></Route>                        </Switch>
                        
                    </>              
                </Router>
            </div>
        )
    }
}


export default Ecommerce