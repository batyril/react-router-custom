import {Link, Route, Routes} from "react-router-dom";
import {PAGES} from "./const.js";

const HomePage = () => <p>Home Page</p>
const AboutPage = () => <p>About Page</p>
const UserPage = () => <p>User Page</p>

function ReactRouter() {
  return (
    <>
      <header>
          <Link to={PAGES.HOME}> Home</Link>
          <Link to={PAGES.ABOUT} >About</Link>
          <Link to={PAGES.USER} >User</Link>
      </header>
        <main>
            <Routes>
                <Route path={PAGES.HOME} element={<HomePage/>} />
                <Route path={PAGES.ABOUT} element={<AboutPage/>} />
                <Route path={PAGES.USER} element={<UserPage/>} />
            </Routes>
        </main>
    </>
  )
}

export default ReactRouter
