import React from 'react'
import RankingCSS from './ranking.module.css';

export default function Ranking({ index }) {
  return (
    <div className={RankingCSS.ranking}>
      <span className={RankingCSS.middle}>
        {index + 1}
      </span>
    </div>
  )
}
