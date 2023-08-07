import express, { Request, Response, NextFunction } from 'express';
import authenticationController from './controllers/authenticationController'


const app = express();
app.use(express.json());
const port = 3000;

app.post('/signup', authenticationController.createUser, (req,res) => {
    res.json(res.locals.userid)
})

app.post('/login', authenticationController.findUser, (req,res) => {
    res.json(res.locals.userData)
})

app.post('/teacherschedule', authenticationController.updateSchedule, (req,res) => {
    res.json(res.locals.availabilities)
})

app.get('/teachers', authenticationController.findTeachers, (req,res) => {
    res.json(res.locals.teachers)
})

app.post('/getTimes', authenticationController.getTimes, (req,res) => {
    res.json(res.locals.times)
})

app.post('/getBookings', authenticationController.getBookings, (req,res) => {
    res.json(res.locals.bookings)
})

app.post('/booking', authenticationController.bookLesson, authenticationController.sendTextMessage, (req,res) => {
    console.log('Booking Successful!')
    res.json(res.locals.newBooking);
})

app.use((err:any, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error global occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})