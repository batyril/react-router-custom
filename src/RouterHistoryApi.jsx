import {useEffect, useState} from 'react'

const HomePage = () => <p>Home Page</p>
const AboutPage = () => <p>About Page</p>
const UserPage = () => <p>User Page</p>

const PAGES = {
    HOME:'home',
    ABOUT:'about',
    USER:'user',
}

const getPathPage = () => location.pathname.slice(1);

function RouterHistoryApi() {
  const [page, setPage] = useState(getPathPage())

    const handlePathChange = () => {
        const newPageHash = getPathPage()
        setPage(newPageHash)
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.pushState({},'',e.target.href)
        handlePathChange()
    }

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
