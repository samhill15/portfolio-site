import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogPost } from '../../../hooks/utils/getBlogPosts'
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation'

export default function Article() {

  const { id } = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getBlogPost(id).then(res => {
      setPost(res)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [id])

  return (
    <div className="container main-container article-container">
      {loading && <LoadingAnimation />}
      {!loading && <div dangerouslySetInnerHTML={{ __html: post.content }}></div>}
    </div>
  )
}
