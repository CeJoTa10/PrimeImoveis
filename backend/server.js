import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[Server] Servidor rodando com sucesso na porta ${PORT}`);
  console.log(`[Server] Health Check disponível em http://localhost:${PORT}/health`);
});

