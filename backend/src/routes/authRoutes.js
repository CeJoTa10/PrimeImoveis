import express from 'express';
import { sendCode, verifyCode } from '../controllers/authController.js';

const router = express.Router();

// Rota para solicitar o envio do código OTP de 6 dígitos
router.post('/send-code', sendCode);

// Rota para validar o código OTP de 6 dígitos e emitir o Custom Token do Firebase
router.post('/verify-code', verifyCode);

export default router;
