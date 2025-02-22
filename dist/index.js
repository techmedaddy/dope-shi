"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const app_routes_1 = __importDefault(require("./routes/app.routes"));
const logger_middleware_1 = require("./middlewares/logger.middleware");
const env_1 = require("./config/env");
const app = (0, express_1.default)();
exports.app = app;
const PORT = env_1.config.PORT;
app.use(express_1.default.json());
app.use(logger_middleware_1.loggerMiddleware);
app.use("/api", app_routes_1.default);
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
app.get("/", (req, res) => {
    res.send("Welcome to the dope-shi server!");
});
