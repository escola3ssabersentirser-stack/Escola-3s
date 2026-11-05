// Curso Liderança 3S — conteúdo completo dentro da app
// Português de Portugal, tratamento por "tu", linguagem neutra.

export const PILARES_3S = {
  "3S": { nome: "Modelo 3S", cor: "#1B3355", fundo: "#1B3355", texto: "#F7EEDD" },
  Saber: { nome: "Saber", cor: "#1B3355", fundo: "#E8EDF4", texto: "#1B3355" },
  Sentir: { nome: "Sentir", cor: "#A8853A", fundo: "#F6EDD8", texto: "#6B5321" },
  Ser: { nome: "Ser", cor: "#2E4A6E", fundo: "#F1E1CB", texto: "#1B3355" },
};

export const AULAS_LIDERANCA_3S = [
  {
    titulo: "O Modelo 3S: liderar com Saber, Sentir e Ser",
    pilar: "3S",
    duracao: "15 min",
    descricao: "Porque é que saber muito não chega, e o que muda quando juntas cabeça, coração e identidade.",
    objetivo: "Perceber os três pilares da liderança 3S e onde estás hoje em cada um.",
    secoes: [
      {
        titulo: "Liderar não é um cargo",
        texto:
          "Liderar é influenciar a forma como outras pessoas pensam, sentem e agem para chegarem a um resultado que sozinhas não alcançariam. Pode acontecer numa loja, numa equipa desportiva, numa associação, numa empresa ou em casa. O cargo dá autoridade. A liderança dá vontade de seguir. São coisas diferentes, e muitas equipas sofrem precisamente no espaço entre as duas.",
      },
      {
        titulo: "Os três pilares",
        texto:
          "SABER é a parte técnica e estratégica: perceber a tarefa, ler cada pessoa, decidir, planear, delegar e acompanhar. SENTIR é a parte emocional e relacional: reconhecer as tuas emoções, gerir as reações, criar confiança e um clima onde as pessoas falam. SER é a identidade: os teus valores, a coerência entre o que dizes e o que fazes, e o exemplo que deixas quando ninguém está a ver.",
      },
      {
        titulo: "Quando falta um pilar",
        texto:
          "Saber sem Sentir dá chefes competentes mas frios, com equipas que cumprem e não se comprometem. Sentir sem Saber dá líderes queridos, mas sem rumo, onde tudo é conversa e pouco acontece. Saber e Sentir sem Ser dão líderes que mudam conforme a pressão do dia, e a equipa deixa de confiar. A liderança 3S pede os três, em equilíbrio. Ninguém começa equilibrado. O caminho é perceber qual dos pilares precisa de mais trabalho agora.",
      },
    ],
    ciencia: [
      "Daniel Goleman (1998, Harvard Business Review) mostrou que, nos cargos de liderança, a inteligência emocional pesa tanto ou mais do que as competências técnicas na distinção entre líderes medianos e excelentes.",
      "A Gallup (2015) concluiu que a chefia direta explica pelo menos 70% da variação no envolvimento das equipas. A forma como lideras não é um detalhe: é o principal fator.",
    ],
    ideia: "Saber diz-te o que fazer. Sentir diz-te como chegar às pessoas. Ser diz-lhes porque devem confiar em ti.",
    exercicio: {
      intro: "Pensa na melhor pessoa que alguma vez te liderou (chefe, treinador/a, professor/a, familiar).",
      perguntas: [
        "O que essa pessoa SABIA fazer bem?",
        "Como te fazia SENTIR quando trabalhavas com ela?",
        "Quem ela ERA: que valor ou atitude se via sempre?",
      ],
    },
    quiz: [
      {
        p: "Uma chefia domina a parte técnica, mas a equipa evita falar com ela e só faz o mínimo. Que pilar está mais fraco?",
        opcoes: ["Saber", "Sentir", "Ser"],
        certa: 1,
        explica: "A competência técnica está lá. Falta a ligação: confiança, clima e gestão das reações. Isso é o pilar Sentir.",
      },
      {
        p: "Diz que valoriza a pontualidade, mas chega sempre atrasado/a às reuniões. Que pilar está em causa?",
        opcoes: ["Saber", "Sentir", "Ser"],
        certa: 2,
        explica: "É uma questão de coerência entre o que dizes e o que fazes: o pilar Ser.",
      },
      {
        p: "Segundo a Gallup, quanto da variação no envolvimento de uma equipa se explica pela chefia direta?",
        opcoes: ["Cerca de 10%", "Cerca de 30%", "Pelo menos 70%"],
        certa: 2,
        explica: "Pelo menos 70%. A pessoa que lidera é o fator com mais peso no envolvimento da equipa.",
      },
    ],
    desafio: "Esta semana, observa-te em três momentos de liderança. Depois de cada um, pergunta: usei o Saber, o Sentir e o Ser, ou só um deles?",
    materiaisIds: [41, 42],
    materiaisFormadorIds: [56, 57],
  },
  {
    titulo: "Saber · Ler a pessoa e a tarefa",
    pilar: "Saber",
    duracao: "20 min",
    descricao: "Liderança situacional: não existe um estilo certo, existe o estilo certo para esta pessoa, nesta tarefa.",
    objetivo: "Diagnosticar o nível de cada pessoa numa tarefa e ajustar o teu estilo.",
    secoes: [
      {
        titulo: "O erro de liderar todos da mesma forma",
        texto:
          "Muitos líderes têm um estilo preferido e usam-no com toda a gente. Quem gosta de controlar, controla toda a equipa, inclusive quem já sabe mais do que ele. Quem gosta de dar liberdade, larga também quem está a começar e precisava de apoio. Em ambos os casos, o problema não é o estilo: é usá-lo na pessoa errada.",
      },
      {
        titulo: "Competência e confiança",
        texto:
          "Para cada tarefa, pergunta duas coisas. A pessoa SABE fazer (competência)? E QUER e sente-se segura a fazer (confiança e motivação)? A mesma pessoa pode ser especialista numa tarefa e principiante noutra. Por isso o diagnóstico é sempre por tarefa, nunca da pessoa em geral.",
      },
      {
        titulo: "Os quatro estilos",
        texto:
          "DIRIGIR: para quem está a começar. Explicas o quê, como e quando, e acompanhas de perto. ORIENTAR: para quem já sabe alguma coisa mas perdeu o entusiasmo. Continuas a dar direção, mas explicas o porquê e ouves. APOIAR: para quem sabe fazer mas hesita. Dás menos instruções e mais confiança, perguntas \"o que achas?\". DELEGAR: para quem sabe e quer. Combinas o resultado e sais da frente, com pontos de contacto combinados.",
      },
    ],
    ciencia: [
      "Paul Hersey e Ken Blanchard criaram o modelo de Liderança Situacional (1969), mais tarde desenvolvido por Blanchard como SLII. É um dos modelos de liderança mais usados na formação de chefias em todo o mundo.",
      "A investigação sobre o modelo mostra resultados mistos na previsão exata do estilo, mas uma ideia central é consistente: líderes que adaptam o comportamento às necessidades de cada pessoa obtêm melhores resultados do que os que usam sempre o mesmo estilo.",
    ],
    ideia: "Não lideras pessoas, lideras pessoas em tarefas. Diagnostica primeiro, escolhe o estilo depois.",
    exercicio: {
      intro: "Escolhe uma pessoa da tua equipa (ou da tua vida) e uma tarefa concreta que ela tenha de fazer.",
      perguntas: [
        "Pessoa e tarefa: quem e o quê?",
        "Sabe fazer? Quer e sente-se segura? Que nível lhe dás (começa / perdeu entusiasmo / sabe mas hesita / sabe e quer)?",
        "Que estilo vais usar e que frase vais dizer na próxima conversa?",
      ],
    },
    quiz: [
      {
        p: "Uma pessoa com anos de casa recebe uma tarefa nova que nunca fez. Que estilo faz mais sentido nessa tarefa?",
        opcoes: ["Delegar, porque é experiente", "Dirigir, porque é nova nessa tarefa", "Não interferir"],
        certa: 1,
        explica: "O diagnóstico é por tarefa. Naquela tarefa, a pessoa está a começar e precisa de direção clara.",
      },
      {
        p: "Alguém sabe fazer muito bem mas pergunta-te tudo antes de decidir. Que estilo ajuda mais?",
        opcoes: ["Apoiar", "Dirigir", "Delegar sem contacto"],
        certa: 0,
        explica: "A competência existe, falta confiança. Apoiar é devolver as perguntas: \"o que farias tu?\".",
      },
      {
        p: "O que define o estilo certo?",
        opcoes: ["A personalidade do líder", "A competência e a confiança da pessoa naquela tarefa", "O cargo da pessoa"],
        certa: 1,
        explica: "O estilo ajusta-se a quem está do outro lado e à tarefa, não ao teu gosto pessoal.",
      },
    ],
    desafio: "Faz o diagnóstico de três pessoas em três tarefas desta semana. Em pelo menos uma delas, usa um estilo diferente do teu habitual.",
    materiaisIds: [41, 42, 69],
    materiaisFormadorIds: [74, 75],
  },
  {
    titulo: "Saber · Controlo ou Compromisso",
    pilar: "Saber",
    duracao: "20 min",
    descricao: "Duas formas de obter resultados, e o que cada uma custa à equipa a longo prazo.",
    objetivo: "Trocar controlo por compromisso sem perder o rumo nem os resultados.",
    secoes: [
      {
        titulo: "O atalho do controlo",
        texto:
          "Controlar dá resultados rápidos: supervisão constante, decidir tudo, corrigir cada detalhe. O preço aparece depois. As pessoas deixam de pensar, esperam ordens, escondem erros e dependem de ti para tudo. Tu ficas sem tempo, e a equipa fica sem iniciativa. Quando sais, o trabalho pára.",
      },
      {
        titulo: "O que cria compromisso",
        texto:
          "As pessoas comprometem-se com aquilo que ajudaram a construir. Compromisso cria-se com três coisas: dar sentido (explicar o porquê, não só o quê), dar espaço (deixar escolher o como, dentro de limites claros) e dar responsabilidade (combinar quem faz o quê, até quando, e acompanhar sem sufocar).",
      },
      {
        titulo: "Limites claros, liberdade dentro deles",
        texto:
          "Compromisso não é ausência de regras. É o contrário: quanto mais claros são o objetivo, o prazo e os limites, mais liberdade podes dar dentro deles. Uma frase útil: \"O resultado é este, o prazo é este, isto não é negociável. O como é contigo. Quando queres que falemos?\"",
      },
    ],
    ciencia: [
      "A Teoria da Autodeterminação de Edward Deci e Richard Ryan (anos 80 e 2000) mostra que a motivação de qualidade nasce de três necessidades: autonomia, competência e relação. Ambientes de controlo excessivo reduzem a motivação interna e a criatividade.",
      "Os estudos sobre empowerment nas equipas (por exemplo, a meta-análise de Seibert, Wang e Courtright, 2011) associam a autonomia dada pela liderança a mais desempenho, satisfação e compromisso.",
    ],
    ideia: "O controlo garante cumprimento. O compromisso garante que o trabalho continua bem feito quando não estás a ver.",
    exercicio: {
      intro: "Pensa numa tarefa que costumas controlar de perto.",
      perguntas: [
        "Que tarefa é e porque é que a controlas?",
        "Qual é o resultado esperado, o prazo e o que não é negociável?",
        "Que parte do \"como\" podes entregar a outra pessoa já esta semana?",
      ],
    },
    quiz: [
      {
        p: "Qual é um custo típico da liderança pelo controlo a longo prazo?",
        opcoes: ["Mais iniciativa na equipa", "Dependência do líder e erros escondidos", "Mais tempo livre para quem lidera"],
        certa: 1,
        explica: "Com controlo constante, as pessoas esperam ordens e evitam mostrar erros. Tudo passa a depender de ti.",
      },
      {
        p: "Segundo Deci e Ryan, quais são as três necessidades da motivação de qualidade?",
        opcoes: ["Dinheiro, estatuto e segurança", "Autonomia, competência e relação", "Regras, prémios e castigos"],
        certa: 1,
        explica: "Autonomia, competência e relação. Quando as três estão presentes, a motivação vem de dentro.",
      },
      {
        p: "Dar compromisso significa…",
        opcoes: ["Não ter regras", "Limites e objetivo claros, com liberdade no como", "Deixar cada pessoa decidir o objetivo"],
        certa: 1,
        explica: "Clareza no quê e no até quando, liberdade no como.",
      },
    ],
    desafio: "Entrega uma tarefa que costumas controlar. Usa a frase: \"O resultado é este, o prazo é este, o como é contigo.\" Combina um único ponto de contacto.",
    materiaisIds: [41, 42, 68],
    materiaisFormadorIds: [72, 73],
  },
  {
    titulo: "Sentir · Emoções e Segurança Psicológica",
    pilar: "Sentir",
    duracao: "20 min",
    descricao: "Gerir as tuas reações e criar um clima onde as pessoas falam, erram cedo e aprendem.",
    objetivo: "Reconhecer e gerir as tuas emoções e criar segurança psicológica na equipa.",
    secoes: [
      {
        titulo: "O teu estado contagia",
        texto:
          "A equipa lê o teu estado emocional antes de ouvir as tuas palavras. Se chegas tenso/a, o grupo fica em alerta. Se reages mal a uma má notícia, a próxima chega mais tarde, ou não chega. Gerir emoções não é escondê-las: é dar por elas a tempo de escolher a resposta, em vez de reagir em piloto automático.",
      },
      {
        titulo: "Parar, nomear, escolher",
        texto:
          "Quando sentes a emoção a subir: PARA (respira devagar, ganha três segundos), NOMEIA (\"estou frustrado/a\", \"estou com medo de falhar o prazo\") e ESCOLHE (o que preciso agora? o que é mais útil dizer?). Pôr nome à emoção não é fraqueza: é a forma mais rápida de a acalmar.",
      },
      {
        titulo: "Segurança psicológica",
        texto:
          "Segurança psicológica é a crença partilhada de que podes falar, perguntar, discordar ou admitir um erro sem seres humilhado/a ou castigado/a. Não é ser simpático nem baixar a exigência: é exigência com respeito. Cria-se com gestos pequenos e repetidos: agradecer quem traz um problema, admitir os teus erros, perguntar \"o que me está a escapar?\", e nunca ridicularizar uma pergunta.",
      },
    ],
    ciencia: [
      "Amy Edmondson (Harvard, 1999) mostrou que as equipas hospitalares com melhores resultados reportavam MAIS erros, porque tinham segurança para os mostrar e corrigir cedo.",
      "O Projeto Aristóteles da Google (2015) estudou mais de 180 equipas e concluiu que a segurança psicológica era o fator mais importante para o desempenho de uma equipa.",
      "Lieberman e colegas (UCLA, 2007) mostraram que pôr nome a uma emoção reduz a ativação da amígdala, a zona do cérebro ligada à reação de alarme.",
    ],
    ideia: "Uma equipa só te traz os problemas a tempo se for seguro trazê-los.",
    exercicio: {
      intro: "Lembra-te da última vez que reagiste a quente com alguém.",
      perguntas: [
        "O que aconteceu e o que sentiste (nomeia a emoção)?",
        "Se tivesses parado três segundos, o que terias dito em vez disso?",
        "Que gesto concreto vais repetir esta semana para aumentar a segurança na tua equipa?",
      ],
    },
    quiz: [
      {
        p: "No estudo de Amy Edmondson, as melhores equipas…",
        opcoes: ["Cometiam menos erros", "Reportavam mais erros", "Escondiam os erros do líder"],
        certa: 1,
        explica: "Reportavam mais, porque era seguro. Os erros eram corrigidos cedo e a equipa aprendia.",
      },
      {
        p: "Segurança psicológica significa…",
        opcoes: ["Baixar a exigência para não criar tensão", "Poder falar e errar sem humilhação, sem baixar a exigência", "Evitar conversas difíceis"],
        certa: 1,
        explica: "Exigência e respeito ao mesmo tempo. Não é facilitismo.",
      },
      {
        p: "Qual é a sequência para gerir uma emoção a quente?",
        opcoes: ["Reagir, explicar, pedir desculpa", "Parar, nomear, escolher", "Ignorar, esquecer, seguir"],
        certa: 1,
        explica: "Parar dá tempo, nomear acalma, escolher devolve-te o controlo da resposta.",
      },
    ],
    desafio: "Na próxima reunião ou conversa de equipa, pergunta: \"O que me está a escapar?\" e agradece a primeira pessoa que trouxer um problema, mesmo que não gostes do que ouves.",
    materiaisIds: [41, 42, 70],
    materiaisFormadorIds: [76, 77],
  },
  {
    titulo: "Ser · Coerência, consistência e exemplo",
    pilar: "Ser",
    duracao: "20 min",
    descricao: "A confiança constrói-se no espaço entre o que dizes e o que fazes.",
    objetivo: "Definir os teus valores de liderança e alinhar o que dizes com o que fazes.",
    secoes: [
      {
        titulo: "A equipa vê o que fazes",
        texto:
          "As pessoas aprendem muito mais com o teu comportamento do que com os teus discursos. Se pedes pontualidade e chegas tarde, a mensagem real é \"a pontualidade é para os outros\". Cada pequena incoerência tira-te um bocadinho de credibilidade, e a credibilidade é o que te permite pedir esforço quando é preciso.",
      },
      {
        titulo: "Coerência e consistência",
        texto:
          "COERÊNCIA é o alinhamento entre o que dizes e o que fazes. CONSISTÊNCIA é seres a mesma pessoa em dias bons e em dias maus, com quem gostas e com quem não gostas. Uma equipa aguenta um líder exigente. O que não aguenta é um líder imprevisível, porque passa o tempo a tentar adivinhar o teu humor em vez de trabalhar.",
      },
      {
        titulo: "Os teus três valores",
        texto:
          "Escolhe três valores que queres que guiem a tua liderança (por exemplo: respeito, responsabilidade, transparência). Para cada um, define um comportamento observável: o que alguém te veria FAZER se esse valor estivesse vivo. Um valor sem comportamento é só uma palavra bonita na parede.",
      },
    ],
    ciencia: [
      "Tony Simons (Universidade de Cornell, 2002) chamou-lhe \"integridade comportamental\": o alinhamento percebido entre palavras e ações. Num estudo com hotéis, onde as equipas avaliavam mais alto a integridade das chefias, havia mais compromisso, menos rotatividade e mais lucro.",
      "Os estudos sobre liderança autêntica (Avolio e Gardner, 2005) associam autoconsciência, transparência e ação de acordo com valores a mais confiança e envolvimento das equipas.",
    ],
    ideia: "Não és aquilo que dizes que valorizas. És aquilo que a tua equipa te vê fazer repetidamente.",
    exercicio: {
      intro: "Define a tua base de liderança.",
      perguntas: [
        "Os meus três valores de liderança são…",
        "Para cada valor, o comportamento que alguém me veria fazer é…",
        "Onde é que hoje existe um espaço entre o que digo e o que faço?",
      ],
    },
    quiz: [
      {
        p: "Coerência é…",
        opcoes: ["Ser igual em todos os dias", "O alinhamento entre o que dizes e o que fazes", "Concordar com toda a equipa"],
        certa: 1,
        explica: "Coerência é palavra e ação alinhadas. Ser igual em todos os dias é consistência.",
      },
      {
        p: "O que é mais difícil para uma equipa?",
        opcoes: ["Um líder exigente", "Um líder imprevisível", "Um líder calmo"],
        certa: 1,
        explica: "A imprevisibilidade gasta energia: a equipa passa a gerir o teu humor em vez do trabalho.",
      },
      {
        p: "No estudo de Tony Simons, a integridade comportamental das chefias estava associada a…",
        opcoes: ["Mais lucro e menos rotatividade", "Menos lucro", "Nenhum efeito"],
        certa: 0,
        explica: "Mais compromisso, menos saídas e mais lucro. A coerência tem retorno.",
      },
    ],
    desafio: "Escolhe o espaço entre palavra e ação que identificaste e fecha-o esta semana. Se for preciso, assume-o em voz alta: \"Pedi isto e eu próprio/a não o fiz. A partir de hoje faço.\"",
    materiaisIds: [41, 42],
    materiaisFormadorIds: [58, 59],
  },
  {
    titulo: "Que Líder Sou Eu: avaliação 3S e plano",
    pilar: "3S",
    duracao: "25 min",
    descricao: "Como a experiência de trabalhar contigo é sentida do outro lado, e o teu plano de 30 dias.",
    objetivo: "Fazer a tua avaliação 3S e sair com um plano concreto de 30 dias.",
    secoes: [
      {
        titulo: "Como te vês e como te veem",
        texto:
          "A pergunta mais honesta que um líder pode fazer não é \"que tipo de líder acho que sou?\", é \"como é trabalhar comigo?\". Há sempre uma parte de nós que os outros veem e nós não. A única forma de a conhecer é perguntar, ouvir sem te defenderes e agradecer.",
      },
      {
        titulo: "Pedir retorno sem medo",
        texto:
          "Escolhe duas ou três pessoas de confiança e faz-lhes apenas duas perguntas: \"O que devo continuar a fazer?\" e \"O que faria a maior diferença se eu mudasse?\". Ouve, anota e responde só \"obrigado/a\". Não expliques nem justifiques: estás a recolher informação, não a defender-te.",
      },
      {
        titulo: "Pequenos passos, todos os dias",
        texto:
          "Mudar comportamentos de liderança leva tempo. Em vez de grandes promessas, escolhe um comportamento por pilar e liga-o a uma situação concreta: \"Se [situação], então eu [comportamento]\". É mais fácil cumprir quando já decidiste antes o que fazer.",
      },
    ],
    ciencia: [
      "Tasha Eurich (2018) estimou que, embora cerca de 95% das pessoas se considerem autoconscientes, apenas 10 a 15% o são de facto. Pedir retorno é a forma mais fiável de fechar essa diferença.",
      "Peter Gollwitzer mostrou que as \"intenções de implementação\" (planos do tipo se… então…) aumentam claramente a probabilidade de cumprir um objetivo. Phillippa Lally (UCL, 2010) observou que um novo hábito leva, em média, cerca de 66 dias a tornar-se automático.",
    ],
    ideia: "A tua liderança não é o que pretendes: é o que os outros vivem quando trabalham contigo.",
    exercicio: {
      intro: "Prepara o teu pedido de retorno.",
      perguntas: [
        "A quem vou pedir retorno (2 ou 3 pessoas)?",
        "O que acho que me vão dizer para continuar a fazer?",
        "O que tenho medo que me digam para mudar?",
      ],
    },
    avaliacao: true,
    quiz: [
      {
        p: "Quando recebes retorno, a melhor resposta é…",
        opcoes: ["Explicar porque fizeste assim", "Ouvir, anotar e agradecer", "Dar retorno de volta"],
        certa: 1,
        explica: "Estás a recolher informação. Defender-te faz com que as pessoas deixem de ser honestas contigo.",
      },
      {
        p: "Um plano do tipo \"Se [situação], então eu [comportamento]\" chama-se…",
        opcoes: ["Intenção de implementação", "Objetivo SMART", "Avaliação 360"],
        certa: 0,
        explica: "Intenção de implementação (Gollwitzer). Decides antes o que vais fazer, e é muito mais fácil cumprir.",
      },
      {
        p: "Quanto tempo leva, em média, um novo hábito a tornar-se automático (Lally, 2010)?",
        opcoes: ["7 dias", "Cerca de 66 dias", "1 ano"],
        certa: 1,
        explica: "Cerca de 66 dias, com grande variação entre pessoas. Por isso o plano começa com 30 dias e continua.",
      },
    ],
    desafio: "Pede retorno a pelo menos duas pessoas esta semana com as duas perguntas da aula. Segue o teu plano de 30 dias e revê-o no fim.",
    materiaisIds: [41, 42, 71],
    materiaisFormadorIds: [78, 79],
  },
];

// Avaliação 3S (aula 6): 1 = nada, 5 = totalmente
export const AVALIACAO_3S = [
  { pilar: "Saber", frase: "Sei claramente quais são os objetivos da minha equipa e explico-os bem." },
  { pilar: "Saber", frase: "Ajusto a forma como lidero a cada pessoa e a cada tarefa." },
  { pilar: "Saber", frase: "Delego e acompanho sem controlar cada detalhe." },
  { pilar: "Sentir", frase: "Dou pelas minhas emoções a tempo de escolher a resposta." },
  { pilar: "Sentir", frase: "As pessoas trazem-me problemas e erros sem medo." },
  { pilar: "Sentir", frase: "Ouço até ao fim antes de responder, mesmo quando discordo." },
  { pilar: "Ser", frase: "Faço aquilo que peço aos outros." },
  { pilar: "Ser", frase: "Sou a mesma pessoa em dias bons e em dias maus." },
  { pilar: "Ser", frase: "Sei quais são os meus valores e decido de acordo com eles." },
];

export const PLANO_3S = {
  Saber: {
    titulo: "Reforçar o Saber",
    semanas: [
      "Semana 1: escreve o objetivo da equipa numa frase e partilha-o com todos.",
      "Semana 2: faz o diagnóstico (sabe? quer?) de cada pessoa nas três tarefas principais.",
      "Semana 3: delega uma tarefa com resultado, prazo e limites claros; o como fica com a pessoa.",
      "Semana 4: revê com a equipa o que correu bem e o que ajustar.",
    ],
    seEntao: "Se alguém me trouxer uma tarefa para eu resolver, então pergunto primeiro: \"O que farias tu?\"",
  },
  Sentir: {
    titulo: "Reforçar o Sentir",
    semanas: [
      "Semana 1: todos os dias, nomeia uma emoção tua (no fim do dia, em duas palavras).",
      "Semana 2: aplica o parar, nomear, escolher em pelo menos uma situação tensa.",
      "Semana 3: agradece em público a quem trouxer um problema ou erro.",
      "Semana 4: pergunta à equipa \"o que me está a escapar?\" e age sobre uma resposta.",
    ],
    seEntao: "Se sentir a irritação a subir, então respiro devagar três vezes antes de responder.",
  },
  Ser: {
    titulo: "Reforçar o Ser",
    semanas: [
      "Semana 1: define os teus três valores e um comportamento observável para cada um.",
      "Semana 2: identifica um espaço entre o que dizes e o que fazes, e fecha-o.",
      "Semana 3: num dia difícil, mantém a mesma forma de tratar as pessoas e repara no efeito.",
      "Semana 4: pede a alguém de confiança: \"Onde é que achas que não sou coerente?\"",
    ],
    seEntao: "Se pedir algo à equipa, então sou a primeira pessoa a fazê-lo.",
  },
};
