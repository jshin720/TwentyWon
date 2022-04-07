import React from 'react';
import { withRouter } from 'react-router-dom';
import CreateReviewForm from '../reviews/create_review';
import ReviewItemContainer from '../reviews/review_item_container';
import Carousel from '../carousel/carousel';
import * as MdIcon from 'react-icons/md';
import { Link } from 'react-router-dom'



class FurnitureShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      createReview: false,
      quantity: 1
    };

    this.addToOrders = this.addToOrders.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this)
    this.toggleCreateReview = this.toggleCreateReview.bind(this);
    this.changeQuantityHandler = this.changeQuantityHandler.bind(this);

  }

  componentDidMount() {
    // this.props.fetchFurniture(this.props.match.params.furnitureId);
    this.props.fetchFurnitures();
    this.props.fetchReviews();
    this.props.fetchUsers();

  }

  componentDidUpdate(prevProps) {
    
    if (Object.values(this.props.reviews).length !== Object.values(prevProps.reviews).length) {
      this.props.fetchReviews()
    }

    if (prevProps.match.params.furniture_id !== this.props.match.params.furniture_id) {
      this.props.fetchFurniture()
      this.props.fetchReviews()
    }
  }

  componentWillUnmount() {
    this.props.clearReviews();
  }

  toggleCreateReview() {
    this.setState({ createReview: !this.state.createReview })
  }

  changeQuantityHandler(e) {
    this.setState({ quantity: e.currentTarget.value })
  }

  addToOrders(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      // if (this.props.currentUser.order[furnitureid] === undefined) {
      let order = { furniture_id: this.props.furniture.id, quantity: this.state.quantity, user_id: this.props.currentUser.id }
      this.props.createOrder(order)
    } else {
      this.props.history.push('/login');
    }
  }


  madeReview(userId) {
    if (this.props.currentUser) {
      for (let review in this.props.reviews) {
        
        if (this.props.reviews[review].reviewer_id === this.props.currentUser.id) {
          return true;
        }
      }
      return false;
    }
  }


  render() {
    let { furniture } = this.props
   
    if (!furniture) {
      return null;
    } 
    
    // if(!this.props.users || Object.keys(this.props.users.length) < 2) return null;
    
      
    return (


      <div className="furniture-show-container">

        <div className="return-button">
          <Link className="return-link" to={`/furnitures/${furniture.category}`}> <MdIcon.MdOutlineArrowBackIosNew className='return-icon'/>  Return to {furniture.category}s
          </Link>
        </div>


        <div className="furniture-show-info">
          
            < Carousel 
            className="picture-carousel"
              furniture={furniture}
            />
          
          <div className="furniture-info">
            <h1 className="furniture-name">{furniture.name} </h1>
            
            <div className="price-container">
            <p className="furniture-price"> {`$ ${furniture.price}.00`} </p>
            <p className="furniture-color"> Shown in {furniture.color} </p>
            <p className="furniture-category">{furniture.category} </p>
            <p className="furniture-description"> {furniture.description} </p>
            </div>
            <form className="to-orders-container" onSubmit={this.addToOrders}>
              <select name="quantity" className="orders-quantity-container" value={this.state.quantity} onChange={this.changeQuantityHandler} >
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
                <option value="6"> 6 </option>
                <option value="7"> 7 </option>
                <option value="8"> 8 </option>
                <option value="9"> 9 </option>
              </select>
              <button className="order-buttons" type="submit" > {`$ ${furniture.price}.00`} -- Add To Cart</button>
            </form>
          </div>
        </div>

        <div className="additional-info-container">
          {/* <div className="temp-div"></div> */}
          <img src={furniture.photoUrls[furniture.photoUrls.length-1]} alt=""/>
          <div className='extra-details'>
            <h2>Dimensions: </h2>
            <p className='dimensions'>{furniture.dimension}</p>
            <br/>
            <h2>Highlights:</h2>
            <p className='highlights'>{furniture.highlight}</p>
          </div>
        </div>
        <div className="delivery-container">
          <img src="https://twenty-won-images.s3.us-east-2.amazonaws.com/deliverypic.png" alt="" />
        </div>

        <div className="review-section">

          {!this.state.createReview ?
            <div className="review-container">
              <h1>Reviews:</h1>
              <ul>
                {
                  Object.values(this.props.reviews).map((review, i) => {

                    return <ReviewItemContainer
                      key={i}
                      review={review}
                      updateReview={this.props.updateReview}
                      deleteReview={this.props.deleteReview}
                      fetchUsers={this.props.fetchUsers}
                    />
                  })
                }
              </ul>
              {(!this.state.createReview && this.madeReview(this.props.currentUser)) || (!this.state.createReview && !this.props.currentUser) ?

                null
                :
                <>
                  <button type="submit" onClick={this.toggleCreateReview} className="material-icons-outlined add-review">WRITE A REVIEW</button>
                </>
              }

            </div>

            :

            <div className="toggle-review">
              {
                this.madeReview(this.props.currentUser) || !this.props.currentUser ? null :
                  <CreateReviewForm
                    currentUser={this.props.currentUser}
                    furniture={this.props.furniture}
                    errors={this.props.errors}
                    removeReviewErrors={this.props.removeReviewErrors}
                    createReview={this.props.createReview}
                    toggleCreateReview={this.toggleCreateReview}
                    users={this.props.users}
                  />
              }
            </div>
          }
        </div>

      </div>
    )
  }

}

export default withRouter(FurnitureShow);