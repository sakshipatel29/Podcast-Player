import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import './Episode.css';

const Episode = ({ title, pubDate, link, mp3 }) => {
  const [user] = useContext(UserContext);

  return (
    <div className="episode-container">
      <div className="episode-details">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="episode-title">{title}</h2>
        </a>
        <audio src={mp3} controls className="audio-player" />
        <p className="episode-date">{pubDate}</p>
      </div>
      <div className="notes-section">
        <label htmlFor="notes" className="notes-label">
          Add notes here, {user?.given_name || 'Listener'}
        </label>
        <textarea
          id="notes"
          placeholder="What do you think of this episode?"
          rows={5}
          className="notes-textarea"
        />
      </div>
    </div>
  );
};

export default Episode;
