import React, { Component } from 'react';

class ProductList extends Component {

   SelectedProducts = (Product) => {
      this.props.SelectedProducts(Product)
   }

   render() {
      return <>
         <h4>Product List</h4><hr />
         {/* <pre>{JSON.stringify(this.props.Products)}</pre> */}
         <div className="container">
            <div className="row">
               <div className="col">
                  <table className='table table-hover'>
                     <thead className='bg-primary text-white'>
                        <tr>
                           <th>Id</th>
                           <th>Product Name</th>                           
                           <th>Category</th>
                           <th>Ratings</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           this.props.Products.map((Product) => {
                              return <tr key={Product.id} onMouseOver={this.SelectedProducts.bind(this, Product)} >
                                 <th>{Product.id}</th>
                                 <th>{Product.title}</th>                                 
                                 <th>{Product.category}</th>
                                 <th>{Product.rating.rate}</th>
                              </tr>
                           })
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   }
}

export default ProductList;