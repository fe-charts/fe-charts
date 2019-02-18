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
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <Rate character="skr,skr,skr" />
        <svg width={500} height={500} ref={this.setRef} />
      </div>
    )
  }
}

export default App
