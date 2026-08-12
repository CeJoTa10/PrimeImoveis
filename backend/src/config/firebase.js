import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

let db = null;
let auth = null;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    console.log('[Firebase] Admin SDK inicializado via FIREBASE_SERVICE_ACCOUNT');
  } else {
    // Tenta inicializar com a configuração padrão do ambiente
    admin.initializeApp();
    console.log('[Firebase] Admin SDK inicializado com credenciais padrão');
  }

  db = admin.firestore();
  auth = admin.auth();
} catch (error) {
  console.warn('\n⚠️  [Firebase Admin Warning] Firebase Admin SDK não foi totalmente configurado.');
  console.warn('Para conectar-se ao Firestore e autenticar tokens de verdade, adicione as credenciais no .env.');
  console.warn('Exemplo: FIREBASE_SERVICE_ACCOUNT=\'{"type": "service_account", ...}\'\n');
  console.warn('Erro original:', error.message);
}

export { admin, db, auth };
