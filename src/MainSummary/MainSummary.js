import React, { Component } from 'react';
import './MainSummary.css';

import SummaryOption from '../SummaryOption/SummaryOption.js';
import SummaryTotal from '../SummaryTotal/SummaryTotal.js';

class MainSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      return <SummaryOption
        feature={feature}
        idx={idx}
        selected={this.props.selected}
      ></SummaryOption>
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal
          selected={this.props.selected}
        ></SummaryTotal>
      </section>
    )
  }
}

export default MainSummary;