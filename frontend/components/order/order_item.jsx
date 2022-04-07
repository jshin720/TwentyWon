import React from "react";
import { Link } from "react-router-dom";
import { deleteOrder } from "../../util/order_api_util";
import * as HiIcon from 'react-icons/hi';



class OrderItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.order.quantity
    }
    
    
    this.addQuantity = this.addQuantity.bind(this);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.deleteOrderStateId = this.deleteOrderStateId.bind(this);
  }

  
  addQuantity() {
    const plusOne = this.state.quantity + 1;

    this.setState({
      quantity: plusOne
    },
    () => this.props.updateOrder({ ...this.props.order, quantity: plusOne})
    )
  }


  subtractQuantity() {
    const minusOne = this.state.quantity - 1;

    this.setState({
      quantity: minusOne
    },
    () => this.props.updateOrder({...this.props.order, quantity: minusOne})
    )

  }

 deleteOrderStateId() {
   this.props.deleteOrder(this.props.order.id)

  //  this.setState({
  //    category: "" ,
  //    color: "",
  //    furniture_id: "",
  //    id: "",
  //    name: "",
  //    price: "",
  //    quantity: "",
  //    user_id: ""
  //  })
 }


  render() {
    

    return (
      <div id="quantity-container">
        <p id="furniture-price"> Price: $ {this.props.order.price * this.state.quantity}.00 </p>
        <div id="buttons-container">
          <div id="quantity-button-container">
            <button id="quantity-button" disabled={this.state.quantity < 2} onClick={this.subtractQuantity}>
              <HiIcon.HiOutlineMinus />
            </button>
            <p id="quantity-number"> Qty: {this.state.quantity}</p>
            <button id="quantity-button" onClick={this.addQuantity}>
              <HiIcon.HiOutlinePlus />
            </button>
          </div>
            <button id="remove-item" onClick={this.deleteOrderStateId}>Remove</button>
        </div>
        <p id="shipping-info"> Shipping:
          This product is made to order. Estimated delivery: 14-16 weeks.
        </p>
      </div>
    )
  }

}

export default OrderItem;