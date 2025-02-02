import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';


const Header = ({ loggedIn, setLoggedIn, signInButton }) => {
    const [user, setUser] = useContext(UserContext);

    const handleLogOut = () => {
        setLoggedIn(false);
    }

    return (
        <div className="App">
            <h1>Podcast App</h1>
            <div id="SignIn"></div>
            {loggedIn ? (<>
                <img src={user.picture} alt='profile' width={50} height={50} />
                <p>Hey there! {user.given_name}</p>
                <button onClick={handleLogOut}>Logout</button>
            </>) : (<>
                <div ref={signInButton}></div>
            </>)}
        </div>
    )
}

export default Header