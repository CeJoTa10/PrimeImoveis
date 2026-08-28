import admin from 'firebase-admin';

let db = null;
let auth = null;

try {
  if (!admin.apps.length) {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      let serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
      
      if (typeof serviceAccount === 'string') {
        try {
          serviceAccount = JSON.parse(serviceAccount.replace(/\\n/g, '\n'));
        } catch (parseErr) {
          console.error('[Firebase Admin] Erro ao fazer JSON.parse em FIREBASE_SERVICE_ACCOUNT:', parseErr.message);
          serviceAccount = null;
        }
      }

      if (serviceAccount && typeof serviceAccount === 'object') {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount)
        });
        console.log('[Firebase] Admin SDK inicializado via FIREBASE_SERVICE_ACCOUNT');
      }
    }
    
    if (!admin.apps.length) {
      try {
        admin.initializeApp();
        console.log('[Firebase] Admin SDK inicializado com credenciais padrão');
      } catch (err) {
        console.warn('[Firebase] Não foi possível inicializar credenciais padrão:', err.message);
      }
    }
  }

  if (admin.apps.length) {
    db = admin.firestore();
    auth = admin.auth();
  }
} catch (error) {
  console.warn('[Firebase Admin Warning] Exceção capturada na inicialização:', error.message);
}

export { admin, db, auth };
