import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

let db = null;
let auth = null;

try {
  // Garante que o Firebase Admin SDK só seja inicializado uma única vez
  if (!admin.apps.length) {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      let serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
      
      // Substitui \\n por \n para garantir a integridade da private_key do Firebase em variáveis de ambiente
      if (typeof serviceAccount === 'string') {
        try {
          serviceAccount = JSON.parse(serviceAccount.replace(/\\n/g, '\n'));
        } catch (parseErr) {
          console.error('[Firebase Admin Error] Falha ao executar JSON.parse no FIREBASE_SERVICE_ACCOUNT:', parseErr.message);
        }
      }

      if (typeof serviceAccount === 'object' && serviceAccount !== null) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount)
        });
        console.log('[Firebase] Admin SDK inicializado via FIREBASE_SERVICE_ACCOUNT com sucesso.');
      } else {
        admin.initializeApp();
        console.log('[Firebase] Admin SDK inicializado com credenciais padrão do ambiente.');
      }
    } else {
      admin.initializeApp();
      console.log('[Firebase] Admin SDK inicializado com credenciais padrão do ambiente.');
    }
  }

  db = admin.firestore();
  auth = admin.auth();
} catch (error) {
  console.warn('\n⚠️  [Firebase Admin Warning] Firebase Admin SDK não foi totalmente configurado.');
  console.warn('Para conectar-se ao Firestore e autenticar tokens de verdade, adicione as credenciais no .env.');
  console.warn('Erro original:', error.message);
}

export { admin, db, auth };
