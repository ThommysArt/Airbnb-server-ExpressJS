"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const amenitiesController_1 = __importDefault(require("../controllers/amenitiesController"));
const router = express_1.default.Router();
router.get('/', amenitiesController_1.default.getAllListingAmenities);
router.get('/:id', amenitiesController_1.default.getListingAmenityById);
router.post('/', amenitiesController_1.default.createListingAmenity);
router.put('/:id', amenitiesController_1.default.updateListingAmenity);
router.delete('/:id', amenitiesController_1.default.deleteListingAmenity);
exports.default = router;
