import express from 'express';
import { sendCode, verifyCode, sendOtp, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

// ── Rotas legadas (Custom Token flow) ────────────────────────────────────────
// Rota para solicitar o envio do código OTP de 6 dígitos (modo legacy)
router.post('/send-code', sendCode);

// Rota para validar o código OTP de 6 dígitos e emitir o Custom Token do Firebase
router.post('/verify-code', verifyCode);

// ── Novas rotas (emailVerified flow via Admin SDK) ────────────────────────────
// Rota para solicitar o envio do código OTP de 6 dígitos
router.post('/send-otp', sendOtp);

// Rota para validar o código OTP e marcar emailVerified: true via Admin SDK
router.post('/verify-otp', verifyOtp);

export default router;
