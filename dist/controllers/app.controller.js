"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
const getStatus = (req, res) => {
    res.json({ status: "dope-shi server is live!" });
};
exports.getStatus = getStatus;
