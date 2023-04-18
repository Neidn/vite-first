import {Outlet} from "react-router-dom";
import axios from "axios";

import PostsList from "../components/post/PostsList";

const Posts = () => {

  return (
      <>
        <Outlet/>
        <main>
          <PostsList/>
        </main>
      </>
  )
};

export default Posts

const URL = `${import.meta.env.VITE_DUMMY_URL}/${import.meta.env.VITE_DUMMY_DB}`;

export const loader = async () => {
  const response = await axios.get(URL);

  return response.data.posts;
}
