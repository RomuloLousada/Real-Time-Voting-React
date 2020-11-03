import React from 'react'
import PopularityCSS from './popularity.module.css'

export default function Popularity({ popularity }) {
  return (
    <div>
      <strong>Popularity: </strong> <span className={PopularityCSS.stars}> {popularity} </span>
    </div>
  )
}
