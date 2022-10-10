import React from 'react'
import BlogPost from '../../BlogPost/BlogPost';

import './Blog.css';

export default function Blog() {
  return (
    <div className="container">
        <h1>Welcome to my Blog!</h1>
        <h5>
            This is a space where I like to post quick tutorials, 
            experiences I've had, or anything else I want to rant about.
        </h5>
        
        <BlogPost 
            img="https://media.tenor.com/images/208511f15d4d0d9dd09337fbff051948/tenor.png"
            title="My first post"
            link="random"
            tags="personal, opinion"
            description="A short introduction of what I'll write about in my blog and why I started it"
            pubdate="Oct 10, 2022"
        />
    </div>
  )
}
