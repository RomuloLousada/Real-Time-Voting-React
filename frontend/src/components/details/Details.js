import React, { Component } from 'react'
import Name from '../name/Name';
import Percentage from '../percentage/Percentage';
import Popularity from '../popularity/Popularity';
import Votes from '../votes/Votes';
import DetailsCSS from './detail.module.css'

export default class Details extends Component {
  formatVotes = (votes) => {
    return Intl.NumberFormat('pt-BR').format(votes);
  }

  formatPercentage = (percentage) => {
    return percentage.toFixed(2);
  }

  formatPopularity = (popularity) => {
    let string = '';

    for(let i = 0; i < Math.round(popularity); i++) {
      string += '★';
    }

    return string.padEnd(10, '☆');
  }
  
  render() {
    const { candidate } = this.props;
    const { name, votes, percentage, popularity } = candidate;

    return (
      <div className={DetailsCSS.panel}>
          <Name name={name}/>
          <Votes votes={this.formatVotes(votes)}/>
          <Percentage percentage={this.formatPercentage(percentage)}/>
          <Popularity popularity={this.formatPopularity(popularity)}/>
      </div>
    )
  }
}
