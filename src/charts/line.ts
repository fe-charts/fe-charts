import * as d3 from 'd3';

import Core from './core';
import { Imargin, IAxis } from './index.d';

class Line extends Core {
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
  lineThickness: number = 2;
  MAXTop: number = 30;

  transition: any;
  label: any;
  group: any;
  xScale: any;
  xAxis: any;
  yScale: any;
  yAxis: any;
  line: any;

  lineClipId: number;
  hasXAxis: IAxis = {
    show: true,
    ticks: 6,
  };
  hasYAxis: IAxis = {
    show: true,
    ticks: 6,
  };

  constructor(el: any, option: object) {
    super(el, option);

    this.init();
  }
  init() {
    this.group = this.svg.append("g")
      .attr("transform", `translate(${this.margin.left},${
        this.margin.top
        })`);
    this.processData();
    this.addXAxis();
    this.addYAxis();
    this.addLine();
  }

  addXAxis() {
    // x轴比例尺
    this.xScale = d3
      .scaleBand()
      .rangeRound([0, this.width - this.margin.left - this.margin.right])
      .paddingInner(1)
      .domain(this.data.map(d => d.name));
    if (!this.hasXAxis.show) { return };
    this.xAxis = this.group
      .append("g")
      .attr(
        "transform",
        "translate(0," + (this.height - this.margin.top - this.margin.bottom) + ")"
      )
      .call(d3.axisBottom(this.xScale));
  }

  addYAxis() {
    this.yScale = d3
      .scaleLinear()
      .rangeRound([this.height - this.margin.bottom - this.margin.top, this.margin.top])
      .domain([0, d3.max(this.data.map(d => d.value + 30))]);

    if (!this.hasYAxis.show) { return };
    this.yAxis = this.group
      .append("g")
      .call(d3.axisLeft(this.yScale).ticks(5));
  }

  animate() {
    this.group
      .append("defs")
      .append("clipPath")
      .attr("id", "" + this.lineClipId)
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 1)
      .attr("height", this.height)
      .transition()
      .duration(3000)
      .attr("width", this.height);
  }

  addLine() {
    this.lineClipId = new Date().getTime();
    this.group
      .selectAll(".circle")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("class", "circle")
      .attr("cx", (d: any) => this.xScale(d.name))
      .attr("cy", (d: any) => this.yScale(d.value))
      .attr("r", 10)
      .attr("fill", (d: any, i: number) => this.colorList[i]);

    this.group
      .selectAll(".lineCircle")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("class", "lineCircle")
      .attr("cx", (d: any) => this.xScale(d.name))
      .attr("cy", (d: any) => this.yScale(d.value))
      .attr("r", 10)
      .attr("stroke", (d: any, i: number) => this.colorList[i])
      .attr("stroke-width", "4")
      .attr("fill", "none");

    this.group
      .selectAll(".lineOuterCircle")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("class", "lineOuterCircle")
      .attr("cx", (d: any) => this.xScale(d.name))
      .attr("cy", (d: any) => this.yScale(d.value))
      .attr("r", 10)
      .attr("stroke", "rgb(0,0,0)")
      .attr("opacity", "0.1")
      .attr("stroke-width", "4")
      .attr("fill", "none");

    this.line = d3
      .line()
      .x((d: any) => this.xScale(d.name))
      .y((d: any) => this.yScale(d.value))
      .curve(d3.curveCatmullRom.alpha(1));

    this.group
      .append("path")
      .datum(this.data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "rgb(82,180,255)")
      .attr("opacity", "0.3")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", this.lineThickness)
      .attr("d", this.line)
      .attr("clip-path", "url(#" + this.lineClipId + ")");

    if (this.hasAnimatetion) {
      this.animate()
    };
  }

}

export default Line