import * as d3 from 'd3';

import Core from './core';

import { Imargin } from './index.d';

class Pie extends Core {
  width: number = 500;
  height: number = 500;
  margin: Imargin = {
    top: 20,
    left: 40,
    right: 20,
    bottom: 20
  }
  textInness: number = 20;
  hasAnimatetion: boolean = true;
  colorList: ReadonlyArray<string> = d3.schemeCategory10;

  R: number;
  radius: number;
  pie: any;
  path: any;
  paths: any;
  arc: any;
  transition: any;
  label: any;
  group: any;

  constructor(el: any, option: object) {
    super(el, option);

    this.init();
  }
  init() {
    this.R = this.width - this.margin.left - this.margin.right;
    this.radius = this.R / 2;
    this.pie = d3.pie().sort(null).value((d: any) => d.value);
    this.path = d3.arc().outerRadius(this.radius).innerRadius(0);

    this.transition = d3.arc().outerRadius(1).innerRadius(0);
    this.label = d3.arc().outerRadius(this.radius + this.textInness).innerRadius(this.radius + this.textInness);

    this.group = this.svg.append("g")
      .attr("transform", `translate(${(this.width - this.R) / 2 + this.radius},${(this.width - this.R) / 2 + this.radius})`);
    this.processData();
    this.addArc();
  }

  animate() {
    this.paths.transition()
      .duration(500)
      .delay((d: any, i: number) => i * 200)
      .attr("d", this.path);
  }

  addArc() {
    this.arc = this.group.selectAll(".pie")
      .data(this.pie(this.data))
      .enter()
      .append("g")
      .attr("class", ".pie");
    this.paths = this.arc.append("path")
      .attr("d", this.transition)
      .attr("class", "piePath")
      .attr("fill", (d: any, i: number) => this.colorList[i]);

    this.arc.append("text")
      .attr("transform", (d: any) => `translate(${this.label.centroid(d)})`)
      .attr("dy", "-.5em")
      .attr("dx", "3")
      .attr("font-size", 12)
      .style("text-anchor", "middle")
      .text((d: any) => d.data.name);
    if (this.hasAnimatetion) {
      this.animate();
    } else {
      this.arc.selectAll(".piePath").attr("d", this.path);
    }
  }
}

export default Pie