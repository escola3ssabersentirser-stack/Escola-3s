// Perfil de Vida (Life Coaching 3S) — propósito, valores, crenças, dores e feridas emocionais
// Instrumento de autoconhecimento. Não é diagnóstico nem substitui acompanhamento psicológico.

export const PERGUNTAS_PROPOSITO = [
  "O que fazes em que perdes a noção do tempo?",
  "Em que é que as pessoas te costumam pedir ajuda?",
  "Que problema do mundo, ou de quem te rodeia, te toca mais?",
  "Se o dinheiro não fosse um problema, a que dedicavas os teus dias?",
];

export const VALORES = [
  "Amor", "Família", "Liberdade", "Saúde", "Honestidade", "Respeito", "Segurança", "Crescimento", "Fé / Espiritualidade",
  "Justiça", "Generosidade", "Coragem", "Criatividade", "Autenticidade", "Aventura", "Reconhecimento", "Sucesso", "Paz interior",
  "Amizade", "Conhecimento", "Lealdade", "Independência", "Contribuição", "Equilíbrio", "Gratidão", "Alegria", "Responsabilidade", "Beleza",
];

// Crenças limitantes: [crença, crença impulsionadora alternativa]
export const CRENCAS = [
  ["Não sou suficiente.", "Sou suficiente tal como sou, e posso continuar a crescer."],
  ["Tenho de agradar a todos para ser aceite.", "Posso ser aceite sendo quem sou, e nem todos têm de gostar de mim."],
  ["Pedir ajuda é sinal de fraqueza.", "Pedir ajuda é sinal de coragem e de inteligência."],
  ["Não mereço coisas boas.", "Mereço coisas boas, como qualquer pessoa."],
  ["Se errar, falho como pessoa.", "Errar faz parte de aprender; o erro não define quem sou."],
  ["Já é tarde para mudar.", "Posso começar hoje, ao meu ritmo."],
  ["Tenho de controlar tudo para estar seguro/a.", "Posso confiar no processo e no que não controlo."],
  ["Os outros são melhores do que eu.", "Cada pessoa tem o seu caminho; o meu também tem valor."],
  ["Não posso confiar nas pessoas.", "Posso confiar com cuidado e escolher em quem confio."],
  ["As minhas necessidades vêm sempre depois das dos outros.", "Cuidar de mim permite-me cuidar melhor dos outros."],
];

export const AREAS_VIDA = ["Saúde e energia", "Relação amorosa", "Família", "Amizades", "Trabalho e carreira", "Dinheiro", "Lazer e diversão", "Crescimento pessoal", "Propósito e sentido", "Espiritualidade"];

// Feridas emocionais (modelo popular de Lise Bourbeau, usado como ferramenta de reflexão)
export const FERIDAS = {
  rejeicao: {
    nome: "Rejeição",
    frase: "Medo de não ser aceite ou de não ter lugar.",
    sinais: "Tendência para te afastares, desvalorizares o que és ou sentires que estás a mais.",
    cuidado: "Reconhecer o teu valor sem depender da aprovação dos outros; praticar ocupar o teu espaço.",
  },
  abandono: {
    nome: "Abandono",
    frase: "Medo de ficar sozinho/a ou sem apoio.",
    sinais: "Dificuldade em estar só, necessidade de atenção, medo de que as pessoas se afastem.",
    cuidado: "Aprender a ser a tua própria companhia e construir apoio em várias relações, não numa só.",
  },
  humilhacao: {
    nome: "Humilhação",
    frase: "Medo de ser envergonhado/a ou de ser um peso.",
    sinais: "Colocar sempre os outros primeiro, vergonha das tuas necessidades ou desejos.",
    cuidado: "Dar-te permissão para ter necessidades e prazer, sem culpa.",
  },
  traicao: {
    nome: "Traição",
    frase: "Medo de confiar e ser enganado/a.",
    sinais: "Necessidade de controlar, dificuldade em delegar, desconfiança quando as coisas mudam.",
    cuidado: "Treinar a confiança aos poucos e aceitar o que não depende de ti.",
  },
  injustica: {
    nome: "Injustiça",
    frase: "Medo de ser tratado/a de forma injusta ou de não ser perfeito/a.",
    sinais: "Exigência muito alta contigo, rigidez, dificuldade em mostrar emoções.",
    cuidado: "Ser mais gentil contigo e aceitar que \"suficientemente bom\" também é bom.",
  },
};

// [ferida, frase] — escala 1 (nada) a 5 (muito)
export const PERGUNTAS_FERIDAS = [
  ["rejeicao", "Muitas vezes sinto que não pertenço ou que estou a mais."],
  ["rejeicao", "Tenho tendência a desvalorizar o que faço ou quem sou."],
  ["abandono", "Custa-me muito estar sozinho/a."],
  ["abandono", "Tenho medo de que as pessoas importantes se afastem de mim."],
  ["humilhacao", "Sinto vergonha de pedir o que preciso."],
  ["humilhacao", "Ponho quase sempre as necessidades dos outros à frente das minhas."],
  ["traicao", "Tenho dificuldade em confiar e preciso de ter tudo sob controlo."],
  ["traicao", "Quando alguém falha um compromisso, custa-me muito voltar a confiar."],
  ["injustica", "Sou muito exigente comigo e com os outros."],
  ["injustica", "Fico muito afetado/a quando sinto que algo é injusto."],
];

export const PLANO_VIDA = {
  proposito: "Escreve a tua frase de propósito e lê-a todas as manhãs durante uma semana.",
  valores: (v) => `Escolhe uma ação concreta por dia para viveres mais o valor "${v}".`,
  crenca: (c) => `Sempre que a crença "${c[0]}" aparecer, diz em voz alta: "${c[1]}"`,
  dor: (a) => `Define um pequeno passo para melhorar a área "${a}" e cumpre-o esta semana.`,
  ferida: (f) => `Pratica o cuidado da ferida de ${f.nome.toLowerCase()}: ${f.cuidado}`,
};

// ---------- Propósito e profissões (modelo de interesses de John Holland, RIASEC) ----------
export const ATIVIDADES = [
  ["R", "Trabalhar com as mãos ou com ferramentas"], ["R", "Fazer atividade física ou estar ao ar livre"], ["R", "Reparar, construir ou montar coisas"],
  ["I", "Investigar e perceber porque é que as coisas acontecem"], ["I", "Resolver problemas complexos ou analisar dados"], ["I", "Estudar ciência, saúde ou tecnologia"],
  ["A", "Escrever, desenhar, fotografar ou criar"], ["A", "Inventar ideias novas e originais"], ["A", "Música, teatro, moda ou decoração"],
  ["S", "Ajudar pessoas a resolver os seus problemas"], ["S", "Ensinar, explicar ou formar"], ["S", "Cuidar de quem precisa"],
  ["E", "Liderar pessoas e projetos"], ["E", "Convencer, negociar ou vender"], ["E", "Criar o meu próprio negócio"],
  ["C", "Organizar, planear e pôr ordem nas coisas"], ["C", "Trabalhar com números, registos ou documentos"], ["C", "Seguir processos e garantir que tudo está certo"],
];

export const TIPOS_VOCACIONAIS = {
  R: { nome: "Prático/a", frase: "Gostas de fazer, construir e ver resultados concretos.", profissoes: ["Técnico/a de manutenção ou eletricista", "Engenheiro/a civil ou mecânico/a", "Chef de cozinha", "Treinador/a desportivo/a", "Agricultor/a ou paisagista", "Fisioterapeuta"] },
  I: { nome: "Investigador/a", frase: "Gostas de perceber, analisar e descobrir.", profissoes: ["Investigador/a científico/a", "Analista de dados", "Médico/a ou farmacêutico/a", "Engenheiro/a informático/a", "Nutricionista", "Psicólogo/a"] },
  A: { nome: "Criativo/a", frase: "Gostas de criar, expressar e imaginar.", profissoes: ["Designer", "Escritor/a ou jornalista", "Fotógrafo/a ou realizador/a", "Arquiteto/a", "Criador/a de conteúdos", "Músico/a ou ator/atriz"] },
  S: { nome: "Social", frase: "Gostas de ajudar, ensinar e cuidar de pessoas.", profissoes: ["Coach", "Professor/a ou formador/a", "Enfermeiro/a", "Psicólogo/a", "Assistente social", "Terapeuta ocupacional"] },
  E: { nome: "Empreendedor/a", frase: "Gostas de liderar, influenciar e fazer acontecer.", profissoes: ["Empresário/a", "Gestor/a ou diretor/a", "Gestor/a de projetos", "Consultor/a", "Comercial ou gestor/a de vendas", "Advogado/a"] },
  C: { nome: "Organizador/a", frase: "Gostas de ordem, rigor e processos bem feitos.", profissoes: ["Contabilista", "Técnico/a de recursos humanos", "Gestor/a de logística", "Auditor/a", "Técnico/a administrativo/a", "Gestor/a de qualidade"] },
};

// Combinações frequentes dos dois tipos mais fortes
export const COMBINACOES = {
  SE: ["Coach de liderança", "Gestor/a de recursos humanos", "Formador/a em empresas"],
  ES: ["Coach de liderança", "Gestor/a de equipas", "Diretor/a de escola ou instituição"],
  SA: ["Arte-terapeuta", "Educador/a de infância", "Animador/a sociocultural"],
  AS: ["Arte-terapeuta", "Professor/a de artes", "Escritor/a de desenvolvimento pessoal"],
  SI: ["Psicólogo/a", "Médico/a de família", "Investigador/a em educação"],
  IS: ["Psicólogo/a", "Nutricionista", "Terapeuta da fala"],
  SR: ["Fisioterapeuta", "Personal trainer", "Educador/a ao ar livre"],
  RS: ["Fisioterapeuta", "Treinador/a desportivo/a", "Bombeiro/a ou socorrista"],
  EA: ["Diretor/a criativo/a", "Gestor/a de marketing", "Produtor/a de eventos"],
  AE: ["Empreendedor/a criativo/a", "Diretor/a de comunicação", "Criador/a de conteúdos"],
  EC: ["Gestor/a de operações", "Gestor/a financeiro/a", "Gerente de loja"],
  CE: ["Gerente de loja", "Gestor/a administrativo/a", "Gestor/a de qualidade"],
  IC: ["Analista de dados", "Auditor/a", "Engenheiro/a de software"],
  CI: ["Analista financeiro/a", "Técnico/a de laboratório", "Auditor/a"],
  IA: ["Arquiteto/a", "Designer de produto", "Investigador/a em humanidades"],
  AI: ["Arquiteto/a", "Designer de experiência (UX)", "Jornalista de investigação"],
  ER: ["Empresário/a na área do desporto ou da construção", "Gestor/a de obra", "Chef e proprietário/a de restaurante"],
  RE: ["Empresário/a na área do desporto ou da construção", "Chef e proprietário/a de restaurante", "Gestor/a de obra"],
  SC: ["Técnico/a de recursos humanos", "Secretário/a clínico/a", "Gestor/a de serviços sociais"],
  CS: ["Técnico/a de recursos humanos", "Técnico/a de apoio ao cliente", "Gestor/a de serviços sociais"],
};

// Palavras nas respostas livres que reforçam cada tipo
const PALAVRAS = {
  R: ["construir", "reparar", "mãos", "desporto", "correr", "treinar", "natureza", "cozinhar", "terra", "máquina", "físic"],
  I: ["investigar", "estudar", "perceber", "analisar", "ciência", "dados", "saúde", "tecnologia", "ler", "pesquisar"],
  A: ["criar", "escrever", "desenhar", "música", "arte", "pintar", "fotografia", "design", "imaginar", "livro"],
  S: ["ajudar", "ensinar", "cuidar", "ouvir", "pessoas", "crianças", "apoiar", "conselho", "acompanhar", "formar"],
  E: ["liderar", "negócio", "vender", "empresa", "equipa", "gerir", "decidir", "organizar eventos", "convencer", "empreender"],
  C: ["organizar", "planear", "números", "contas", "processos", "regras", "arrumar", "documentos", "rigor", "listas"],
};

export function sugerirProfissoes(escolhas = [], textos = []) {
  const pontos = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  escolhas.forEach((i) => { const a = ATIVIDADES[i]; if (a) pontos[a[0]] += 2; });
  const txt = textos.join(" ").toLowerCase();
  Object.entries(PALAVRAS).forEach(([k, ps]) => ps.forEach((p) => { if (txt.includes(p)) pontos[k] += 1; }));
  const ord = Object.entries(pontos).sort((a, b) => b[1] - a[1]);
  if (ord[0][1] === 0) return null;
  const [t1, t2] = [ord[0][0], ord[1][1] > 0 ? ord[1][0] : null];
  return { t1, t2, combinacao: t2 ? COMBINACOES[t1 + t2] || null : null };
}
