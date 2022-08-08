import React from 'react'
import { IPost } from '../models/IPost'

type PostItemType = {
  post: IPost
}

export const PostItem: React.FC<PostItemType> = ({ post }) => {
  return (
    <div className='post'>
      <p>
        {post.id}: {post.title}
      </p>
      <button>delete</button>
    </div>
  )
}
