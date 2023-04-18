import {useState, useEffect, useReducer} from "react";
import axios from "axios";

import classes from './PostsList.module.css'

import {PostModel} from "../../model/postModel";

import Post from "./Post";

const httpInitState = {
  isFetching: false,
  error: '',
}

const httpReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SEND':
      return {isFetching: true, error: ''};
    case 'RESPONSE':
      return {...state, isFetching: false};
    case 'ERROR':
      return {isFetching: false, error: action.errorMessage};
    case 'CLEAR':
      return httpInitState;
    default:
      throw new Error('Should not be reached!');
  }
}

const URL = `${import.meta.env.VITE_DUMMY_URL}/${import.meta.env.VITE_DUMMY_DB}`;

const PostsList = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [httpState, dispatchHttp] = useReducer(httpReducer, httpInitState);

  useEffect(() => {
    try {
      const axiosPosts = async () => {
        dispatchHttp({type: 'SEND'});
        const response = await axios.get(URL);

        setPosts(response.data.posts);
        dispatchHttp({type: 'RESPONSE'});
      }
      axiosPosts().catch((error) => {
        throw new Error(error);
      });
    } catch (error) {
      dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong!'});
    }
  }, []);

  const addPostHandler = async (post: PostModel) => {
    const response = await axios.post(URL, post);

    setPosts((prevPosts) => {
      return [post, ...prevPosts];
    });
  }

  return (
      <>
        {!httpState.isFetching && posts.length > 0 &&
            <ul className={classes.posts}>
              {posts.map((post, index) => (
                  <Post key={index} author={post.author} body={post.body}/>
              ))}
            </ul>
        }
        {!httpState.isFetching && posts.length === 0 &&
            <div className={classes.noPosts}>
              <h2>There are no posts yet.</h2>
              <p>Start adding some!</p>
            </div>
        }
        {httpState.isFetching &&
            <div className={classes.loading}>
              <p>Loading...</p>
            </div>
        }
      </>
  )
}

export default PostsList
