"use strict";
exports.__esModule = true;
exports.Select = void 0;
var Select = React.forwardRef(function (props, ref) {
    return (react_1["default"].createElement("select", { ref: ref }, props.options.map(function (option) { return (react_1["default"].createElement("option", { value: option.value }, option.label)); })));
});
exports.Select = Select;
//# sourceMappingURL=index.js.map