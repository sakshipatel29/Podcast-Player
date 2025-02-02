import React from 'react'

const Episode = ({title, pubDate, link, mp3}) => {
  return (
    <div>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <p>{title}</p>
        <p>{pubDate}</p>
      </a>
    </div>
  )
}

export default Episode