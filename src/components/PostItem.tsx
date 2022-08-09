import React from 'react'
import { IPost } from '../models/IPost'

type PostItemType = {
  post: IPost
  update: (post: IPost) => void
  remove: (post: IPost) => void
}

export const PostItem: React.FC<PostItemType> = ({ post, update, remove }) => {

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({...post, title});
  }

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  }

  return (
    <div className='post' style={{border: "1px solid black"}} onClick={handleUpdate}>
      <p>
        {post.id}: {post.title}
      </p>
      <button onClick={handleRemove}>delete</button>
    </div>
  )
}
