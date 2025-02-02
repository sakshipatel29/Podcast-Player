import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Episode = ({title, pubDate, link, mp3}) => {
  const [user] = useContext(UserContext);

  return (
    <div>
    <div>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <p>{title}</p>
        <audio src={mp3} controls />
        <p>{pubDate}</p>
      </a>
    </div>
    <div>
      <label>Add notes here, {user.given_name}</label>
      <textarea id='notes' placeholder='what do you think of this episode?' rows={5} />
    </div>
    </div>
  )
}

export default Episode