"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingsController_1 = __importDefault(require("../controllers/bookingsController"));
const router = express_1.default.Router();
router.get('/all', bookingsController_1.default.getAllUserBookings);
router.get('/', bookingsController_1.default.getBookingById);
router.post('/', bookingsController_1.default.createBooking);
router.put('/', bookingsController_1.default.updateBooking);
router.delete('/', bookingsController_1.default.deleteBooking);
exports.default = router;
