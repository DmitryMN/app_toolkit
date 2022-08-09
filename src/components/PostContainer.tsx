import React from 'react'
import { postApi } from '../services/PostService';
import { IPost } from '../models/IPost';
import { PostItem } from './PostItem';

const PostContainer = () => {
    const {data: posts, error ,isLoading} = postApi.useFetchAllPostsQuery(100);
    const [createPost, {}] = postApi.useCreatePostMutation();
    const [updatePost, {}] = postApi.useUpdatePostMutation();
    const [removePost, {}] = postApi.useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title} as IPost);
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <div>Ошибка загрузки</div>}
                {posts && posts.map(post => <PostItem key={post.id} post={post} update={updatePost} remove={removePost} />)}
            </div>
        </div>
    )
}

export default PostContainer;