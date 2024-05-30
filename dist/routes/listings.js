"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listingsController_1 = __importDefault(require("../controllers/listingsController"));
const router = express_1.default.Router();
router.get('/all', listingsController_1.default.getAllListings);
router.get('/', listingsController_1.default.getListingById);
router.post('/', listingsController_1.default.createListing);
router.put('/', listingsController_1.default.updateListing);
router.delete('/', listingsController_1.default.deleteListing);
exports.default = router;
