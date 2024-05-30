import express from 'express';
import usersRouter from './routes/users';
import hostsRouter from './routes/hosts';
import listingsRouter from './routes/listings';
import amenitiesRouter from './routes/amenities';
import imagesRouter from './routes/images';
import reviewsRouter from './routes/reviews';
import paymentsRouter from './routes/payments';
import bookingsRouter from './routes/bookings';
import cors from 'cors'

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/hosts', hostsRouter);
app.use('/api/v1/listings', listingsRouter);
app.use('/api/v1/amenities', amenitiesRouter);
app.use('/api/v1/images', imagesRouter);
app.use('/api/v1/reviews', reviewsRouter);
app.use('/api/v1/payments', paymentsRouter);
app.use('/api/v1/bookings', bookingsRouter);

// Start the server
const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
