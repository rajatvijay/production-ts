"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Select = void 0;
var react_1 = __importDefault(require("react"));
var Select = react_1["default"].forwardRef(function (props, ref) {
    return (react_1["default"].createElement("select", { ref: ref }, props.options.map(function (option) { return (react_1["default"].createElement("option", { value: option.value }, option.label)); })));
});
exports.Select = Select;
//# sourceMappingURL=index.js.map