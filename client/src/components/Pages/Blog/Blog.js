import React from 'react'
import { useEffect, useState } from 'react'
import { getBlogPosts } from '../../../hooks/utils/getBlogPosts'
import BlogPost from '../../BlogPost/BlogPost'

import './Blog.css';

export default function Blog() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getBlogPosts().then(res => setPosts([...res]))
  }, [])

  function formatDate(date) {
    const dateObj = new Date(date)
    let options = {year: 'numeric', month: 'long', day: 'numeric'}
    return dateObj.toLocaleDateString("en-US", options)
  }

  return (
    <div className="container">
        <div className="centered">
            <h1>Welcome to my Blog!</h1>
            <h5>
                This is a space where I like to post quick tutorials, 
                experiences I've had, or anything else I want to rant about.
            </h5>
        </div>
        
        <div className="blog-post-container">


            {posts.map(post => {
              return(
                <BlogPost
                  key={post.slug}
                  img={post.img}
                  title={post.title}
                  slug={post.slug}
                  tags={post.tags}
                  description={post.content}
                  pubdate={formatDate(post.pubdate)}
                />
              )
            })}

        </div>
    </div>
  )
}