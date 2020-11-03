import React from 'react'
import Card from '../card/Card'

export default function Candidates({candidates}) {
  return (
    <div>
      {
        candidates.map((candidate, index) => {
          return <Card key={index} candidate={candidate} index={index}/>
        })
      }
    </div>
  )
}
