import React from 'react'

class Product extends React.Component {
   state = {
      Name: "Apple iPhone 14 Plus (512 GB) - RED",
      Product_Price: 101999,
      Ratings: 5,
      Image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70',
      Quantity: 1
   }

   // decrHandler = () => {
   //    this.setState({ Quantity: this.state.Quantity - 1 })
   // }

   // incrHandler = () => {
   //    this.setState({ Quantity: this.state.Quantity + 1 })
   // }

   render() {
      return <>
         <div className="container mt-5">
            <div className="row">
               <div className="col-md-5">
                  <div className="card">
                     <div className="card-header">
                        <h4>{this.state.Name}</h4>
                        <hr />
                        <img src={this.state.Image} className="img-fluid" />
                        <div className="btn btn-outline-success mt-4">Add To Cart</div>
                        <div className="btn btn-outline-danger mx-4 mt-4">Buy Now</div>
                     </div>
                     <div className="card-body">
                        <h5> Rating : {this.state.Ratings} </h5>
                        <hr />
                        <h5> Price : {this.state.Product_Price} </h5>
                        <hr />
                        <h5> Quantity : &nbsp;
                           <i class="fa-solid fa-minus" onClick={() => { this.setState({ Quantity: this.state.Quantity - 1 }) }}> </i> &nbsp;
                           {this.state.Quantity} &nbsp;
                           <i class="fa-solid fa-plus" onClick={() => { this.setState({ Quantity: this.state.Quantity + 1 }) }}></i> </h5>
                        <hr />
                        <h4> Total Price : {this.state.Quantity * this.state.Product_Price} </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   }
}

export default Product