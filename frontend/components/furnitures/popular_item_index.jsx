import React from 'react';
import { withRouter } from 'react-router-dom';
import PopularItem from './popular_item';



class PopularItemsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mostView: []
    }
  }

  componentDidMount() {
    this.props.fetchFurnitures()
      .then(() => 
        {
          const res = this.props.furnitures
          console.log("promise", res)

          let furnituresArr = Object.values(res)
          let temp = [];

          while(temp.length < 10) {
            let random = furnituresArr[Math.floor(Math.random() * furnituresArr.length)]
            if (!temp.includes(random)) {
              temp.push(random)
            }
          }
          this.setState({mostView: temp})
      })

  }

  

  // componentDidUpdate() {
  //   let furnituresArr = Object.values(this.props.furnitures);
  //   let temp = [];
  //   // console.log("random", furnituresArr)
  //   while(temp.length < 10) {
  //     let random = furnituresArr[Math.floor(Math.random() * furnituresArr.length)]
  //     if (!temp.includes(random)) {
  //       temp.push(random)
  //     }
  //   }
    
    // this.setState({
    //   mostView: temp
    // })
  




  render() {
    // console.log("popular Items", Object.values(this.props.furnitures))
    if (Object.keys(this.props.furnitures).length < 1) return null;
     
    return (
        <div className='best-items-container'>
          <div id="best10-items">
            <p>Best Selling Items</p>
          </div>
          <ul className="best-items">
            {
              this.state.mostView.map(furniture => (
                < PopularItem
                  furniture={furniture}
                  key={furniture.id}
                />
              ))
            }
          </ul>
        </div>
    )
  }
}

export default withRouter(PopularItemsIndex)