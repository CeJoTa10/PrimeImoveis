import express from 'express';
import cors from 'cors';
import imovelRoutes from './routes/imovelRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use((req, res, next) => {
  if (req.headers['access-control-request-private-network']) {
    res.setHeader('Access-Control-Allow-Private-Network', 'true');
  }
  next();
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Permite rotas com ou sem o prefixo /api
app.use('/api/imoveis', imovelRoutes);
app.use('/imoveis', imovelRoutes);

app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API Vercel Serverless funcionando!' });
});
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API Vercel Serverless funcionando!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado', path: req.url });
});

export default app;
