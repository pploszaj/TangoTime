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
    res.send('Successfully found user')
})

app.post('/teacherschedule', authenticationController.updateSchedule, (req,res) => {
    res.json(res.locals.availabilities)
})

app.get('/teachers', authenticationController.findTeachers, (req,res) => {
    res.json(res.locals.teachers)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})