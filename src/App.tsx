import { Rate } from 'antd';
import FeCharts from './feCharts';
import * as React from 'react';
import './App.scss';

import logo from './logo.svg';

class App extends React.Component {
  setRef = (element: any) => {
    const pie = new FeCharts.Charts.Pie(element, {});
  }
  render() {
    return (
      <div className="App">
        <svg width={500} height={500} ref={this.setRef} />
      </div>
    )
  }
}

export default App
