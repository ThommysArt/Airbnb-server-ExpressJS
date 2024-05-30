"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagesController_1 = __importDefault(require("../controllers/imagesController"));
const router = express_1.default.Router();
router.get('/all', imagesController_1.default.getAllListingImages);
router.get('/', imagesController_1.default.getListingImageById);
router.post('/', imagesController_1.default.createListingImage);
router.put('/', imagesController_1.default.updateListingImage);
router.delete('/', imagesController_1.default.deleteListingImage);
exports.default = router;
