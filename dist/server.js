"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const hosts_1 = __importDefault(require("./routes/hosts"));
const listings_1 = __importDefault(require("./routes/listings"));
const amenities_1 = __importDefault(require("./routes/amenities"));
const images_1 = __importDefault(require("./routes/images"));
const reviews_1 = __importDefault(require("./routes/reviews"));
const payments_1 = __importDefault(require("./routes/payments"));
const bookings_1 = __importDefault(require("./routes/bookings"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/users', users_1.default);
app.use('/hosts', hosts_1.default);
app.use('/listings', listings_1.default);
app.use('/amenities', amenities_1.default);
app.use('/images', images_1.default);
app.use('/reviews', reviews_1.default);
app.use('/payments', payments_1.default);
app.use('/bookings', bookings_1.default);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
