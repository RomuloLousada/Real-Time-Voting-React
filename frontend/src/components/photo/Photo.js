import React from 'react'
import PhotoCSS from './photo.module.css'

export default function Photo({ photo }) {
  return (
    <div className={PhotoCSS.photoContainer}>
      <img className={PhotoCSS.photo} src={photo} alt="drummer"/>
    </div>
  )
}
