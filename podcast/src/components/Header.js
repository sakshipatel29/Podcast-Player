import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import './Header.css';

const Header = ({ loggedIn, setLoggedIn, signInButton }) => {
    const [user] = useContext(UserContext);

    const handleLogOut = () => {
        setLoggedIn(false);
    };

    return (
        <header className="header-container">
            <h1 className="app-title">Podcast App</h1>
            <div id="SignIn" className="sign-in-section">
                {loggedIn ? (
                    <div className="user-info">
                        <img src={user?.picture} alt="profile" className="profile-pic" />
                        <p className="welcome-text">Hey there, {user?.given_name || 'User'}!</p>
                        <button className="logout-btn" onClick={handleLogOut}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div ref={signInButton} className="sign-in-btn"></div>
                )}
            </div>
        </header>
    );
};

export default Header;
