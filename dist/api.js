"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getEmployees = void 0;
var axios_1 = __importDefault(require("axios"));
// Boolean should be regarded as a symbol to the complier
// if this should be regarded as an Employee
function isEmployee(data) {
    return (typeof data.id === "string" &&
        typeof data.employee_name === "string" &&
        typeof data.employee_salary === "string" &&
        typeof data.employee_age === "string" &&
        typeof data.profile_image === "string");
}
function assertIsTypeArray(data, check) {
    if (!Array.isArray(data)) {
        throw new Error("Data should be an array " + JSON.stringify(data));
    }
    if (data.some(function (datum) { return !check(datum); })) {
        throw new Error("Mismatch in data expectations " + JSON.stringify(data));
    }
}
exports.getEmployees = function () {
    return axios_1["default"]
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(function (response) {
        var responseFromAPI = response.data;
        assertIsTypeArray(responseFromAPI, isEmployee);
        return responseFromAPI;
    });
};
//# sourceMappingURL=api.js.map