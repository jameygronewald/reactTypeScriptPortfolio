import * as express from 'express';
import { sendEmail } from '../controllers/nodemailerController';

const router = express.Router();

router.post('/sendEmail', sendEmail);

export default router;
