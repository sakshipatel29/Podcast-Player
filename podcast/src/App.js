import './App.css';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from './contexts/UserContext';
import Header from './Header';

function App() {
  const [user, setUser ] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

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
      document.getElementById("SignIn"),
      { theme: 'outline', size: 'large'}
    )
},[loggedIn]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </UserContext.Provider>
  );
}

export default App;
