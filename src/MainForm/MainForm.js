import React, { Component } from 'react';
import './MainForm.css';
// import slugify from 'slugify';

import FeatureOptions from '../FeatureOptions/FeatureOptions.js';




class MainForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return <FeatureOptions
        features={this.props.features}
        feature={feature}
        idx={idx}
        selected={this.props.selected}
        handleUpdateFeature={this.props.handleUpdateFeature}
      ></FeatureOptions>
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

MainForm.defaultProps = {
  features: [],
  selected: []
};

export default MainForm;