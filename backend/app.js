import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import imovelRoutes from './src/routes/imovelRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middlewares Globais
app.use((req, res, next) => {
  if (req.headers['access-control-request-private-network']) {
    res.setHeader('Access-Control-Allow-Private-Network', 'true');
  }
  next();
});

app.use(cors({
  origin: '*', // Em produção, restrinja para o domínio do frontend se necessário
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rotas da API
app.use('/api/imoveis', imovelRoutes);
app.use('/api/auth', authRoutes);

// Rota de Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API funcionando corretamente!' });
});
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API funcionando corretamente!' });
});

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' });
});

export default app;
