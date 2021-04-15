import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class authenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}></Route>
        }
        else{
            return <Redirect to = "/login"></Redirect>
        }
    }
}

export default authenticatedRoute