import express from 'express';
import { sendCode, verifyCode, sendOtp, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

router.post('/send-code', sendCode);
router.post('/verify-code', verifyCode);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

export default router;
