'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // RxJS v6+


var _rxjs = require('rxjs');

//timerOne emits first value at 1s, then once every 4s
var timerOne = (0, _rxjs.timer)(1000, 4000);
//timerTwo emits first value at 2s, then once every 4s
var timerTwo = (0, _rxjs.timer)(2000, 4000);
//timerThree emits first value at 3s, then once every 4s
var timerThree = (0, _rxjs.timer)(3000, 4000);

//when one timer emits, emit the latest values from each timer as an array
var combined = (0, _rxjs.combineLatest)(timerOne, timerTwo, timerThree);

var subscribe = combined.subscribe(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      timerValOne = _ref2[0],
      timerValTwo = _ref2[1],
      timerValThree = _ref2[2];

  /*
    Example:
  timerOne first tick: 'Timer One Latest: 1, Timer Two Latest:0, Timer Three Latest: 0
  timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 0
  timerThree first tick: 'Timer One Latest: 1, Timer Two Latest:1, Timer Three Latest: 1
  */
  console.log('Timer One Latest: ' + timerValOne + ',\n     Timer Two Latest: ' + timerValTwo + ',\n     Timer Three Latest: ' + timerValThree);
});