import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Papa from 'papaparse'
import BlogPost from '../../BlogPost/BlogPost'

import './Blog.css';

export default function Blog() {

  const [posts, setPosts] = useState([]);

  const parseSheets = () => new Promise((resolve) =>{
    Papa.parse(process.env.REACT_APP_SHEETS_LINK, {
      download: true,
      header: true,
      newline: '',
      complete: (res, file) => {
        resolve(res.data)
      }
    })
  })

  const getPosts = async () => {
    return await parseSheets()
  }

  useEffect(() => {
    getPosts().then(res => setPosts([...res]))
  }, [])

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
            <BlogPost 
                img="https://media.tenor.com/images/208511f15d4d0d9dd09337fbff051948/tenor.png"
                title="My first post"
                link="random"
                tags="personal, opinion"
                description="A short introduction of what I'll write about in my blog and why I started it"
                pubdate="Oct 10, 2022"
            />

            {console.log(posts)}
        </div>
    </div>
  )
}