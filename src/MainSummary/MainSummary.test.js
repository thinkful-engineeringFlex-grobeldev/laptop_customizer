import React from 'react';
import ReactDOM from 'react-dom';
import MainSummary from './MainSummary';

describe('MainSummary', () => {
  it.skip('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainSummary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});