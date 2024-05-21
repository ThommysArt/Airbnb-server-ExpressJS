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
app.use('/users', usersRouter);
app.use('/hosts', hostsRouter);
app.use('/listings', listingsRouter);
app.use('/amenities', amenitiesRouter);
app.use('/images', imagesRouter);
app.use('/reviews', reviewsRouter);
app.use('/payments', paymentsRouter);
app.use('/bookings', bookingsRouter);

// Start the server
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
