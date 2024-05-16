"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersController_1 = __importDefault(require("../controllers/usersController"));
const router = express_1.default.Router();
router.get('/', usersController_1.default.getAllUsers);
router.get('/:id', usersController_1.default.getUserById);
router.post('/', usersController_1.default.createUser);
router.delete('/:id', usersController_1.default.deleteUser);
exports.default = router;
