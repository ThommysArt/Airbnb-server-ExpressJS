"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paymentsController_1 = __importDefault(require("../controllers/paymentsController"));
const router = express_1.default.Router();
router.get('/by-user', paymentsController_1.default.getAllUserPayments);
router.get('/by-listing', paymentsController_1.default.getAllListingPayments);
router.get('/', paymentsController_1.default.getPaymentById);
router.post('/', paymentsController_1.default.createPayment);
router.put('/', paymentsController_1.default.updatePayment);
router.delete('/', paymentsController_1.default.deletePayment);
exports.default = router;
