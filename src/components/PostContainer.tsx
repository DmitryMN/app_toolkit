import React from 'react'
import { postApi } from '../services/PostService';
import { IPost } from '../models/IPost';
import { PostItem } from './PostItem';

const PostContainer = () => {
    const {data: posts, error ,isLoading} = postApi.useFetchAllPostsQuery(5);
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <div>Ошибка загрузки</div>}
                {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default PostContainer;