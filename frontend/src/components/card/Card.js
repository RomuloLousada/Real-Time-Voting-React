import React, { Component } from 'react'
import Details from '../details/Details';
import Photo from '../photo/Photo';
import Ranking from '../ranking/Ranking';
import CardCSS from './card.module.css';

export default class Card extends Component{
  render() {
    const { candidate, index } = this.props;
    const { photo } = candidate;

    return (
      <div className={CardCSS.card}>
        <Ranking index={index}/>
        <Photo photo={photo}/>
        <Details candidate={candidate}/>
      </div>
    );
  }
}
