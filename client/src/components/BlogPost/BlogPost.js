import React from 'react'

export default function BlogPost(props) {
  return (
    <div>
        <hr />
        <div className="split blog-post">
            <div className="centered blog-img-container">
                <img src={props.img} alt={props.title} />
            </div>
            <div className="blog-details">
                <div className="blog-desc">
                    <h3 className="blog-title"><a href={props.slug}>{props.title}</a></h3>
                    <p>{props.description}</p>
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
