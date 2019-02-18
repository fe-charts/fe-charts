const pie = new Pie({
  data: [],
  event: {
    ...CORE.drag
  },
  colors: CORE.defualtColor
})

const canvasLoader = new Loader('canvas', '2d', {
  background: '#fff'
})

render(pie, canvasLoader)