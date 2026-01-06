import { Router } from 'express';
import supabase from '../config/supabaseClient.js';

const router = Router();

router.post('/api/event/create', async (req, res) => {
    try {
        const { data: event_type, error:eventError } = await supabase
            .from('event_type')
            .insert({
                event_name: req.body.event_name,
                subject: req.body.subject,
                event_type: req.body.event_type,
                date: req.body.date,
                time: req.body.time,
            })
            .select('event_id')
            .single();

        if(eventError) return res.status(400).json({ error: eventError.message });

        console.log(event_type.event_id);
        const eventId = event_type.event_id;
        console.log(eventId);

        const { data: attendance_session, error: sessionError } = await supabase.from('attendance_session').insert({
            event_id: eventId,
        }).select().single();

        res.status(200).json({ msg: `Success ${req.body.event_name}, ${req.body.subject}` });
    } catch (error) {

    }
})

export default router;