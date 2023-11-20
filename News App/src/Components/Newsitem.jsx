import React, { Component } from 'react'
import Imagenotavailable from './Assets/Imagenotavailable.png'

class Newsitem extends Component {

   render() {

      let { title, description, imageUrl, newsUrl, source, author, date } = this.props

      return <>
         <div className="card mt-5">
            <span className="position-absolute start-50 translate-middle badge rounded-pill bg-danger"> {source} </span>
            <img src={!imageUrl ? Imagenotavailable : imageUrl} className="card-img-top img-fluid" />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
               <p className="card-text"><small className="text-danger"> {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
               <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-outline-dark">Read More</a>
            </div>
         </div>
      </>
   }
}

export default Newsitem
