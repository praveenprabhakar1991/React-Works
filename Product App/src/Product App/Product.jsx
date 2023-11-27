import React from 'react'
import Axios from 'axios'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

class Product extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         Product: [],
         SelectedProducts: []
      }
   }

   SelectedProducts = (Product) => {
      this.setState({ SelectedProducts: Product })
   }

   componentDidMount = () => {
      let url = "https://fakestoreapi.com/products"
      Axios.get(url)
         .then((response) => {
            this.setState({ Product: response.data })
         })
         .catch((err) => { })
   }

   render() {
      return <>
         {/* <pre>{JSON.stringify(this.state)}</pre> */}
         <div className="container mt-5">
            {/* <h1>Products Component</h1><hr /> */}
            <div className="row">
               <div className="col-md-7 mt-5">
                  {
                     this.state.Product.length > 0 && <ProductList Products={this.state.Product} SelectedProducts={this.SelectedProducts} />
                  }

               </div>
               <div className="col-md-5 mt-5">
                  {
                     this.state.Product.length > 0 && <ProductDetails SelectedProducts={this.state.SelectedProducts} />
                  }

               </div>
            </div>
         </div>
      </>
   }
}

export default Product