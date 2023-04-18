import {useState} from "react";

import MainHeader from "./components/common/MainHeader";
import PostsList from "./components/post/PostsList";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
      <>
        <MainHeader onCreatePost={showModalHandler}/>
        <main>
          <PostsList
              isPosting={modalIsVisible}
              onStopPosting={hideModalHandler}/>
        </main>
      </>
  )
};

export default App
