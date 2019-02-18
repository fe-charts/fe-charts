import * as d3 from 'd3';
import Util from '../common/util';

class Core {
  el: any;
  svg: any;
  data: Array<any> = [];
  ascending: boolean;
  descending: boolean;
  constructor(el: any, option: object) {
    Util.extend(true, this, option);
    this.el = el;
    this.svg = d3.select(this.el);
  }

  processData() {
    if (this.ascending) {
      this.data.sort((a, b) => a.value - b.value);
      return;
    }
    if (this.descending) {
      this.data.sort((a, b) => b.value - a.value);
    }
  }
}

export default Core;