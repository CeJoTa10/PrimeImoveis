import express from 'express';
import { getImoveis, getImovelById, createImovel } from '../controllers/imovelController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.get('/', getImoveis);
router.get('/:id', getImovelById);

// Rota protegida (requer token JWT do Firebase Auth no Header Authorization)
router.post('/', authMiddleware, createImovel);

export default router;
