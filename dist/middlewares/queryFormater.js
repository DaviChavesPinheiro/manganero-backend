"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, res, next) {
    var _a;
    var query = req.query;
    req.query.select = (_a = query.select) === null || _a === void 0 ? void 0 : _a.replace(new RegExp(',', 'g'), " ");
    req.query.page = query.page || "1";
    req.query.find = query.find || " ";
    next();
});
