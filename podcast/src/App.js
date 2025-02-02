import './App.css';
import { useEffect, useState, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from './contexts/UserContext';
import Header from './components/Header';
import Episode from './components/Episode';

function App() {
  const [user, setUser ] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const signInButton = useRef();
  const [data, setData] = useState([]);

  console.log(data);

  const handleCallBack = (res) => {
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true);
  }

  useEffect(()=>{
    /*global google */
    google.accounts.id.initialize({
      client_id: "698771483813-tqb3e6dj8erql1hmc8328m8ib705iv7b.apps.googleusercontent.com",
      callback: handleCallBack
    });

    google.accounts.id.renderButton(
      signInButton.current,
      { theme: 'outline', size: 'large'}
    )
},[loggedIn]);

  const rssFeed = "https://cdn.atp.fm/rss/public?m2swoudx";
  useEffect(() => {
    fetch(rssFeed).then(res => res.text()).
    then(str => {
      const parser = new window.DOMParser();
      const data = parser.parseFromString(str, "text/html");
      const itemList = data.querySelectorAll("item");
      const items = [];
      itemList.forEach( el => {
        items.push({
            title: el.querySelector("title").innerHTML,
            pubDate: new Date(el.querySelector("pubDate").textContent).toLocaleDateString("en-GB", { day: "numeric", month: "long", year:"numeric"}),
            mp3: el.querySelector("enclosure").getAttribute("url"),
            link: el.querySelector("link").innerHTML,
          })
      })
      setData(items);
    })
  }, [rssFeed])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} signInButton={signInButton} />
      <h2>Accidental Tech Podcast</h2>
      {data.map((ep,i) => 
      <Episode 
        key={i}
        title={ep.title}
        pubDate={ep.pubDate}
        link={ep.link}
        mp3={ep.mp3}
      />
      )}
    </UserContext.Provider>
  );
}

export default App;
