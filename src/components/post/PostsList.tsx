import {useLoaderData} from "react-router-dom";

import classes from './PostsList.module.css'

import {PostModel} from "../../model/postModel";

import Post from "./Post";

const PostsList = () => {
  const posts = useLoaderData() as PostModel[];

  return (
      <>
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
