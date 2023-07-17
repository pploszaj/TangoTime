import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/login', () => {

} )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})