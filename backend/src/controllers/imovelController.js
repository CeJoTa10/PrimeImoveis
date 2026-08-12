import { db } from '../config/firebase.js';

// Mock de dados na memória para desenvolvimento local imediato
const mockImoveis = [
  {
    id: "imovel-1",
    titulo: "Apartamento de Luxo Frente ao Mar",
    descricao: "Maravilhoso apartamento de alto padrão totalmente reformado, mobiliado e decorado na praia de Copacabana. Vista frontal para o mar.",
    tipo: "Apartamento",
    preco: 1250000,
    localizacao: "Copacabana, Rio de Janeiro - RJ",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    area: 120,
    imagem: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    dataCriacao: new Date().toISOString()
  },
  {
    id: "imovel-2",
    titulo: "Casa de Condomínio com Piscina",
    descricao: "Belíssima residência moderna com living amplo pé direito duplo, cozinha planejada, piscina aquecida e espaço gourmet completo.",
    tipo: "Casa",
    preco: 2400000,
    localizacao: "Alphaville, Barueri - SP",
    quartos: 4,
    banheiros: 5,
    vagas: 4,
    area: 350,
    imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    dataCriacao: new Date().toISOString()
  },
  {
    id: "imovel-3",
    titulo: "Cobertura Duplex Espetacular",
    descricao: "Cobertura duplex exclusiva no coração de Ipanema. Deck de madeira com banheira de hidromassagem e vista deslumbrante 360° da cidade.",
    tipo: "Cobertura",
    preco: 4800000,
    localizacao: "Ipanema, Rio de Janeiro - RJ",
    quartos: 3,
    banheiros: 4,
    vagas: 3,
    area: 280,
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    destaque: false,
    dataCriacao: new Date().toISOString()
  },
  {
    id: "imovel-4",
    titulo: "Casa de Campo Charmosa",
    descricao: "Ideal para lazer e descanso da família, cercada de verde e com pomar produtivo, playground e varanda com rede.",
    tipo: "Casa",
    preco: 850000,
    localizacao: "Atibaia, São Paulo - SP",
    quartos: 3,
    banheiros: 2,
    vagas: 3,
    area: 200,
    imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    destaque: true,
    dataCriacao: new Date().toISOString()
  }
];

/**
 * Listar imóveis com filtros opcionais
 */
export const getImoveis = async (req, res) => {
  try {
    const { tipo, cidade, precoMin, precoMax, quartos } = req.query;

    // Caso o Firestore não esteja configurado, usa a base Mockada para não travar a UI de teste
    if (!db) {
      console.log('[Controller] Firestore desativado ou sem credenciais. Servindo dados mock.');
      let filtrados = [...mockImoveis];

      if (tipo) {
        filtrados = filtrados.filter(item => item.tipo.toLowerCase() === tipo.toLowerCase());
      }
      if (cidade) {
        filtrados = filtrados.filter(item => item.localizacao.toLowerCase().includes(cidade.toLowerCase()));
      }
      if (precoMin) {
        filtrados = filtrados.filter(item => item.preco >= Number(precoMin));
      }
      if (precoMax) {
        filtrados = filtrados.filter(item => item.preco <= Number(precoMax));
      }
      if (quartos) {
        filtrados = filtrados.filter(item => item.quartos >= Number(quartos));
      }

      return res.status(200).json(filtrados);
    }

    // Com banco conectado:
    let query = db.collection('imoveis');

    // Filtros de igualdade simples que funcionam de imediato no Firestore
    if (tipo) {
      query = query.where('tipo', '==', tipo);
    }

    const snapshot = await query.get();
    let imoveis = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Filtros no servidor em memória para evitar que o desenvolvedor tenha que criar índices compostos no painel Firebase de início
    if (cidade) {
      imoveis = imoveis.filter(item => item.localizacao.toLowerCase().includes(cidade.toLowerCase()));
    }
    if (precoMin) {
      imoveis = imoveis.filter(item => item.preco >= Number(precoMin));
    }
    if (precoMax) {
      imoveis = imoveis.filter(item => item.preco <= Number(precoMax));
    }
    if (quartos) {
      imoveis = imoveis.filter(item => item.quartos >= Number(quartos));
    }

    return res.status(200).json(imoveis);
  } catch (error) {
    console.error('[Controller] Erro ao buscar imóveis:', error);
    return res.status(500).json({ error: 'Erro interno ao listar os imóveis.' });
  }
};

/**
 * Buscar detalhes de um imóvel por ID
 */
export const getImovelById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!db) {
      const imovel = mockImoveis.find(item => item.id === id);
      if (!imovel) return res.status(404).json({ error: 'Imóvel não encontrado na base de simulação.' });
      return res.status(200).json(imovel);
    }

    const doc = await db.collection('imoveis').doc(id).get();
    if (!doc.exists) {
      return res.status(404).json({ error: 'Imóvel não encontrado.' });
    }

    return res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    console.error('[Controller] Erro ao buscar detalhe do imóvel:', error);
    return res.status(500).json({ error: 'Erro ao obter dados do imóvel.' });
  }
};

/**
 * Cadastrar um novo imóvel (Rota protegida)
 */
export const createImovel = async (req, res) => {
  try {
    const { 
      titulo, descricao, tipo, preco, localizacao, 
      quartos, banheiros, vagas, area, imagem, destaque 
    } = req.body;

    // Validando campos essenciais
    if (!titulo || !tipo || !preco || !localizacao) {
      return res.status(400).json({ error: 'Os campos Título, Tipo, Preço e Localização são obrigatórios.' });
    }

    const novoImovel = {
      titulo,
      descricao: descricao || '',
      tipo,
      preco: Number(preco),
      localizacao,
      quartos: Number(quartos || 0),
      banheiros: Number(banheiros || 0),
      vagas: Number(vagas || 0),
      area: Number(area || 0),
      imagem: imagem || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      destaque: !!destaque,
      criadoPor: req.user.uid, // Preenchido pelo authMiddleware
      dataCriacao: new Date().toISOString()
    };

    if (!db) {
      console.log('[Controller] Adicionando novo imóvel na base de dados simulada.');
      const id = `imovel-${Date.now()}`;
      const imovelSalvo = { id, ...novoImovel };
      mockImoveis.push(imovelSalvo);
      return res.status(201).json(imovelSalvo);
    }

    const docRef = await db.collection('imoveis').add(novoImovel);
    return res.status(201).json({ id: docRef.id, ...novoImovel });
  } catch (error) {
    console.error('[Controller] Erro ao cadastrar imóvel:', error);
    return res.status(500).json({ error: 'Erro ao salvar novo imóvel.' });
  }
};
