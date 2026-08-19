import { MOCK_IMOVEIS } from '../data/mockImoveis.js';

// Resolve a URL base da API utilizando a variável de ambiente VITE_API_URL do Vite
const rawApiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api').trim().replace(/\/$/, '');
export const API_BASE_URL = rawApiUrl.endsWith('/api') ? rawApiUrl : `${rawApiUrl}/api`;

/**
 * Filtra a lista local mock quando a API estiver offline
 */
export function filterMockImoveis(filters = {}) {
  let result = [...MOCK_IMOVEIS];

  if (filters.cidade) {
    const term = filters.cidade.toLowerCase();
    result = result.filter(item =>
      item.localizacao.toLowerCase().includes(term) ||
      (item.cidade && item.cidade.toLowerCase().includes(term))
    );
  }

  if (filters.tipo) {
    result = result.filter(item =>
      item.tipo.toLowerCase() === filters.tipo.toLowerCase()
    );
  }

  if (filters.transacao) {
    result = result.filter(item =>
      (item.transacao || 'Comprar').toLowerCase() === filters.transacao.toLowerCase()
    );
  }

  if (filters.lancamento !== undefined) {
    result = result.filter(item => Boolean(item.lancamento) === Boolean(filters.lancamento));
  }

  if (filters.precoMax) {
    result = result.filter(item => item.preco <= Number(filters.precoMax));
  }

  if (filters.quartos) {
    result = result.filter(item => item.quartos >= Number(filters.quartos));
  }

  return result;
}

/**
 * Busca imóveis na API ou retorna dados mock caso a conexão falhe
 */
export async function fetchImoveis(filters = {}) {
  const queryParams = new URLSearchParams();
  if (filters.cidade) queryParams.append('cidade', filters.cidade);
  if (filters.tipo) queryParams.append('tipo', filters.tipo);
  if (filters.precoMax) queryParams.append('precoMax', filters.precoMax);
  if (filters.quartos) queryParams.append('quartos', filters.quartos);

  try {
    const response = await fetch(`${API_BASE_URL}/imoveis?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error(`Status ${response.status}: Falha ao conectar na API`);
    }
    const data = await response.json();
    return { data, isFallback: false };
  } catch (err) {
    console.warn('[API Service] Backend offline ou indisponível. Utilizando dados mock.', err.message);
    const data = filterMockImoveis(filters);
    return { data, isFallback: true };
  }
}

/**
 * Busca os detalhes de um único imóvel pelo ID
 */
export async function fetchImovelById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/imoveis/${id}`);
    if (!response.ok) {
      throw new Error(`Imóvel não encontrado na API (Status ${response.status})`);
    }
    const data = await response.json();
    return { data, isFallback: false };
  } catch (err) {
    console.warn(`[API Service] Falha ao carregar imóvel ${id} via API. Procurando no banco local.`, err.message);
    const found = MOCK_IMOVEIS.find(item => item.id === id || String(item.id) === String(id));
    if (!found) {
      return { data: MOCK_IMOVEIS[0], isFallback: true };
    }
    return { data: found, isFallback: true };
  }
}

/**
 * Cadastra um novo imóvel via POST
 */
export async function createImovel(formData, token) {
  try {
    const response = await fetch(`${API_BASE_URL}/imoveis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || 'Erro ao cadastrar imóvel no servidor.');
    }

    return await response.json();
  } catch (err) {
    console.error('[API Service] Erro ao cadastrar imóvel:', err);
    throw err;
  }
}

/**
 * Envia solicitação de geração do código OTP de 6 dígitos
 */
export async function sendAuthCode(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/send-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Falha ao solicitar código de acesso.');
    }
    return data;
  } catch (err) {
    console.warn('[API Service] Erro ao enviar código de acesso:', err.message);
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      console.log('🔑 [DEV FALLBACK] Backend offline. Utilize o código 123456 para testes.');
      return {
        success: true,
        message: 'Modo dev offline: utilize o código 123456 para validar.',
        isFallback: true
      };
    }
    throw err;
  }
}

/**
 * Valida o código OTP de 6 dígitos e obtém o Custom Token
 */
export async function verifyAuthCode(email, code) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/verify-code`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Código incorreto ou expirado.');
    }
    return data;
  } catch (err) {
    console.warn('[API Service] Erro ao verificar código:', err.message);
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      if (String(code).trim() === '123456') {
        return {
          success: true,
          customToken: `dev-custom-token-${btoa(email)}`,
          user: { uid: 'dev-123', email }
        };
      }
      throw new Error('Código incorreto para teste offline. Utilize 123456.');
    }
    throw err;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// NOVOS HELPERS: send-otp / verify-otp
// Esses helpers integram com o novo fluxo de emailVerified via Admin SDK.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Solicita o envio do código OTP de 6 dígitos para o e-mail informado.
 * Utilizado no cadastro (após criar conta) e no login com e-mail não verificado.
 */
export async function sendOtp(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Falha ao solicitar código de verificação.');
    }
    return data;
  } catch (err) {
    console.warn('[API Service] Erro ao enviar OTP:', err.message);
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      console.log('🔑 [DEV FALLBACK] Backend offline. Utilize o código 123456 para testes.');
      return {
        success: true,
        message: 'Modo dev offline: utilize o código 123456 para validar.',
        isFallback: true
      };
    }
    throw err;
  }
}

/**
 * Valida o código OTP de 6 dígitos e atualiza emailVerified: true via Admin SDK.
 * Recebe o uid do usuário Firebase para que o backend possa chamar updateUser.
 */
export async function verifyOtp(email, code, uid) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code, uid })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Código incorreto ou expirado.');
    }
    return data;
  } catch (err) {
    console.warn('[API Service] Erro ao verificar OTP:', err.message);
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
      if (String(code).trim() === '123456') {
        console.log('[DEV FALLBACK] OTP 123456 aceito em modo offline.');
        return { success: true, message: 'E-mail verificado com sucesso! (modo offline dev)' };
      }
      throw new Error('Código incorreto para teste offline. Utilize 123456.');
    }
    throw err;
  }
}
