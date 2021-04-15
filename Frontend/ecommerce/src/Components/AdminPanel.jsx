import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";
class AdminPanel extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [
      ],
      message: null,
      isModelOpen: false,
      modalProduct: null,
    };
    this.AddClicked = this.AddClicked.bind(this);
    this.productTable = this.productTable.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.refreshProductList();
  }

  refreshProductList() {
    axios.get("http://localhost:8080/product").then(
      (response) => {
        this.setState({ products: response.data });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteTodoClicked(id) {
    axios.delete(`http://localhost:8080/product/${id}`).then((response) => {
      this.setState({ message: `Delete of products ${id} Successful` });
      this.refreshProductList();
    });
  }
  handleModal(p) {
    console.log(p);
    this.setState({ isModelOpen: !this.state.isModelOpen });
    this.setState({ modalProduct: p });
  }
  productTable() {
    return (
      <>
      <div style={{ padding: "5px" }} className="container">
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Price</th>
              <th>Gender</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>color</th>
              <th>Details</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.type}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.gender}</td>
                <td>{product.quantity}</td>
                <td>{product.size}</td>
                <td>{product.color}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => this.handleModal(product)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.updateTodoClicked(product.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteTodoClicked(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
      
    );
  }

  AddClicked() {
    this.props.history.push("/modifyProduct/-1");
  }

  updateTodoClicked(id) {
    this.props.history.push(`/modifyProduct/${id}`);
    // console.log(id);
  }

  render() {
    return (
      <div className="container">
        <div>
          <Modal isOpen={this.state.isModelOpen}>
            {this.state.modalProduct != null && (
              <div className="container">
                <center>
                  <div className="container">
                    <img
                      src={this.state.modalProduct.imagePath}
                      height="300px"
                      width="300px"
                      alt="Product"
                    />
                    <br></br>
                    <span className="align-center">
                      <b>{this.state.modalProduct.name} </b>
                      <br />
                      {this.state.modalProduct.description}
                    </span>
                    <br />
                    <b>Rs.{this.state.modalProduct.price}</b>{" "}
                    <small style={{ color: "red" }}>
                      <del>{this.state.modalProduct.price + 1000}</del>
                    </small>
                    <span style={{ marginLeft: "10px" }}>
                      size:{this.state.modalProduct.size}
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      for: {this.state.modalProduct.gender}
                    </span>
                  </div>

                  <button onClick={this.handleModal}>Close</button>
                </center>
              </div>
            )}
          </Modal>
        </div>
        <center>
          <h1 id="title">ProductList</h1>
        </center>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div style={{ padding: "30px", float: "right" }}>
          <button className="btn btn-success" onClick={this.AddClicked}>
            Add New product
          </button>
        </div>
        {this.productTable()}
      </div>
    );
  }
}
export default AdminPanel;
