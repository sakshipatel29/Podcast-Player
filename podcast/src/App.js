import './App.css';
import { useEffect } from 'react';

function App() {

  const handleCallBack = (res) => {
    console.log("Encoded Token:" + res.credential);
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
},[]);

  return (
    <div className="App">
      <h1>Podcast App</h1>
      <div id="SignIn"></div>
    </div>
  );
}

export default App;
