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
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Routes
app.use('/api/v1/users', users_1.default);
app.use('/api/v1/hosts', hosts_1.default);
app.use('/api/v1/listings', listings_1.default);
app.use('/api/v1/amenities', amenities_1.default);
app.use('/api/v1/images', images_1.default);
app.use('/api/v1/reviews', reviews_1.default);
app.use('/api/v1/payments', payments_1.default);
app.use('/api/v1/bookings', bookings_1.default);
// Start the server
const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
