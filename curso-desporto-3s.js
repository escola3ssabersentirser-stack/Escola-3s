// Curso Atleta 3S (Sports Coaching 3S) — conteúdo completo dentro da app
// Português de Portugal, tratamento por "tu", linguagem neutra.

export const AULAS_ATLETA_3S = [
  {
    titulo: "O Modelo 3S no desporto",
    pilar: "3S",
    duracao: "15 min",
    descricao: "Porque é que treinar mais nem sempre é treinar melhor, e o que muda quando juntas método, corpo e identidade.",
    objetivo: "Perceber os três pilares do atleta 3S e onde estás hoje em cada um.",
    secoes: [
      {
        titulo: "Não basta ter vontade",
        texto:
          "Quase toda a gente começa a treinar com entusiasmo. Poucas pessoas continuam seis meses depois. A diferença raramente está no talento ou na força de vontade: está no método, na forma como lês o teu corpo e no lugar que o treino ocupa na tua vida. É disso que trata este curso, seja qual for o teu nível ou a tua modalidade.",
      },
      {
        titulo: "Os três pilares",
        texto:
          "SABER é o método: perceber intensidades, planear a semana, progredir sem pressa e recuperar bem. SENTIR é a ligação ao corpo e à mente: ouvir o esforço, distinguir desconforto de dor, gerir a ansiedade e falar contigo de forma útil. SER é a identidade: os hábitos, a consistência e a forma como te vês enquanto atleta, mesmo nos dias sem vontade.",
      },
      {
        titulo: "Quando falta um pilar",
        texto:
          "Saber sem Sentir dá planos perfeitos no papel e lesões na prática, porque o corpo não foi ouvido. Sentir sem Saber dá treinos ao sabor do dia, sem evolução. Saber e Sentir sem Ser dão boas semanas seguidas de longas paragens. O atleta 3S treina com método, ouve o corpo e constrói uma identidade que o faz voltar, semana após semana.",
      },
    ],
    ciencia: [
      "A Teoria da Autodeterminação (Deci e Ryan) mostra que quem treina por motivos internos, como gosto, desafio ou saúde, mantém a prática durante mais tempo do que quem treina só por pressão externa ou aparência.",
      "Phillippa Lally (UCL, 2010) observou que um novo hábito leva, em média, cerca de 66 dias a tornar-se automático. A consistência vence a intensidade.",
    ],
    ideia: "Saber diz-te como treinar. Sentir diz-te quanto. Ser faz-te voltar amanhã.",
    exercicio: {
      intro: "Pensa no teu percurso no desporto até hoje.",
      perguntas: [
        "O que já SABES sobre treinar bem (e o que gostavas de saber)?",
        "Como te SENTES antes, durante e depois de treinar?",
        "Quem ÉS enquanto atleta? Que frase usarias para te descrever?",
      ],
    },
    quiz: [
      {
        p: "Alguém tem um plano de treino excelente mas lesiona-se com frequência por ignorar os sinais do corpo. Que pilar está mais fraco?",
        opcoes: ["Saber", "Sentir", "Ser"],
        certa: 1,
        explica: "O método existe. Falta ouvir o corpo e ajustar: o pilar Sentir.",
      },
      {
        p: "Treina muito bem durante três semanas e depois pára dois meses. Que pilar precisa de trabalho?",
        opcoes: ["Saber", "Sentir", "Ser"],
        certa: 2,
        explica: "A consistência e a identidade de atleta pertencem ao pilar Ser.",
      },
      {
        p: "Quanto tempo leva, em média, um hábito a tornar-se automático (Lally, 2010)?",
        opcoes: ["7 dias", "Cerca de 66 dias", "1 ano"],
        certa: 1,
        explica: "Cerca de 66 dias, com grande variação entre pessoas. Por isso, os primeiros dois meses são os mais importantes.",
      },
    ],
    desafio: "Esta semana, depois de cada treino, escreve uma linha: o que fiz (Saber), como me senti (Sentir) e o que isto diz sobre quem sou (Ser).",
    materiaisIds: [145],
  },
  {
    titulo: "Saber · Treinar com método",
    pilar: "Saber",
    duracao: "20 min",
    descricao: "Intensidades, escala de esforço e a regra 80/20: treinar mais devagar para ficar mais rápido.",
    objetivo: "Organizar a semana de treino com intensidades certas e progressão segura.",
    secoes: [
      {
        titulo: "O erro mais comum",
        texto:
          "A maioria das pessoas treina quase sempre no mesmo ritmo: demasiado rápido para recuperar e demasiado lento para melhorar. O resultado é cansaço acumulado e pouca evolução. Treinar com método é alternar dias fáceis, realmente fáceis, com poucos dias exigentes, bem feitos.",
      },
      {
        titulo: "A escala de esforço",
        texto:
          "Não precisas de relógio para treinar bem. Usa uma escala de 1 a 10. Entre 2 e 4 é fácil: consegues conversar com frases completas. Entre 5 e 6 é moderado: falas, mas com frases curtas. Entre 7 e 8 é exigente: só dizes palavras soltas. Acima de 9 é o máximo, que se usa pouco e em blocos curtos.",
      },
      {
        titulo: "A regra 80/20 e a progressão",
        texto:
          "Cerca de 80% do teu tempo de treino deve ser fácil e cerca de 20% exigente. Para progredir, aumenta o volume semanal aos poucos, uma regra prática é não ir muito além de 10% por semana, e a cada três ou quatro semanas faz uma semana mais leve para o corpo assimilar. A evolução acontece no descanso, não só no treino.",
      },
    ],
    ciencia: [
      "Stephen Seiler (2010) analisou atletas de resistência de elite e verificou que treinam cerca de 80% do volume em intensidade baixa. Estudos posteriores, como o de Stöggl e Sperlich (2014), mostraram que este modelo traz melhorias iguais ou superiores às de treinar sempre em intensidade moderada.",
      "A escala de esforço percebido de Gunnar Borg é usada há décadas no desporto e na medicina e acompanha bem a frequência cardíaca e o esforço real.",
    ],
    ideia: "Faz os dias fáceis fáceis, para conseguires fazer os dias difíceis difíceis.",
    exercicio: {
      intro: "Olha para as tuas últimas duas semanas de treino.",
      perguntas: [
        "Quantos treinos fizeste e, em média, a que esforço (1 a 10)?",
        "Que percentagem foi realmente fácil (consegues conversar)?",
        "Como vais organizar a próxima semana: que dias fáceis e que dia exigente?",
      ],
    },
    quiz: [
      {
        p: "Segundo a regra 80/20, a maior parte do treino deve ser…",
        opcoes: ["Exigente", "Fácil", "No máximo"],
        certa: 1,
        explica: "Cerca de 80% fácil. É o que permite treinar com consistência e fazer bem os treinos exigentes.",
      },
      {
        p: "Num treino de esforço 3 em 10, consegues…",
        opcoes: ["Conversar com frases completas", "Dizer só palavras soltas", "Não consegues falar"],
        certa: 0,
        explica: "Esforço fácil é aquele em que consegues manter uma conversa.",
      },
      {
        p: "Para que serve uma semana mais leve a cada três ou quatro?",
        opcoes: ["Perder forma", "Assimilar o treino e evitar lesões", "Não serve para nada"],
        certa: 1,
        explica: "O corpo adapta-se no descanso. A semana leve consolida a evolução.",
      },
    ],
    desafio: "Na próxima semana, faz pelo menos dois treinos a esforço 3 ou 4, mesmo que te pareça demasiado lento. Repara como te sentes no treino exigente seguinte.",
    materiaisIds: [140, 142],
  },
  {
    titulo: "Saber · Objetivos que puxam por ti",
    pilar: "Saber",
    duracao: "20 min",
    descricao: "Objetivos de resultado, de desempenho e de processo, e como transformá-los num plano semanal.",
    objetivo: "Definir um objetivo claro e os passos de processo que o tornam possível.",
    secoes: [
      {
        titulo: "Três tipos de objetivo",
        texto:
          "Objetivo de RESULTADO é o que queres alcançar (acabar uma meia maratona, ficar no top 10). Objetivo de DESEMPENHO é a marca que depende de ti (fazer 10 km abaixo de 55 minutos). Objetivo de PROCESSO é o que fazes todos os dias para lá chegar (três treinos por semana, dormir sete horas). O resultado inspira, mas é o processo que controlas.",
      },
      {
        titulo: "Um objetivo bem escrito",
        texto:
          "Um bom objetivo é específico, mensurável, desafiante mas realista e tem data. \"Quero correr mais\" não te diz o que fazer amanhã. \"Quero correr 10 km a 12 de abril, com três treinos por semana até lá\" já te diz.",
      },
      {
        titulo: "Do objetivo à semana",
        texto:
          "Parte do objetivo para trás: quantas semanas faltam, quantos treinos por semana são realistas para a tua vida, qual é o treino-chave de cada semana. Depois, protege esses treinos na agenda como se fossem reuniões importantes. O que não tem dia e hora raramente acontece.",
      },
    ],
    ciencia: [
      "Edwin Locke e Gary Latham (2002) reuniram mais de 35 anos de estudos: objetivos específicos e desafiantes levam a melhor desempenho do que objetivos vagos como \"fazer o melhor possível\".",
      "Kingston e Hardy (1997) mostraram, em golfistas, que os objetivos de processo melhoram a concentração, a autoconfiança e o controlo da ansiedade mais do que os objetivos só de resultado.",
    ],
    ideia: "O resultado dá-te a direção. O processo leva-te lá.",
    exercicio: {
      intro: "Escreve o teu objetivo para os próximos meses.",
      perguntas: [
        "Objetivo de resultado (o quê e quando):",
        "Objetivo de desempenho (a marca que depende de ti):",
        "Três objetivos de processo para todas as semanas:",
      ],
    },
    quiz: [
      {
        p: "\"Treinar três vezes por semana\" é um objetivo de…",
        opcoes: ["Resultado", "Desempenho", "Processo"],
        certa: 2,
        explica: "É uma ação que controlas no dia a dia: objetivo de processo.",
      },
      {
        p: "Segundo Locke e Latham, que objetivos levam a melhor desempenho?",
        opcoes: ["Vagos, para não criar pressão", "Específicos e desafiantes", "Muito fáceis"],
        certa: 1,
        explica: "Específicos e desafiantes, mas realistas, com prazo.",
      },
      {
        p: "Qual destes está mais bem escrito?",
        opcoes: ["Quero correr mais", "Quero ficar em forma", "Quero correr 10 km a 12 de abril, com 3 treinos por semana"],
        certa: 2,
        explica: "Tem o quê, o quando e o como. Sabes o que fazer amanhã.",
      },
    ],
    desafio: "Marca na agenda os treinos das próximas duas semanas, com dia e hora. Trata-os como compromissos que não se desmarcam à toa.",
    materiaisIds: [143, 140],
  },
  {
    titulo: "Sentir · Ouvir o corpo",
    pilar: "Sentir",
    duracao: "20 min",
    descricao: "Desconforto ou dor? Sono, recuperação e os sinais de alerta que não deves ignorar.",
    objetivo: "Aprender a ler os sinais do corpo e a ajustar o treino a tempo.",
    secoes: [
      {
        titulo: "Desconforto não é dor",
        texto:
          "O desconforto do esforço é difuso, simétrico e passa quando abrandas ou paras. A dor de alerta é localizada, muitas vezes de um só lado, aumenta ao longo do treino ou faz-te mudar a forma de correr ou pedalar. Desconforto faz parte de treinar. Dor de alerta é sinal para parar, reduzir e, se durar mais de alguns dias, procurar um profissional de saúde.",
      },
      {
        titulo: "O sono é treino",
        texto:
          "É durante o sono que o corpo repara os músculos, consolida o que aprendeu e regula as hormonas do apetite e do stress. Dormir pouco aumenta a sensação de esforço, piora a coordenação e o humor. Se tiveres de escolher entre acordar mais cedo para treinar e dormir as horas que precisas, muitas vezes dormir é a melhor escolha.",
      },
      {
        titulo: "Sinais de que precisas de descansar",
        texto:
          "Cansaço que não passa de um dia para o outro, pulsação em repouso mais alta do que o habitual, irritabilidade, falta de vontade persistente, sono agitado ou treinos que parecem muito mais difíceis do que deviam. Quando aparecem vários ao mesmo tempo, troca o treino do dia por descanso ou por um treino muito leve.",
      },
    ],
    ciencia: [
      "Cheri Mah e colegas (Universidade de Stanford, 2011) pediram a jogadores de basquetebol universitário que dormissem cerca de 10 horas por noite durante várias semanas: o tempo de sprint melhorou e a precisão nos lançamentos subiu cerca de 9%.",
      "As recomendações do Colégio Americano de Medicina Desportiva (ACSM) indicam que perder mais de 2% do peso corporal em água durante o exercício pode prejudicar o desempenho. Beber ao longo do dia conta tanto como beber durante o treino.",
    ],
    ideia: "O corpo fala baixinho antes de gritar. Ouve-o enquanto ainda sussurra.",
    exercicio: {
      intro: "Faz um retrato honesto da tua recuperação.",
      perguntas: [
        "Quantas horas dormes, em média, e como acordas?",
        "Tens algum desconforto ou dor que se repete? Onde e quando?",
        "Que sinal do teu corpo costumas ignorar e o que vais fazer de diferente?",
      ],
    },
    quiz: [
      {
        p: "Uma dor localizada, só de um lado, que aumenta durante o treino é…",
        opcoes: ["Desconforto normal do esforço", "Um sinal de alerta: parar e reduzir", "Sinal de boa forma"],
        certa: 1,
        explica: "Dor localizada e crescente é sinal de alerta. Se persistir, fala com um profissional de saúde.",
      },
      {
        p: "No estudo de Stanford, dormir mais levou a…",
        opcoes: ["Piores resultados", "Nenhuma diferença", "Sprints mais rápidos e melhor precisão"],
        certa: 2,
        explica: "Mais sono, melhor desempenho. O sono é parte do treino.",
      },
      {
        p: "Qual destes NÃO é um sinal habitual de cansaço acumulado?",
        opcoes: ["Pulsação em repouso mais alta", "Vontade de treinar e sono profundo", "Irritabilidade e falta de vontade"],
        certa: 1,
        explica: "Boa vontade e sono profundo são sinais de que estás a recuperar bem.",
      },
    ],
    desafio: "Durante sete dias, regista ao acordar: horas de sono, energia de 1 a 10 e qualquer dor. No fim da semana, procura o padrão.",
    materiaisIds: [141, 142],
  },
  {
    titulo: "Sentir · Mente de prova",
    pilar: "Sentir",
    duracao: "20 min",
    descricao: "Diálogo interno, visualização e rotina pré-prova para chegares calmo/a e focado/a.",
    objetivo: "Usar a mente a teu favor nos treinos difíceis e nas provas.",
    secoes: [
      {
        titulo: "O que dizes a ti próprio/a",
        texto:
          "Durante o esforço há sempre uma voz interior. Se diz \"não aguento\", o corpo acredita. Prepara frases curtas e úteis para os momentos difíceis: de instrução (\"braços soltos, passada curta\") e de motivação (\"já fiz isto antes\", \"um quilómetro de cada vez\"). Escolhe-as antes, porque no meio do esforço não há espaço para pensar.",
      },
      {
        titulo: "Ver antes de fazer",
        texto:
          "A visualização é ensaiar na cabeça o que vais fazer: o percurso, a partida, o momento em que custa e a forma como respondes. Funciona melhor quando incluis sensações (o som, a respiração, o cansaço nas pernas) e quando te vês a ultrapassar a dificuldade, não só a cortar a meta.",
      },
      {
        titulo: "A tua rotina pré-prova",
        texto:
          "Ansiedade antes de uma prova é normal e até útil: dá energia. O que ajuda é ter uma rotina fixa: o que comes e a que horas, o que levas, o aquecimento, a respiração e a frase com que arrancas. A rotina dá ao cérebro previsibilidade e deixa-te concentrar no que controlas.",
      },
    ],
    ciencia: [
      "Uma meta-análise de Hatzigeorgiadis e colegas (2011), com 32 estudos, concluiu que o diálogo interno estruturado melhora o desempenho desportivo, sobretudo em tarefas de precisão e quando é treinado antes.",
      "A meta-análise de Driskell, Copper e Moran (1994) mostrou que a prática mental, ensaiar na cabeça, melhora o desempenho, embora menos do que a prática real. Combinadas, dão os melhores resultados.",
    ],
    ideia: "Na prova não sobes ao nível das tuas expectativas: desces ao nível da tua preparação, também a mental.",
    exercicio: {
      intro: "Prepara a tua caixa de ferramentas mental.",
      perguntas: [
        "A minha frase de instrução para quando custa:",
        "A minha frase de motivação:",
        "A minha rotina pré-prova, passo a passo:",
      ],
    },
    quiz: [
      {
        p: "\"Braços soltos, passada curta\" é um exemplo de diálogo interno de…",
        opcoes: ["Instrução", "Crítica", "Distração"],
        certa: 0,
        explica: "Diz ao corpo o que fazer: é diálogo interno de instrução.",
      },
      {
        p: "A visualização funciona melhor quando…",
        opcoes: ["Imaginas só a chegada à meta", "Incluis sensações e te vês a ultrapassar a dificuldade", "É feita só no dia da prova"],
        certa: 1,
        explica: "Ensaiar os momentos difíceis, com sensações, prepara-te para responder bem.",
      },
      {
        p: "Para que serve uma rotina pré-prova?",
        opcoes: ["Eliminar toda a ansiedade", "Dar previsibilidade e foco no que controlas", "Substituir o treino"],
        certa: 1,
        explica: "A ansiedade não desaparece, mas a rotina canaliza-a e dá-te controlo.",
      },
    ],
    desafio: "No teu próximo treino exigente, usa as tuas duas frases nos momentos difíceis. Antes de dormir, visualiza durante dois minutos a parte mais difícil da tua próxima prova.",
    materiaisIds: [144, 146],
  },
  {
    titulo: "Ser · Identidade de atleta e plano",
    pilar: "Ser",
    duracao: "25 min",
    descricao: "Hábitos que ficam, os dias sem vontade, a tua avaliação 3S e o teu plano de 30 dias.",
    objetivo: "Construir consistência a partir de quem és e sair com um plano concreto.",
    secoes: [
      {
        titulo: "De \"tenho de treinar\" a \"sou atleta\"",
        texto:
          "Quem diz \"estou a tentar correr\" desiste mais depressa do que quem diz \"sou corredor/a\". A identidade muda a pergunta: em vez de \"apetece-me?\", passa a ser \"o que faria um atleta como eu?\". Cada treino feito é um voto a favor dessa identidade, mesmo que seja curto.",
      },
      {
        titulo: "Os dias sem vontade",
        texto:
          "A motivação vai e vem. A consistência não pode depender dela. Para os dias sem vontade, usa a regra mínima: equipa-te e faz só dez minutos. Se depois quiseres parar, paras. Na maioria das vezes, continuas. E mesmo que pares, mantiveste o hábito vivo.",
      },
      {
        titulo: "Planos se… então…",
        texto:
          "Decide antes como vais reagir aos obstáculos mais comuns. \"Se chover, então faço o treino de força em casa.\" \"Se sair tarde do trabalho, então faço a versão curta de 30 minutos.\" Quando o obstáculo aparece, já não tens de decidir: só tens de cumprir.",
      },
    ],
    ciencia: [
      "Peter Gollwitzer mostrou que as \"intenções de implementação\" (planos do tipo se… então…) aumentam claramente a probabilidade de cumprir um objetivo, incluindo a prática de exercício.",
      "Os estudos sobre identidade de exercício (por exemplo, Strachan e colegas) associam uma identidade de atleta mais forte a maior regularidade na prática ao longo do tempo.",
    ],
    ideia: "Não treinas para te tornares atleta. Treinas porque és atleta.",
    exercicio: {
      intro: "Prepara a tua consistência.",
      perguntas: [
        "Que frase de identidade escolhes (ex.: \"sou uma pessoa que treina três vezes por semana\")?",
        "Qual é a tua regra mínima para os dias sem vontade?",
        "Escreve dois planos se… então… para os teus obstáculos mais comuns:",
      ],
    },
    avaliacao: true,
    quiz: [
      {
        p: "Qual é a ideia da regra mínima?",
        opcoes: ["Treinar só quando apetece", "Começar com dez minutos para manter o hábito vivo", "Fazer sempre o treino completo"],
        certa: 1,
        explica: "Baixar a barreira de entrada. Na maioria das vezes, depois de começar, continuas.",
      },
      {
        p: "\"Se chover, então treino em casa\" é…",
        opcoes: ["Uma desculpa", "Uma intenção de implementação", "Um objetivo de resultado"],
        certa: 1,
        explica: "É um plano se… então…: decides antes como reagir ao obstáculo.",
      },
      {
        p: "Porque é que a identidade ajuda a consistência?",
        opcoes: ["Porque substitui o treino", "Porque muda a pergunta de \"apetece-me?\" para \"o que faria um atleta como eu?\"", "Não ajuda"],
        certa: 1,
        explica: "Agir de acordo com quem és é mais estável do que depender da motivação do dia.",
      },
    ],
    desafio: "Segue o teu plano de 30 dias. Sempre que treinares, mesmo pouco, diz para ti: \"mais um voto para o atleta que sou\".",
    materiaisIds: [145, 147],
  },
];

// Avaliação 3S do atleta (aula 6): 1 = nada, 5 = totalmente
export const AVALIACAO_ATLETA_3S = [
  { pilar: "Saber", frase: "Sei quais dos meus treinos são fáceis e quais são exigentes, e porquê." },
  { pilar: "Saber", frase: "Tenho um objetivo claro, com data, e um plano semanal para lá chegar." },
  { pilar: "Saber", frase: "Faço semanas mais leves e não aumento o treino de repente." },
  { pilar: "Sentir", frase: "Distingo o desconforto normal do esforço de uma dor de alerta." },
  { pilar: "Sentir", frase: "Durmo e recupero o suficiente para o treino que faço." },
  { pilar: "Sentir", frase: "Nos momentos difíceis, falo comigo de forma útil, não de forma crítica." },
  { pilar: "Ser", frase: "Treino com regularidade, mesmo nas semanas com menos vontade." },
  { pilar: "Ser", frase: "Vejo-me como atleta, seja qual for o meu nível." },
  { pilar: "Ser", frase: "Tenho um plano para os obstáculos (chuva, trabalho, cansaço)." },
];

export const PLANO_ATLETA_3S = {
  Saber: {
    titulo: "Reforçar o Saber: treinar com método",
    semanas: [
      "Semana 1: define o teu objetivo com data e escreve três objetivos de processo.",
      "Semana 2: organiza a semana com 80% de treinos fáceis (esforço 3-4) e um treino exigente.",
      "Semana 3: aumenta o volume no máximo 10% e regista o esforço de cada treino.",
      "Semana 4: semana mais leve: reduz o volume cerca de um terço e avalia como te sentes.",
    ],
    seEntao: "Se não conseguir conversar no treino fácil, então abrando até conseguir.",
  },
  Sentir: {
    titulo: "Reforçar o Sentir: ouvir o corpo e a mente",
    semanas: [
      "Semana 1: regista todos os dias ao acordar as horas de sono e a energia de 1 a 10.",
      "Semana 2: escolhe as tuas duas frases (instrução e motivação) e usa-as no treino exigente.",
      "Semana 3: antecipa em 30 minutos a hora de deitar em pelo menos quatro noites.",
      "Semana 4: visualiza dois minutos por dia a parte mais difícil da tua próxima prova ou treino.",
    ],
    seEntao: "Se acordar com energia abaixo de 4 em 10, então troco o treino exigente por um treino leve.",
  },
  Ser: {
    titulo: "Reforçar o Ser: consistência e identidade",
    semanas: [
      "Semana 1: escreve a tua frase de identidade e coloca-a onde a vês todos os dias.",
      "Semana 2: marca os treinos na agenda com dia e hora e cumpre pelo menos três.",
      "Semana 3: usa a regra mínima (dez minutos) em todos os dias sem vontade.",
      "Semana 4: escreve dois planos se… então… e revê o mês: quantos treinos fizeste?",
    ],
    seEntao: "Se não me apetecer treinar, então equipo-me e faço só dez minutos.",
  },
};
