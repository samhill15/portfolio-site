import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPost(props) {
  return (
    <div>
        <hr />
        <div className="split blog-post">
            <div className="centered blog-img-container">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="blog-details">
                <div className="blog-desc-container">
                    <h3 className="blog-title"><Link to={`${props.slug}`}>{props.title}</Link></h3>
                    <p className="blog-desc">{props.description.replace( /(<([^>]+)>)/ig, ' ')}</p>
                </div>
                <div className="blog-footer">
                    <p>{props.pubdate}</p>
                    <p>{props.tags}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
