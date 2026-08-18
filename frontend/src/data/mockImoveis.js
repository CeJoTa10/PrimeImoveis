export const MOCK_IMOVEIS = [
  {
    id: "imovel-1",
    titulo: "Apartamento de Luxo Frente ao Mar",
    tipo: "Apartamento",
    transacao: "Comprar",
    preco: 1250000,
    localizacao: "Copacabana, Rio de Janeiro - RJ",
    cidade: "Rio de Janeiro",
    bairro: "Copacabana",
    quartos: 3,
    banheiros: 2,
    vagas: 2,
    area: 120,
    imagem: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: true,
    lancamento: false,
    descricao: "Excelente apartamento reformado com vista panorâmica definitiva para a praia de Copacabana.",
    descricaoDetalhada: "Este deslumbrante apartamento de alto padrão em Copacabana oferece uma experiência única de morar em frente ao mar. Com ampla sala em 3 ambientes com piso em mármore importado, projeto de iluminação planejado e varanda integrada. Suíte máster com closet espaçoso e hidromassagem. Cozinha planejada completa com área de serviço independente e dependência completa de empregada. Edifício estritamente residencial com portaria 24 horas e elevadores privativos.",
    comodidades: [
      "Vista para o Mar",
      "Varanda Gourmet",
      "Portaria 24h",
      "Ar Condicionado Central",
      "Armários Planejados",
      "Elevador Privativo"
    ],
    corretor: {
      nome: "Carlos Eduardo Silva",
      telefone: "(21) 99876-5432",
      whatsapp: "5521998765432",
      email: "carlos.silva@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-2",
    titulo: "Casa de Condomínio com Piscina e Área Gourmet",
    tipo: "Casa",
    transacao: "Comprar",
    preco: 2400000,
    localizacao: "Alphaville, Barueri - SP",
    cidade: "Barueri",
    bairro: "Alphaville",
    quartos: 4,
    banheiros: 5,
    vagas: 4,
    area: 350,
    imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: true,
    lancamento: false,
    descricao: "Casa moderna recém-construída em condomínio fechado com segurança 24h e lazer completo.",
    descricaoDetalhada: "Residência contemporânea assinada por renomado arquiteto. Pavimento térreo composto por amplo living com pé-direito duplo, lareira a gás, lavabo e integração total com o quintal. Área externa incrível com piscina aquecida com iluminação em LED, espaço gourmet moderno com churrasqueira e forno de pizza. No pavimento superior, 4 suítes espaçosas com persianas automatizadas, sendo a suíte principal com closet e banheira.",
    comodidades: [
      "Piscina Aquecida",
      "Espaço Gourmet",
      "Churrasqueira",
      "Pé Direito Duplo",
      "Segurança 24h",
      "Energia Solar"
    ],
    corretor: {
      nome: "Mariana Oliveira",
      telefone: "(11) 98765-4321",
      whatsapp: "5511987654321",
      email: "mariana.oliveira@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-3",
    titulo: "Cobertura Duplex Espetacular em Ipanema",
    tipo: "Cobertura",
    transacao: "Comprar",
    preco: 4800000,
    localizacao: "Ipanema, Rio de Janeiro - RJ",
    cidade: "Rio de Janeiro",
    bairro: "Ipanema",
    quartos: 3,
    banheiros: 4,
    vagas: 3,
    area: 280,
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: false,
    lancamento: false,
    descricao: "Cobertura única no coração de Ipanema com piscina privativa e vista para o Cristo Redentor.",
    descricaoDetalhada: "Cobertura duplex cinematográfica localizada a poucas quadras da praia. Primeiro piso com salão para múltiplos ambientes, varandão integrado, lavabo, 2 suítes aconchegantes e cozinha gourmet. Segundo piso dedicado ao lazer privativo com deck de madeira, piscina, churrasqueira e a suíte máster dos sonhos com vestir e vista panorâmica para as montanhas e o Cristo Redentor.",
    comodidades: [
      "Piscina Privativa",
      "Deck de Madeira",
      "Vista Panorâmica",
      "Churrasqueira",
      "Automação Residencial",
      "3 Vagas na Garagem"
    ],
    corretor: {
      nome: "Carlos Eduardo Silva",
      telefone: "(21) 99876-5432",
      whatsapp: "5521998765432",
      email: "carlos.silva@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-4",
    titulo: "Apartamento Moderno na Vila Madalena",
    tipo: "Apartamento",
    transacao: "Aluguel",
    preco: 6500,
    localizacao: "Vila Madalena, São Paulo - SP",
    cidade: "São Paulo",
    bairro: "Vila Madalena",
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    area: 85,
    imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: true,
    lancamento: false,
    descricao: "Apartamento totalmente mobiliado e decorado por arquiteto no ponto mais charmoso da Vila Madalena.",
    descricaoDetalhada: "Ideal para quem busca praticidade e estilo no bairro mais boêmio e cultural de São Paulo. Imóvel de 85m² inteiramente equipado com eletrodomésticos de ponta, internet de alta velocidade, ar-condicionado em todos os cômodos e varanda espaçosa. O condomínio oferece academia moderna, piscina no rooftop, coworking e lavanderia compartilhada.",
    comodidades: [
      "Totalmente Mobiliado",
      "Piscina no Rooftop",
      "Coworking no Prédio",
      "Academia Equipada",
      "Varanda Aberta",
      "Pet Friendly"
    ],
    corretor: {
      nome: "Fernanda Costa",
      telefone: "(11) 97123-8900",
      whatsapp: "5511971238900",
      email: "fernanda.costa@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-5",
    titulo: "Residencial Horizon Prime - Lançamento Exclusivo",
    tipo: "Apartamento",
    transacao: "Comprar",
    preco: 890000,
    localizacao: "Jardins, São Paulo - SP",
    cidade: "São Paulo",
    bairro: "Jardins",
    quartos: 3,
    banheiros: 3,
    vagas: 2,
    area: 110,
    imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: true,
    lancamento: true,
    descricao: "Empreendimento em pré-lançamento na região nobre dos Jardins com condições especiais de tabela.",
    descricaoDetalhada: "Horizon Prime é a perfeita união entre sofisticação, sustentabilidade e inovação. Planta com 110m² inteligentes com varanda bioclimática, fechadura biométrica e infraestrutura para automação total. Lazer completo incluindo quadra de beach tennis, spa com sauna úmida, espaço pet e ponto de recarga para veículos elétricos por vaga.",
    comodidades: [
      "Empreendimento na Planta",
      "Carregador de Carro Elétrico",
      "Quadra de Beach Tennis",
      "Spa & Sauna",
      "Fechadura Digital",
      "Espaço Pet"
    ],
    corretor: {
      nome: "Mariana Oliveira",
      telefone: "(11) 98765-4321",
      whatsapp: "5511987654321",
      email: "mariana.oliveira@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-6",
    titulo: "Casa Estilo Toscana com Vinhedo Privativo",
    tipo: "Casa",
    transacao: "Comprar",
    preco: 3200000,
    localizacao: "Gramado, Rio Grande do Sul - RS",
    cidade: "Gramado",
    bairro: "Centro",
    quartos: 4,
    banheiros: 4,
    vagas: 3,
    area: 420,
    imagem: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: false,
    lancamento: false,
    descricao: "Propriedade singular inspirada na arquitetura italiana com adega subterrânea climatizada.",
    descricaoDetalhada: "Localizada nas montanhas de Gramado, esta residência encanta pelo charme rustic-chic. Conta com ampla adega subterrânea em pedra para até 1.000 garrafas, sala de degustação, 4 suítes com calefação central e lareira em alvenaria no living principal. Terreno de 2.500m² arborizado com pomar e pequenas videiras de uvas selecionadas.",
    comodidades: [
      "Adega Subterrânea",
      "Calefação Central",
      "Lareira a Lenha",
      "Amplo Jardim",
      "Pomar e Horto",
      "Vista para a Serra"
    ],
    corretor: {
      nome: "Fernanda Costa",
      telefone: "(11) 97123-8900",
      whatsapp: "5511971238900",
      email: "fernanda.costa@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-7",
    titulo: "Apartamento Compacto e Sofisticado no Itaim Bibi",
    tipo: "Apartamento",
    transacao: "Aluguel",
    preco: 4800,
    localizacao: "Itaim Bibi, São Paulo - SP",
    cidade: "São Paulo",
    bairro: "Itaim Bibi",
    quartos: 1,
    banheiros: 1,
    vagas: 1,
    area: 52,
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: false,
    lancamento: false,
    descricao: "Studio deluxe mobiliado ideal para executivos a poucos passos do distrito financeiro da Faria Lima.",
    descricaoDetalhada: "Excelente opção para locação corporativa. Planta otimizada de 52m² totalmente decorada com marcenaria sob medida, iluminação indireta, cama queen size, smart TV e cozinha equipada com cooktop e micro-ondas. Condomínio com concierge, serviço de arrumação e academia completa.",
    comodidades: [
      "Serviço de Concierge",
      "Próximo à Faria Lima",
      "Mobiliado Premium",
      "Ar Condicionado Split",
      "Academia 24h",
      "Vaga de Garagem Coberta"
    ],
    corretor: {
      nome: "Mariana Oliveira",
      telefone: "(11) 98765-4321",
      whatsapp: "5511987654321",
      email: "mariana.oliveira@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    }
  },
  {
    id: "imovel-8",
    titulo: "Ville Royale - Lançamento Alto Padrão",
    tipo: "Cobertura",
    transacao: "Comprar",
    preco: 3100000,
    localizacao: "Barra da Tijuca, Rio de Janeiro - RJ",
    cidade: "Rio de Janeiro",
    bairro: "Barra da Tijuca",
    quartos: 4,
    banheiros: 5,
    vagas: 4,
    area: 310,
    imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    ],
    destaque: true,
    lancamento: true,
    descricao: "Lançamento exclusivo de coberturas lineares na Península da Barra com clube privativo.",
    descricaoDetalhada: "Novo ícone arquitetônico da Barra da Tijuca. Cobertura linear com 310m² privativos, sol da manhã, piscina privativa com borda infinita de vidro e vista desimpedida para a lagoa. Condomínio resort com transporte privativo de balsa para a praia, quadra de tênis de saibro e restaurante exclusivo para moradores.",
    comodidades: [
      "Lançamento de Luxo",
      "Piscina de Borda Infinita",
      "Balsa para a Praia",
      "Quadra de Tênis",
      "Segurança Blindada",
      "Sol da Manhã"
    ],
    corretor: {
      nome: "Carlos Eduardo Silva",
      telefone: "(21) 99876-5432",
      whatsapp: "5521998765432",
      email: "carlos.silva@primeimoveis.com",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  }
];
