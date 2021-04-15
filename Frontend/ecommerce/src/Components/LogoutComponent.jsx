import React, {Component} from 'react'
import FooterComponent from './FooterComponent'

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>You are Logged Out</h1>
                <div className = "container">
                    Thankyou for using our application.
                </div>
                <FooterComponent></FooterComponent>
            </>
        )
    }
}

export default LogoutComponent