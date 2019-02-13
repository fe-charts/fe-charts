const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const jsdom = require('jsdom')

global.requestAnimationFrame = cb => setTimeout(cb, 0);
global.cancelAnimationFrame = cb => clearTimeout(cb, 0);

if (typeof document === 'undefined') {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.window = document.defaultView;
  global.navigator = global.window.navigator;
  global.Promise = document.Promise;
  global.console = document.console;
  Audio.prototype.load = () => { /* do nothing */ };
  Audio.prototype.play = () => { /* do nothing */ };
  Audio.prototype.pause = () => { /* do nothing */ };
  Audio.prototype.addTextTrack = () => { /* do nothing */ };
  global.window.resizeTo = (width, height) => {
    global.window.innerWidth = width || global.window.innerWidth;
    global.window.innerHeight = height || global.window.innerHeight;
    global.window.dispatchEvent(new Event('resize'));
  };
  global.window.scrollTo = () => {};
}

configure({ adapter: new Adapter() })
