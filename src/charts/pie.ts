import * as d3 from 'd3';

import Core from './core';

class Pie extends Core {
  constructor(option) {
    super();
    let o = {
      el: null,
      width: 500,
      height: 500,
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
      ],
      margin: {
        top: 20,
        left: 40,
        right: 20,
        bottom: 20
      },
      colorList: d3.schemeCategory10,
      textInness: 20,
      hasAnimatetion: true
    };
  }
}

export default Pie