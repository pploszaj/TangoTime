import express, { Request, Response, NextFunction } from 'express';
import authenticationController from './controllers/authenticationController'

const app = express();
app.use(express.json());
const port = 3000;

app.post('/signup', authenticationController.createUser, (req,res) => {
    console.log(res.locals.userid)
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

app.post('/getTimes', authenticationController.getTimes, authenticationController.validateBooking, (req,res) => {
    res.json(res.locals.times)
})

app.post('/booking', authenticationController.bookLesson, (req,res) => {
    res.send('Booking Successful')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})