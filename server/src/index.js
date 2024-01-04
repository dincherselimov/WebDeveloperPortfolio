"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sendEmail_1 = __importDefault(require("./api/sendEmail"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Use cors middleware
app.use((0, cors_1.default)());
// Your API routes
app.use('/api/sendEmail', sendEmail_1.default);
exports.default = app;
