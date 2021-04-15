import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import SignupService from "../api/SignupService.js";
import { useHistory } from 'react-router-dom';


const Example = (props) => {
    let history = useHistory();
    const [User, setUser] = useState({})
    const handleSubmit = (values) => {
        values.preventDefault();
        console.log(User);
        SignupService.addUser(User).then(
            (response)=>{
                console.log(response)
                history.push('/login');
            },
            (error)=>{
                console.log(alert("User already exist!!"))
            }
        )
    }

    return (
    <><h1> </h1>
        <div className="container" style={{ width: "700px", height : "550px"}}>
            <h1>Sign Up Form</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="name" className="mr-sm-2 " style={{ float: "left" }}><b>Name</b></Label>
                    <Input type="text" name="name" id="name" placeholder="Enter Your Name Here....." onChange={(e)=>{
                    setUser({...User,name:e.target.value})}}
                    ></Input><br/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="phone" className="mr-sm-2 " style={{ float: "left" }}><b>Mobile Number</b></Label>
                    <Input type="text" id="phone" name="phone" pattern="[0-9]{10}" placeholder="Enter Mobile Number....." onChange={(e)=>{
                    setUser({...User,mobile:e.target.value})}}
                    ></Input><br/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2 " style={{ float: "left" }}><b>Email</b></Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email Here....." onChange={(e)=>{
                    setUser({...User,email:e.target.value})}}
                    ></Input><br/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2" style={{ float: "left" }}><b>Password</b></Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter Password Here....." onChange={(e)=>{
                    setUser({...User,password:e.target.value})}}
                    ></Input><br/>
                </FormGroup>
                <FormGroup >
                    <Button className = "btn btn-success">Submit</Button>
                </FormGroup>

            </Form>
        </div>
        </>
    );
}

export default Example;