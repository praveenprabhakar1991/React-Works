import React from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

class News extends React.Component {

   static defaultProps = {
      country: 'in',
      category: 'general',
      pageSize: 9,
   }

   static propTypes = {
      country: PropTypes.string,
      category: PropTypes.string,
      pageSize: PropTypes.number,
   }

   Capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
   }

   constructor() {
      super()
      this.state = {
         articles: [],
         Loading: false,
         page: 1
      }
   }

   async updateNews() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae8749e0ecaa4ddd87b726ae09800b89&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ Loading: true })
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
         articles: parsedData.articles,
         totalResults: parsedData.totalResults,
         Loading: false
      })

   }

   async componentDidMount() {      
      this.updateNews()
   }

   backclickHandler = async () => {      
      this.setState({ page: this.state.page - 1 })
      this.updateNews()
   }

   nextclickHandler = async () => {      
      this.setState({ page: this.state.page + 1 })
      this.updateNews()
   }


   render() {
      return <>
         <h1 className='text-center mt-5'> News App - Top {this.Capitalize(this.props.category)} Headlines</h1>
         <div className="container">
            {this.state.Loading && <Spinner />}
            <div className="row">
               {!this.state.Loading && this.state.articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                     <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : " "}
                        imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
                  </div>
               })}
            </div>
            <div className="container d-flex justify-content-between mt-5">
               <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.backclickHandler}>&larr; Back</button>
               <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextclickHandler} >&rarr; Next</button>
            </div>
         </div >
      </>
   }
}

export default News