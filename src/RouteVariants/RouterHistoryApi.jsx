import {useEffect, useState} from 'react'
import {PAGES} from "../const.js";
import {AboutPage, HomePage, UserPage} from "../Pages..jsx";

const getPathPage = () => location.pathname.slice(1);

function RouterHistoryApi() {
  const [page, setPage] = useState(getPathPage())



    const handleLinkClick = (e) => {
        e.preventDefault();
        history.pushState({},'',e.target.href)
        handlePathChange()
    }

    const handlePathChange = () => {
        const newPagePath = getPathPage()
        setPage(newPagePath)
    };

    useEffect(() => {
        //работа с историей браузера
        window.addEventListener('popstate', handlePathChange);
        return () => {
            window.removeEventListener('popstate', handlePathChange);
        };
    }, []);

  return (
    <>
      <header>
          <a onClick={handleLinkClick} href="/home">Home</a>
          <a onClick={handleLinkClick} href="/about">About</a>
          <a onClick={handleLinkClick} href="/user">User</a>
      </header>
        <main>
            {page === PAGES.HOME && <HomePage/>}
            {page === PAGES.ABOUT && <AboutPage/>}
            {page === PAGES.USER && <UserPage/>}
        </main>
    </>
  )
}

export default RouterHistoryApi
