import React, { Component } from 'react'
import img1 from '../images/rahul.jpg'
import img2 from '../images/rupali.jpg'
import img3 from '../images/pic.jpg'

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <div class="about-section">
                    <h1>About Us</h1>
                    <p>We are currently students of MCA in University Of Hyderabad.</p>
                    <p>We are also working as interns at Techsophy Information Solutions Pvt Ltd.</p><br/>
                    <h1>Our Team</h1>
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="container">
                                    <img src={img1} class="img1" alt="Rahul"></img>
                                    <h2 class="title">Rahul Thakur</h2>
                                    <p class="title">Intern</p>
                                    <p class="title">rahulthakur1996@gmail.com</p>
                                    <p class="title">+91-8146057963</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="container">
                                    <img src={img2} class="img2" alt="Rupali"></img>
                                    <h2 class="title">Rupali Tomar</h2>
                                    <p class="title">Intern</p>
                                    <p class="title">rupalitomar98@gmail.com</p>
                                    <p class="title">+91-9893876404</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="container">
                                    <img src={img3} class="img3" alt="Neeraj"></img>
                                    <h2 class="title">Neeraj Chauhan</h2>
                                    <p class="title">Intern</p>
                                    <p class="title">kneeraj460@gmail.com</p>
                                    <p class="title">+91-9911680879</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-section">
                        <h1>Thank you for using our application.</h1>
                        <h2>Contact us for any queries.</h2>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent