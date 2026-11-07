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
