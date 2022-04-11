import { Router } from "express";
import controller from '../controllers/auth.js';

const router = Router();

router.post('/register', async (req, res) => {
    const body = req.body;

    try {
        const register = await controller.register(body);
        res.status(201).json(register);
    } catch(e) {
        res.status(500).json(e.message);
    }
    
});

router.post('/login', async (req, res) => {
    const body = req.body;

    try {
        const userLogin = await controller.login(body);
        res.status(200).json(userLogin);
    } catch (e) {
        res.status(401).json(e.message);
    }
});

export default router;