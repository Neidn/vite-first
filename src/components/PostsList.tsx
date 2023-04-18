import {useState} from "react";

import classes from './PostsList.module.css'

import {PostModel, PostsListModel} from "../model/postModel";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostsList = ({isPosting, onStopPosting}: PostsListModel) => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  const addPostHandler = (post: PostModel) => {
    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  }

  return (
      <>
        {isPosting &&
            <Modal onClose={onStopPosting}>
              <NewPost
                  onAddPost={addPostHandler}
                  onCancel={onStopPosting}/>
            </Modal>
        }
        {posts.length > 0 &&
            <ul className={classes.posts}>
              {posts.map((post, index) => (
                  <Post key={index} author={post.author} body={post.body}/>
              ))}
            </ul>
        }
        {posts.length === 0 &&
            <div className={classes.noPosts}>
              <h2>There are no posts yet.</h2>
              <p>Start adding some!</p>
            </div>

        }
      </>
  )
}

export default PostsList
