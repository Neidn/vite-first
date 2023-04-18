import {Outlet} from "react-router-dom";
import MainHeader from "../components/common/MainHeader";

const RootLayout = () => {
  return (
      <>
        <MainHeader onCreatePost={() => {
        }}/>
        <main>
          <Outlet/>
        </main>
      </>
  )
}

export default RootLayout
