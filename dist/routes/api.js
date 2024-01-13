"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const log_controller_1 = __importDefault(require("../contollers/log.controller"));
const router = express_1.default.Router();
router.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Daniele Favi');
    next();
});
router.get('/logs', (req, res) => log_controller_1.default.getLogFiles(req, res));
router.get('/logs/view', (req, res) => log_controller_1.default.getLogFileContent(req, res));
router.get('/logs/search', (req, res) => log_controller_1.default.searchLogs(req, res));
router.use('*', (req, res) => res.status(404).json({ message: 'Not Found' }));
exports.default = router;
