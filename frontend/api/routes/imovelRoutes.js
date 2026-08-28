import express from 'express';
import { getImoveis, getImovelById, createImovel } from '../controllers/imovelController.js';

const router = express.Router();

router.get('/', getImoveis);
router.get('/:id', getImovelById);
router.post('/', createImovel);

export default router;
