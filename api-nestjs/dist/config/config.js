"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
}
exports.Config = Config;
Config.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/task';
Config.NODE_HOST = process.env.NODE_HOST || '0.0.0.0';
Config.NODE_PORT = process.env.NODE_PORT || '3000';
Config.JWT_SECRET = process.env.JWT_SECRET || 'pozetaklop';
//# sourceMappingURL=config.js.map