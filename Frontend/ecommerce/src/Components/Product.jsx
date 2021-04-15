import { Button } from "reactstrap";
import React, { Component } from "react";
import axios from "axios";
import base_url from "../api/baseapi";
class Product extends Component {
  constructor(props) {    
    super();
    this.state = {
      quantity:1
    };
    this.handleCart = this.handleCart.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  handleQuantityChange(e){
    this.setState({quantity:e.target.value});
  }
  handleCart(product){
    alert(product.name+ " has been added to your cart");
    product.quantity = this.state.quantity;
    axios.post(base_url+"/cart/"+product.id,product).then(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(console.log(error));
      }
    )
    console.log(this.state.quantity)
  }
  render() {
    return (
      <div
        style={{
          width: "285px",
          height: "360px",
          float: "left",
          marginTop: "30px",
          marginLeft: "10px",
          borderStyle: "groove",
        }}
      >
        <center>
          <img
            width="230px"
            height="200px"
            src={this.props.product.imagePath}
            alt="Product"
            style={{ marginTop: "5px" }}
          />
          <br></br>
          <span className="align-center">
            <b>{this.props.product.name} </b>
            <br />
            {this.props.product.description}
          </span>
          <br />
          <b>Rs.{this.props.product.price}</b>{" "}
          <small style={{ color: "red" }}>
            <del>{this.props.product.price + 1000}</del>
          </small>
          <span style={{ marginLeft: "10px" }}>
            size:{this.props.product.size}
          </span>
          <span style={{ marginLeft: "10px" }}>
            for: {this.props.product.gender}
          </span>
          <p>Qty: <input type="number"  min="1"
            style={{
              width:"50px",
              height:"25px"
            }} 
            onChange={(e)=>{
              this.props.product.quantity=e.target.value
              this.setState({quantity:e.target.value});
            }}
            value={this.state.quantity}
          /></p>
          <Button color="warning my-3" onClick={()=>{
          this.handleCart(this.props.product)
          }
          }> Add To Cart</Button>
        </center>
      </div>
    );
  }
}
export default Product;
