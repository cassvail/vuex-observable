'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observableAction = observableAction;

var _Subject = require('rxjs/Subject');

var _ActionsObservable = require('./ActionsObservable');

function observableAction(init) {
  var input$ = new _Subject.Subject();
  var action$ = new _ActionsObservable.ActionsObservable(input$);

  var $output = void 0;
  return function observableAction(context, payload) {
    if (!$output) {
      $output = init(action$, context);
    }
    input$.next(payload);
    return $output;
  };
}