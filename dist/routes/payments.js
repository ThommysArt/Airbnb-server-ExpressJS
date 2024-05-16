"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentsController_1 = __importDefault(require("../controllers/paymentsController"));
const router = express_1.default.Router();
router.get('/', paymentsController_1.default.getAllPayments);
router.get('/:id', paymentsController_1.default.getPaymentById);
router.post('/', paymentsController_1.default.createPayment);
router.put('/:id', paymentsController_1.default.updatePayment);
router.delete('/:id', paymentsController_1.default.deletePayment);
exports.default = router;
