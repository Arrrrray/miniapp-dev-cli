"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  success(msg) {
    console.log(_chalk.default.green(">> ".concat(msg)));
  },

  error(msg) {
    console.log(_chalk.default.red(">> ".concat(msg)));
  }

};
exports.default = _default;