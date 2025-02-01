import './App.css';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [user, setUser ] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCallBack = (res) => {
    let user = jwtDecode(res.credential);
    setUser(user);
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
  }
  

  useEffect(()=>{
    /*global google */
    google.accounts.id.initialize({
      client_id: "698771483813-tqb3e6dj8erql1hmc8328m8ib705iv7b.apps.googleusercontent.com",
      callback: handleCallBack
    });

    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      { theme: 'outline', size: 'large'}
    )
},[loggedIn]);

  return (
    <div className="App">
      <h1>Podcast App</h1>
      <div id="SignIn"></div>
      {loggedIn ? (<>
        <img src={user.picture} alt='profile' width={50} height={50} />
        <p>Hey there! {user.given_name}</p>
        <button onClick={handleLogOut}>Logout</button>
      </>) : (<>
        <div id='SignIn'></div>
      </>)}
    </div>
  );
}

export default App;
