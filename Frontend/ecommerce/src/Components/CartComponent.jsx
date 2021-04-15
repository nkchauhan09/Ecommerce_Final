import React, { Component } from 'react'
import CartServices from './CartServices.js';
import Delete from '../svg/trash-alt-solid.svg';
import StripeCheckout from 'react-stripe-checkout';
class CartComponent extends Component {

    constructor(props) {
        super(props);

        this.onToken = this.onToken.bind(this);


        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        CartServices.getCart().then((response) => {
            this.setState({ cart: response.data });
        });
    }

    deleteProduct(id) {
        CartServices.deleteProduct(id).then(res => {
            this.setState({ cart: this.state.cart.filter(prod => prod.id !== id) });
        });

    }
    onToken(){
        alert("Your Order Has been Placed");
        CartServices.deleteCartProducts().then(
            (response)=>{                
                console.log("Empty");
            },
            (error)=>{
                console.log("Error");
            }
        )
        this.props.history.push("/products");
    }
    render() {
        var totalPrice = 0;
        for (var i = 0; i < this.state.cart.length; i += 1) {
            totalPrice = totalPrice + this.state.cart[i].quantity * this.state.cart[i].price;
        }
        console.log(this.state.cart);
        return (
            <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cart.map(
                                prod =>
                                    <tr key={prod.id}>

                                        <td>{prod.name}</td>
                                        <td>Rs. {prod.price}</td>
                                        <td>{prod.quantity}</td>
                                        <td>Rs. {prod.price * prod.quantity}</td>
                                        <td>

                                            <button onClick={this.deleteProduct.bind(this, prod.id)}><img src={Delete} alt="" width="20" /></button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="total">
                    <h3>Total : Rs {totalPrice} </h3>
                    <StripeCheckout
                        token={this.onToken}
                        name="E-Commerce Website"
                        currency="INR"
                        amount={totalPrice * 100}
                        billingAddress
                        stripeKey="pk_test_51Ig6JwSGpdEDnhx6dD7wP2VBIZHsvfrNxLecIqTeHAlrbj69BRZllx1oOeS7TGK8eIoGG0RML5xthX9M1HDSFylj00ZB03m73x"
                        token={this.onToken}
                    />

                </div>
            </div>
        )
    
    };
}

export default CartComponent;