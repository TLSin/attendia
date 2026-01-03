import express from 'express';
import cors from 'cors';
import supabase from './config/supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 3000;

// const users = [
//     { id: 1, name: "John Doe", username: "johndoe", password: "123456789" },
//     { id: 2, name: "John Dae", username: "johndae", password: "123456789" },
//     { id: 3, name: "John Dee", username: "johndee", password: "123456789" },
//     { id: 4, name: "John Die", username: "johndie", password: "123456789" },
//     { id: 5, name: "John Due", username: "johndue", password: "123456789" },
// ]

// const sections = [
//     { id: 1, section: '1000' },
//     { id: 2, section: '1001' },
//     { id: 3, section: '1002' },
//     { id: 4, section: '1003' },
//     { id: 5, section: '1004' },
//     { id: 6, section: '1005' },
//     { id: 7, section: '1006' },
//     { id: 8, section: '1007' },
//     { id: 9, section: '1008' },
//     { id: 10, section: '1009' },
// ]

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(201).send({ msg: 'Hello World' });
});

app.get('/api/users', (req, res) => {
    res.send(users)
});

app.get('/api/users/:id', (req, res) => {
    console.log(req.params)
    const parseId = parseInt(req.params.id)
    console.log(parseId)
    if (isNaN(parseId)) {
        return res.status(400).send({ msg: 'Invalid ID' })
    }
    const user = users.find((foundUser) => foundUser.id === parseId);
    if (!user) return res.sendStatus(404);
    return res.send(user)
})

app.post('/api/register', async (req, res) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: req.body.email,
            password: req.body.password,
        });
        if (error) {
            return res.status(400).json(error);
        }

        console.log(req)

        const { data: adminData, error: adminError } = await supabase.from('admin').insert({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            auth_id: data.user.id,
        })

        if (adminError) {
            console.log('Insert error', adminError);
            return res.status(400).json(adminError);
        }

        console.log(`Registration Complete! ${req.body.firstname}`);
        res.status(200).json({ message: "Registration Complete", redirect: "/login/teacher" });
    } catch (error) {
        res.send({ error });
    }

})

app.post('/api/login', async (req, res) => {
    try {

        const { email, password } = req.body;

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            return res.status(401).json({ error: error.message })
        }


        res.status(200).json({ message: "Successful Login", user: data.user, session: data.session, })
    } catch (error) {
        res..status(500).json({ error: error.message })
    }
})

app.post('/api/student/login', async (req, res) => {

})

app.get('/api/dashboard', async (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Attendia Running at PORT : ${PORT}`);
});