import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";
import base_url from "../api/baseapi"
class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get(`${base_url}/product`).then((response) => {
      console.log(response);
      this.setState({
        products: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <div >
          <h3>Products List</h3>
          {this.state.products.length > 0
            ? this.state.products.map((item) => <Product product={item} />)
            : "No Products Available"}
        </div>
      </div>

    );
  }
}
export default AllProduct;
