import React from 'react'

class Product_1 extends React.Component {

   state = {
      Name: "Apple iPhone 14 Plus (512 GB) - RED",
      Price: 101999,
      Ratings: 5,
      Image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70',
      Quantity: 1
   }

   decrHandler = () => {
      this.setState({ Quantity : this.state.Quantity - 1 })
   }
   incrHandler = () => { 
      this.setState({Quantity: this.state.Quantity + 1})
   }

   render() {
      return <>
         <div className="container mt-5">
            <div className="row">
               <div className="col-md-4">
                  <div className="card">
                     <div className="card-header">
                        {this.state.Name}
                     </div>
                     <div className="card-body">
                        <img src={this.state.Image} alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-md-8">
                  <div className="table">
                     <thead className='table-dark'>
                        <tr>
                           <th>Product Name</th>
                           <th>Ratings</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>{this.state.Name}</td>
                           <td> {this.state.Ratings} </td>
                           <td> {this.state.Price} </td>
                           <td> <i class="fa-solid fa-minus-circle" onClick={this.decrHandler}> </i> {this.state.Quantity} <i class="fa-solid fa-plus-circle" onClick={this.incrHandler}></i></td>
                           <td> {this.state.Quantity * this.state.Price} </td>
                        </tr>
                     </tbody>
                  </div>
               </div>
            </div>
         </div>
      </>
   }
}

export default Product_1