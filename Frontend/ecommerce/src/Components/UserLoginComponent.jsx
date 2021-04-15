import axios from 'axios'
import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import { Button, Form, Label, Input } from 'reactstrap';
import FooterComponent from './FooterComponent';

class UserLoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        // console.log(this.state)
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.name)
    //     this.setState(
    //         {
    //             [event.target.name]
    //             :event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        let email = this.state.username;
        let password = this.state.password;
        let data = {
            "id": "0",
            "name": "",
            "mobile": "",
            "email": email,
            "isAdmin": false,
            "password": password
        }
        axios.post(`http://localhost:8080/login`, data).then(
            (response) => {
                sessionStorage.setItem('authenticatedUser', this.state.username);
                this.setState({ showSuccessMessage: true })
                this.setState({ hasLoginFailed: false })
                this.props.history.push(`/products`)
            }, (error) => {
                console.log();
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            }
        )
        // if(this.state.username === 'user' && this.state.password === 'neeraj'){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // this.setState({showSuccessMessage:true})
        // this.setState({hasLoginFailed:false})
        // }
        // else{
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }
    }

    render() {
        return (
            <>
                <h1>Welcome to ShoppingCart</h1><br/>
                <div className="container" style={{ width: "500px", height : "500px"}}>
                    <h1>Login Here</h1>
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {/* <ShowLoginSeccessful showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSeccessful> */}
                    <Form >
                        <Label for="exampleEmail" className="mr-sm-2 " style={{ float: "left" }}><b>Email</b></Label>
                        <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Email Here....."></Input><br />
                        <Label for="phone" className="mr-sm-2 " style={{ float: "left" }} ><b>Password</b></Label>
                        <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password Here....."></Input><br />
                        <Button className="btn btn-success" onClick={this.loginClicked}>Login</Button><br/><br/>
                        <h5>If not a user then click <Link className = "nav-link" to = "/signup">HERE</Link> to register</h5>
                    </Form>
                </div>
                <FooterComponent></FooterComponent>
            </>
        )
    }
}

export default UserLoginComponent