import React, { Component } from 'react';

class ProductDetails extends Component {
   render() {
      return <>
         {/* <h4>Product Details</h4><hr /> */}
         {/* <pre> {JSON.stringify(this.props.SelectedProducts)} </pre> */}
         <div className="container mt-5">
            <div className="row">
               <div className="col">
                  <div className="card">
                     <div className="card-header">
                        <img src={this.props.SelectedProducts.image} className='img-fluid' />
                     </div>
                     <div className="card-body">
                        <h5>Price : {this.props.SelectedProducts.price} $</h5>
                        <hr />
                        <h6>{this.props.SelectedProducts.description}</h6>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   }
}

export default ProductDetails;