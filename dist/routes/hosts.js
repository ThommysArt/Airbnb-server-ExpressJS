"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hostsController_1 = __importDefault(require("../controllers/hostsController"));
const router = express_1.default.Router();
router.get('/', hostsController_1.default.getAllHosts);
router.get('/:id', hostsController_1.default.getHostById);
router.post('/', hostsController_1.default.createHost);
router.put('/:id', hostsController_1.default.updateHost);
router.delete('/:id', hostsController_1.default.deleteHost);
exports.default = router;
