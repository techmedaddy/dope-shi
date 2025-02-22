"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
class AppService {
    static getServerStatus() {
        return { status: "Server is up and running!", timestamp: new Date() };
    }
}
exports.AppService = AppService;
