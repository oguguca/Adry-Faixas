// Dados centrais do site. Para trocar o WhatsApp, edite só WHATSAPP_NUMERO.

/** Número no formato internacional, só dígitos. Ex.: '5511912345678'. Vazio = abre o WhatsApp sem destinatário. */
export const WHATSAPP_NUMERO = '5511940390256';

export const empresa = {
  nome: 'Adry Faixas',
  subtitulo: 'Comunicação Visual',
  cidade: 'São Paulo - SP',
  anos: 30,
  telefone: '(11) 94039-0256',
  email: 'adryfaixas@gmail.com',
  instagram: 'https://www.instagram.com/adry_faixas/',
};

export function whatsappLink(mensagem = 'Olá! Vi o site da Adry e quero um orçamento.') {
  const texto = encodeURIComponent(mensagem);
  return WHATSAPP_NUMERO
    ? `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`
    : `https://wa.me/?text=${texto}`;
}

/**
 * Perguntas do chat de dúvidas (botão flutuante). Respostas prontas, sem IA.
 * whatsapp: true = a resposta encaminha direto para o WhatsApp (valores, pagamento).
 * Confira com a Adry as respostas marcadas com CONFIRMAR antes de publicar.
 */
export const faq: { pergunta: string; resposta: string; whatsapp?: boolean }[] = [
  {
    pergunta: 'Quais serviços vocês fazem?',
    resposta:
      'Fazemos faixas pintadas à mão, banners e painéis de lona, fachadas e letreiros, adesivos e vitrines, placas e adesivagem de veículos.',
  },
  {
    pergunta: 'Vocês criam a arte?',
    resposta: 'Sim! A gente cria a arte para você e ajusta até ficar do seu jeito, antes de ir para a produção.',
  },
  {
    pergunta: 'A faixa é pintada à mão mesmo?',
    resposta:
      'É sim. Mantemos a tradição da faixa pintada à mão, com cores fortes e letras grandes, que chamam atenção de longe.',
  },
  {
    pergunta: 'Vocês fazem a instalação?',
    resposta: 'Fazemos. Produzimos na nossa oficina e instalamos no seu comércio em São Paulo.',
  },
  {
    // CONFIRMAR: regiões atendidas.
    pergunta: 'Atendem a minha região?',
    resposta:
      'Atendemos São Paulo. Se você é de outra cidade, chama no WhatsApp que a gente vê se consegue atender.',
  },
  {
    // CONFIRMAR: prazos médios, se a Adry quiser informar.
    pergunta: 'Qual o prazo de entrega?',
    resposta:
      'Depende do tipo de peça, do tamanho e se tem instalação. Conta o que você precisa no WhatsApp que a gente passa o prazo certinho.',
  },
  {
    pergunta: 'Adesivam carro da empresa?',
    resposta: 'Sim! Fazemos adesivagem completa ou parcial, para transformar o carro da empresa em uma vitrine móvel.',
  },
  {
    pergunta: 'Quanto custa? Como posso pagar?',
    resposta:
      'Valores e formas de pagamento a gente combina direto com você pelo WhatsApp, de acordo com o que você precisa. É rapidinho!',
    whatsapp: true,
  },
];

/**
 * Trechos dos vídeos que rodam no topo. start/end em segundos, escolhidos para mostrar o trabalho ou o resultado.
 * rate opcional: velocidade do trecho (0.5 = câmera lenta, para esticar tomadas curtas).
 */
export const heroClips: { src: string; label: string; start: number; end: number; rate?: number }[] = [
  { src: '/media/videos/fachada-adry.mp4', label: 'A Adry', start: 27.3, end: 29.4, rate: 0.5 },
  { src: '/media/videos/banner.mp4', label: 'Design', start: 0.1, end: 3.3, rate: 0.75 },
  { src: '/media/videos/faixa-pintada.mp4', label: 'Faixa pintada à mão', start: 44, end: 50 },
  { src: '/media/videos/banner.mp4', label: 'Banner instalado', start: 52, end: 58 },
  { src: '/media/videos/vitrine-adesivo.mp4', label: 'Painel de vitrine', start: 19, end: 25 },
  { src: '/media/videos/vitrine-perfurada.mp4', label: 'Adesivo perfurado', start: 8.5, end: 12.8 },
];

/** categoria: filtro do portfólio aberto por "Ver trabalhos". Sem categoria = serviço ainda sem trabalho no portfólio. */
export const servicos: { titulo: string; texto: string; categoria?: string }[] = [
  {
    titulo: 'Faixas pintadas à mão',
    texto: 'A tradição que vende: cores fortes e letras grandes para promoção de açougue, mercado e comércio de bairro.',
    categoria: 'Faixas',
  },
  {
    titulo: 'Banners e painéis de lona',
    texto: 'Impressão digital em lona com acabamento e instalação, do cardápio de parede ao painel de fachada.',
    categoria: 'Banners',
  },
  {
    titulo: 'Fachadas e letreiros',
    texto: 'Projeto, ACM, adesivo e letreiro: reformamos a fachada para sua loja ser vista de longe.',
    categoria: 'Fachadas',
  },
  {
    titulo: 'Adesivos e vitrines',
    texto: 'Adesivo decorativo, perfurado e de vitrine. Sua marca aparece para quem passa, sem tirar a luz de dentro.',
    categoria: 'Adesivos',
  },
  {
    titulo: 'Placas',
    texto: 'Placas de sinalização, aviso e identificação, sob medida para o seu espaço.',
  },
  {
    titulo: 'Adesivagem de veículos',
    texto: 'Transforme o carro da empresa em vitrine móvel, com adesivagem completa ou parcial.',
    categoria: 'Veículos',
  },
];

export type Trabalho = {
  titulo: string;
  categoria: string;
  tipo: 'foto' | 'video' | 'antes-depois';
  /** Foto ou vídeo. No antes-depois, é a foto do "depois". */
  src: string;
  /** Só no antes-depois: foto do "antes". */
  antes?: string;
  /** Para vídeos: segundo em que o trecho começa. */
  start?: number;
  /** Para vídeos: segundo em que o trecho termina e volta para start. */
  end?: number;
};

// Portfólio, do mais recente para o mais antigo. Para incluir um trabalho, coloque o arquivo em public/media e adicione uma linha.
// A ordem também monta o mosaico: o antes-depois (2x2) fica depois do freezer para o grid de 4 colunas fechar sem buracos.
export const portfolio: Trabalho[] = [
  { titulo: 'Adesivagem Villa Festas', categoria: 'Veículos', tipo: 'video', src: '/media/videos/fachada-adry.mp4', start: 13, end: 19 },
  { titulo: 'Vitrine MAB Odontologia', categoria: 'Adesivos', tipo: 'foto', src: '/media/fotos/2026-04-13_DXE15t2Fe_W_1.jpg' },
  { titulo: 'Painel de vitrine Trend Renova', categoria: 'Adesivos', tipo: 'video', src: '/media/videos/vitrine-adesivo.mp4', start: 19, end: 25 },
  { titulo: 'Faixa pintada à mão', categoria: 'Faixas', tipo: 'video', src: '/media/videos/faixa-pintada.mp4', start: 56, end: 64 },
  { titulo: 'Banner de cardápio instalado', categoria: 'Banners', tipo: 'video', src: '/media/videos/banner.mp4', start: 52, end: 60 },
  { titulo: 'Personalização de freezer', categoria: 'Adesivos', tipo: 'foto', src: '/media/fotos/2025-09-18_DOwijR1EmIN_1.jpg' },
  {
    titulo: 'Reforma de fachada: antes e depois',
    categoria: 'Fachadas',
    tipo: 'antes-depois',
    antes: '/media/fotos/2023-04-10_Cq20JaNgkDO_1.jpg',
    src: '/media/fotos/2023-04-10_Cq20JaNgkDO_3.jpg',
  },
  { titulo: 'Adesivo decorativo', categoria: 'Adesivos', tipo: 'foto', src: '/media/fotos/2025-05-22_DJ998QWy_IC_1.jpg' },
  { titulo: 'Adesivo decorativo', categoria: 'Adesivos', tipo: 'foto', src: '/media/fotos/2025-05-22_DJ998QWy_IC_2.jpg' },
  { titulo: 'Fachada MAB Odontologia', categoria: 'Fachadas', tipo: 'foto', src: '/media/fotos/2025-04-29_DJClSC5Pj5i_1.jpg' },
  { titulo: 'Faixas promocionais', categoria: 'Faixas', tipo: 'foto', src: '/media/fotos/2023-05-03_CryoToGJF7M_1.jpg' },
  { titulo: 'Faixas de açougue', categoria: 'Faixas', tipo: 'foto', src: '/media/fotos/2023-04-15_CrDvbTYM9UB_1.jpg' },
  { titulo: 'Painel de lona', categoria: 'Banners', tipo: 'foto', src: '/media/fotos/2023-04-12_Cq8kVELpQzv_1.jpg' },
];
