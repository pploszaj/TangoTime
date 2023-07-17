import express, { Request, Response, NextFunction } from 'express';
import authenticationController from './controllers/authenticationController'

const app = express();
app.use(express.json());
const port = 3000;

app.post('/signup', authenticationController.createUser, (req,res) => {
    res.send('Successfully created a user')
} )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})