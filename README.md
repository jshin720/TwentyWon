# README

#TwentyWon

TwentyWon is a clone of a  e-commerce furniture store called Sixpenny.com. The user is able to search through the site to find furniture, browse through the different furnitures, leave reviews for the specific furniture, add/remove to and from the cart. 
The user is also able to add and subtract quantity of furniture into and out of the cart
The site built using the Rails on the backend and React/Redux on the frontend.
Users are able to sign in and sign up by going to the respective create user page or the login page. 
The Nav Bar shows links to the furniture page, cart page, the login page and the middle logo leads back to the main page. 

[Live Site](https://twentywon.onrender.com)

# Features

## User Auth
- Users can sign in and/or create a new user 
![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.05.20%20AM.png)
![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.05.30%20AM.png)
- User can sign in.
  ```rb
   def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    puts @user
    if @user.nil?
      render json: ['Incorrect email or password.'], status: 401
    else
      login(@user)
      render '/api/users/show'
    end
  end
  ```
- Users can also create a new account.
  ```rb
    def create
    @user = User.new(user_params)
    if @user.save 
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 406
      # render json: ["input Username and/or Password"], status: 401
    end
  end
  ```

## Furnitures
- User can browse through the furnitures
![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.29.39%20AM.png)
![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.10.00%20AM.png)
- Users can search for the furniture they are looking for.
![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.30.02%20AM.png)

## Orders
 - User can add, remove and change the quantity into and out of the cart
 ![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.05.58%20AM.png)
 ```js
    addToOrders(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      let order = { furniture_id: this.props.furniture.id, quantity: this.state.quantity, user_id: this.props.currentUser.id }
      this.props.createOrder(order)
    } else {
      this.props.history.push('/login');
    }
  }
```
## Reviews
- Users can write, edit and leave reviews for a specific furniture
![alt text](https://github.com/jshin720/twentyWon/blob/main/screenshots/Screen%20Shot%202022-04-07%20at%2012.06.37%20AM.png)
```js
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
```

## Technologies Used
- Ruby 2.7.2
- Rails 5.2.6
- Node v10.13.0 (JavaScript, React, Redux)
- Postgresql 14
- AWS S3
- HTML with SCSS

## Future Plans
- implementing Wishlist
