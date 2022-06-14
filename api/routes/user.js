import { Router } from "express";
import { verifyTokenAndAuthorization } from "./verifyToken.js";
import controller from '../controllers/user.js'
const router = Router();

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    const body = req.body;
    const params = req.params;

    try {
        const updatedUser = await controller.update(body, params);
        res.status(200).json(updatedUser);
    } catch (e) {
        res.status(500).json(e.message);
    }
});



export default router;