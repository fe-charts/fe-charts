import { Rate } from 'antd';
import FeCharts from './feCharts';
import * as React from 'react';
import './App.scss';

import logo from './logo.svg';

class App extends React.Component {
  setRef = (element: any) => {
    const pie = new FeCharts.Charts.Pie(element, {
      data: [
        {
          name: "苹果",
          value: 40
        },
        {
          name: "香蕉",
          value: 30
        },
        {
          name: "橘子",
          value: 20
        },
        {
          name: "葡萄",
          value: 40
        },
        {
          name: "芒果",
          value: 20
        }
      ]
    });
  }
  setLine = (element: any) => {
    const line = new FeCharts.Charts.Line(element, {
      ascending: true,
      data: [
        {
          name: "苹果",
          value: 405
        },
        {
          name: "香蕉",
          value: 30
        },
        {
          name: "橘子",
          value: 205
        },
        {
          name: "葡萄",
          value: 40
        },
        {
          name: "芒果",
          value: 20
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <svg width={500} height={500} ref={this.setRef} />
        <svg width={500} height={500} ref={this.setLine} />
      </div>
    )
  }
}

export default App
