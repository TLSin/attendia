import { Router } from 'express';
import supabase from '../config/supabaseClient.js';

const router = Router();

router.get('/api/users/:id', (req, res) => {
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

router.post('/api/register', async (req, res) => {
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
        res.status(200).json({ success: true, message: "Registration Complete", redirect: "/login/teacher" });
    } catch (error) {
        res.send({ error });
    }
})

router.post('/api/login', async (req, res) => {
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
        res.status(500).json({ error: error.message })
    }
})

export default router;