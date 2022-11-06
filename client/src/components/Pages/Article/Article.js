import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogPost } from '../../../hooks/utils/getBlogPosts'

export default function Article() {

  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    getBlogPost(id).then(res => setPost(res))
  })

  return (
    <div className="container main-container article-container">
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  )
}
