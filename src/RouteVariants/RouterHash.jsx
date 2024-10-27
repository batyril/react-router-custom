import {useEffect, useState} from 'react'
import {PAGES} from "../const.js";
import {AboutPage, HomePage, UserPage} from "../Pages..jsx";

const getHashPage = () => location.hash.slice(1);

function RouterHash() {
  const [page, setPage] = useState(getHashPage())

    const handleHashChange = () => {
        const newPageHash = getHashPage()
        setPage(newPageHash)
    };

    useEffect(() => {
        window.addEventListener('hashchange',handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    },[])

  return (
    <>
      <header>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#user">User</a>
      </header>
        <main>
            {page === PAGES.HOME && <HomePage/>}
            {page === PAGES.ABOUT && <AboutPage/>}
            {page === PAGES.USER && <UserPage/>}
        </main>
    </>
  )
}

export default RouterHash
