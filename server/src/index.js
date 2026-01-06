import express from 'express';
import cors from 'cors';
import userRouter from './routes/admin.js';
import eventRouter from './routes/event.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(eventRouter);

app.get('/', (req, res) => {
    res.status(201).send({ msg: 'Hello World' });
});

app.get('/me', (res, req) => {

});

app.get('/api/users', (req, res) => {
    res.send(users)
});

app.post('/api/student/login', async (req, res) => {

})

app.get('/api/dashboard', async (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Attendia Running at PORT : ${PORT}`);
});