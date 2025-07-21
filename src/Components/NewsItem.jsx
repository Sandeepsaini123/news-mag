import React from 'react'
import image from '../assets/news.jpeg'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-2 d-inline-block mx-2 my-2 px-2 py-2" style={{maxWidth: "298px"}}>
      <img src={src?src:image} style={{height: "200px", width: "284px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):'No description available.'}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
</div>
  )
}
export default NewsItem
