// Perfil Geral de Líder — personalidade, comunicação e arquétipo
// Português de Portugal, tratamento por "tu", linguagem neutra.

// ---------- Personalidade (dois eixos: ritmo e foco) ----------
// Cada pergunta tem duas opções: [eixo, valor, texto]. Ritmo: A = ação, R = reflexão. Foco: T = tarefas, P = pessoas.
export const PERGUNTAS_PERSONALIDADE = [
  ["Perante um problema novo, normalmente…", [["ritmo", "A", "Avanço e ajusto pelo caminho."], ["ritmo", "R", "Paro, analiso e só depois avanço."]]],
  ["Numa reunião, costumas…", [["ritmo", "A", "Falar cedo e puxar pela decisão."], ["ritmo", "R", "Ouvir primeiro e falar quando tenho a ideia clara."]]],
  ["Quando tens de decidir com pouca informação…", [["ritmo", "A", "Decido e corrijo depois, se for preciso."], ["ritmo", "R", "Procuro mais dados antes de me comprometer."]]],
  ["O teu ritmo natural de trabalho é…", [["ritmo", "A", "Rápido, com várias coisas ao mesmo tempo."], ["ritmo", "R", "Constante, uma coisa de cada vez, bem feita."]]],
  ["Ao fim de um dia bom, o que te deixa mais satisfeito/a é…", [["foco", "T", "Ter fechado o que estava planeado."], ["foco", "P", "A equipa ter estado bem e unida."]]],
  ["Quando alguém falha um prazo, pensas primeiro…", [["foco", "T", "No impacto no resultado e em como recuperar."], ["foco", "P", "No que se passa com a pessoa."]]],
  ["Preferes uma conversa de trabalho…", [["foco", "T", "Objetiva, com pontos claros."], ["foco", "P", "Próxima, com tempo para a relação."]]],
  ["As pessoas costumam elogiar-te pela tua…", [["foco", "T", "Competência e capacidade de entrega."], ["foco", "P", "Disponibilidade e capacidade de ouvir."]]],
];

export const PERSONALIDADES = {
  AT: {
    nome: "Realizador/a",
    frase: "Rápido/a, direto/a e focado/a no resultado.",
    fortes: ["Decide com rapidez e assume responsabilidade.", "Põe as coisas a andar quando outros hesitam.", "É claro/a sobre o que é preciso fazer."],
    desenvolver: ["Abrandar para ouvir antes de decidir.", "Reconhecer o esforço, não só o resultado.", "Ter cuidado com o tom quando está sob pressão."],
    comunicarComigo: "Vai direto ao assunto, traz opções e sê breve.",
  },
  AP: {
    nome: "Inspirador/a",
    frase: "Entusiasta, comunicativo/a e motivador/a.",
    fortes: ["Contagia a equipa com energia e otimismo.", "Cria ligação com facilidade.", "Vende bem uma ideia e mobiliza pessoas."],
    desenvolver: ["Dar seguimento ao que começa.", "Prestar atenção aos detalhes e aos números.", "Não prometer mais do que é possível cumprir."],
    comunicarComigo: "Começa pela visão e pelas pessoas; os detalhes podem vir por escrito.",
  },
  RP: {
    nome: "Harmonizador/a",
    frase: "Calmo/a, leal e atento/a às pessoas.",
    fortes: ["Cria confiança e estabilidade na equipa.", "Ouve com paciência e apoia de verdade.", "É consistente e de confiança."],
    desenvolver: ["Dizer \"não\" e enfrentar o conflito quando é preciso.", "Lidar com mudanças rápidas.", "Dar feedback difícil sem adiar."],
    comunicarComigo: "Dá-me contexto, tempo para pensar e um tom tranquilo.",
  },
  RT: {
    nome: "Analista",
    frase: "Rigoroso/a, metódico/a e orientado/a para a qualidade.",
    fortes: ["Pensa antes de agir e antecipa riscos.", "Garante qualidade e organização.", "Decide com base em dados e factos."],
    desenvolver: ["Decidir sem ter 100% da informação.", "Mostrar mais o lado humano e emocional.", "Aceitar que \"bom\" às vezes chega."],
    comunicarComigo: "Traz dados, estrutura e tempo para analisar.",
  },
};

// ---------- Comunicação ----------
// Cada opção: [estilo, texto]. Estilos: AS = assertiva, PA = passiva, AG = agressiva, PG = passivo-agressiva
export const PERGUNTAS_COMUNICACAO = [
  ["Um colega interrompe-te sempre que falas na reunião.", [["AS", "Digo com calma: \"Deixa-me terminar, a seguir ouço-te.\""], ["PA", "Calo-me e deixo-o falar."], ["AG", "Interrompo de volta e subo o tom."], ["PG", "Não digo nada, mas depois comento com os outros."]]],
  ["Pedem-te uma tarefa extra numa semana já cheia.", [["AS", "Explico a minha carga e proponho outra data ou prioridade."], ["PA", "Aceito, mesmo sabendo que não vou conseguir."], ["AG", "Respondo que não é comigo e que se organizem."], ["PG", "Aceito, mas faço-a devagar e sem vontade."]]],
  ["Alguém da equipa entrega um trabalho abaixo do esperado.", [["AS", "Falo em privado sobre factos concretos e combinamos melhorias."], ["PA", "Corrijo eu, para evitar a conversa."], ["AG", "Critico na hora, à frente dos outros."], ["PG", "Faço uma piada sobre o trabalho para ele/ela perceber."]]],
  ["Discordas de uma decisão da tua chefia.", [["AS", "Peço uma conversa e explico a minha posição com argumentos."], ["PA", "Não digo nada e cumpro."], ["AG", "Contesto de forma dura e insisto até ganhar."], ["PG", "Concordo na reunião, mas não a aplico."]]],
  ["Recebes uma crítica que achas injusta.", [["AS", "Agradeço, peço exemplos e explico o meu lado."], ["PA", "Peço desculpa, mesmo achando que não tenho culpa."], ["AG", "Defendo-me logo e devolvo a crítica."], ["PG", "Fico calado/a, mas passo a evitar a pessoa."]]],
  ["Precisas de ajuda de alguém que está sempre ocupado.", [["AS", "Peço diretamente, com prazo e motivo claros."], ["PA", "Não peço, para não incomodar."], ["AG", "Exijo, lembrando que é obrigação dele/dela."], ["PG", "Envio indiretas até perceber."]]],
];

export const COMUNICACOES = {
  AS: {
    nome: "Assertiva",
    frase: "Dizes o que pensas e sentes, com respeito por ti e pelos outros.",
    fortes: ["Expressa necessidades com clareza.", "Resolve conflitos sem estragar a relação.", "É previsível e de confiança."],
    desenvolver: ["Manter a assertividade sob pressão e cansaço.", "Adaptar o estilo a quem tem perfis diferentes."],
  },
  PA: {
    nome: "Passiva",
    frase: "Evitas o conflito e colocas os outros à frente das tuas necessidades.",
    fortes: ["É empático/a e cuidadoso/a com os outros.", "Mantém o ambiente calmo."],
    desenvolver: ["Dizer \"não\" sem culpa.", "Expressar opinião e necessidades com clareza.", "Pedir ajuda em vez de carregar tudo."],
  },
  AG: {
    nome: "Agressiva",
    frase: "Defendes a tua posição com força, às vezes à custa da relação.",
    fortes: ["É direto/a e frontal.", "Não deixa problemas por resolver."],
    desenvolver: ["Ouvir até ao fim antes de responder.", "Baixar o tom e separar a pessoa do problema.", "Usar \"eu sinto / eu preciso\" em vez de acusações."],
  },
  PG: {
    nome: "Passivo-agressiva",
    frase: "Evitas dizer as coisas de frente, mas o desagrado aparece de forma indireta.",
    fortes: ["Tem perceção apurada do que não está bem.", "Evita confrontos abertos."],
    desenvolver: ["Dizer diretamente o que incomoda, com calma.", "Trocar ironia e indiretas por pedidos claros.", "Treinar a comunicação assertiva."],
  },
};

// ---------- Arquétipos de líder ----------
// Cada opção: [arquetipo, texto]. VI visionário, ME mentor, ES estratega, GU guardião, CA catalisador, PO construtor de pontes
export const PERGUNTAS_ARQUETIPO = [
  ["O que mais te motiva a liderar?", [["VI", "Construir algo que ainda não existe."], ["ME", "Ver as pessoas crescer."], ["ES", "Resolver problemas complexos."], ["GU", "Garantir que tudo funciona bem."], ["CA", "Provocar mudança e quebrar a rotina."], ["PO", "Unir pessoas diferentes."]]],
  ["Numa crise, o teu papel natural é…", [["VI", "Lembrar o rumo e dar esperança."], ["ME", "Apoiar quem está mais fragilizado."], ["ES", "Fazer o plano e definir prioridades."], ["GU", "Manter a ordem e as regras."], ["CA", "Pôr toda a gente em ação, já."], ["PO", "Pôr as partes a falar umas com as outras."]]],
  ["A frase que mais te representa é…", [["VI", "\"Imagina onde podemos chegar.\""], ["ME", "\"Tu consegues, eu ajudo.\""], ["ES", "\"Vamos pensar nisto com calma.\""], ["GU", "\"Combinado é combinado.\""], ["CA", "\"E se fizéssemos diferente?\""], ["PO", "\"Há espaço para todos.\""]]],
  ["O que mais te incomoda numa equipa?", [["VI", "Falta de ambição."], ["ME", "Pessoas sem oportunidade de aprender."], ["ES", "Decisões sem lógica."], ["GU", "Desorganização e falta de compromisso."], ["CA", "Acomodação."], ["PO", "Divisões e grupinhos."]]],
  ["Os outros procuram-te sobretudo para…", [["VI", "Ter ideias e perspetiva."], ["ME", "Pedir conselho."], ["ES", "Resolver um problema difícil."], ["GU", "Saber como as coisas se fazem."], ["CA", "Ganhar energia para avançar."], ["PO", "Resolver um desentendimento."]]],
  ["O legado que querias deixar é…", [["VI", "Uma visão que inspirou outros."], ["ME", "Pessoas que se tornaram líderes."], ["ES", "Soluções que funcionam."], ["GU", "Uma equipa sólida e fiável."], ["CA", "Uma mudança que ficou."], ["PO", "Um grupo unido."]]],
];

export const ARQUETIPOS = {
  VI: { nome: "Visionário/a", frase: "Vês o futuro antes dos outros e dás sentido ao caminho.", forte: "Inspira e dá direção de longo prazo.", desenvolver: "Transformar a visão em passos concretos e ouvir quem executa." },
  ME: { nome: "Mentor/a", frase: "O teu maior resultado é o crescimento das pessoas.", forte: "Desenvolve talento e cria lealdade.", desenvolver: "Exigir resultados e deixar as pessoas errar e aprender sozinhas." },
  ES: { nome: "Estratega", frase: "Pensas em sistemas, cenários e decisões bem fundamentadas.", forte: "Resolve problemas complexos com lógica.", desenvolver: "Comunicar o porquê das decisões e ligar-se emocionalmente à equipa." },
  GU: { nome: "Guardião/ã", frase: "Garantes estabilidade, regras claras e compromissos cumpridos.", forte: "Cria confiança, ordem e consistência.", desenvolver: "Abrir espaço à mudança e à experimentação." },
  CA: { nome: "Catalisador/a", frase: "Provocas mudança e pões as coisas em movimento.", forte: "Traz energia, coragem e inovação.", desenvolver: "Dar tempo à equipa para acompanhar e consolidar o que muda." },
  PO: { nome: "Construtor/a de pontes", frase: "Unes pessoas e perspetivas diferentes.", forte: "Medeia conflitos e cria colaboração.", desenvolver: "Tomar posição quando é preciso, mesmo que nem todos concordem." },
};

export function calcularPerfilGeral(respostasPers, respostasCom, respostasArq) {
  const ritmo = respostasPers.filter((r) => r === "A").length >= respostasPers.filter((r) => r === "R").length ? "A" : "R";
  const foco = respostasPers.filter((r) => r === "T").length >= respostasPers.filter((r) => r === "P").length ? "T" : "P";
  const contar = (lista, chaves) => Object.fromEntries(chaves.map((k) => [k, lista.filter((x) => x === k).length]));
  const com = contar(respostasCom, Object.keys(COMUNICACOES));
  const arq = contar(respostasArq, Object.keys(ARQUETIPOS));
  const top = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]);
  const arqOrd = top(arq);
  return {
    personalidade: ritmo + foco,
    eixos: { acao: respostasPers.filter((r) => r === "A").length, reflexao: respostasPers.filter((r) => r === "R").length, tarefas: respostasPers.filter((r) => r === "T").length, pessoas: respostasPers.filter((r) => r === "P").length },
    comunicacao: top(com)[0][0],
    comunicacaoContagem: com,
    arquetipo: arqOrd[0][0],
    arquetipo2: arqOrd[1][1] > 0 ? arqOrd[1][0] : null,
    data: new Date().toISOString(),
  };
}
