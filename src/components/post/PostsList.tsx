import {useState} from "react";
import axios from "axios";

import classes from './PostsList.module.css'

import {PostModel, PostsListModel} from "../../model/postModel";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "../common/Modal";

const PostsList = ({isPosting, onStopPosting}: PostsListModel) => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  const addPostHandler = async (post: PostModel) => {
    const url = process.env.URL || '';
    const response = await axios.post(url, post);

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
