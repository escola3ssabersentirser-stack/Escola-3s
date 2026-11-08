// Curso Vida 3S (Life Coaching 3S) — conteúdo completo dentro da app
// Português de Portugal, tratamento por "tu", linguagem neutra.
// Instrumento de desenvolvimento pessoal; não substitui acompanhamento psicológico.

export const AULAS_VIDA_3S = [
  {
    titulo: "O Modelo 3S na tua vida",
    pilar: "3S",
    duracao: "15 min",
    descricao: "Viver em piloto automático ou viver com intenção: o que muda quando juntas conhecer-te, sentir e agir de acordo com quem és.",
    objetivo: "Perceber os três pilares e onde estás hoje em cada um.",
    secoes: [
      {
        titulo: "O piloto automático",
        texto:
          "Grande parte do nosso dia acontece sem darmos por isso: as mesmas reações, os mesmos pensamentos, as mesmas desculpas. O piloto automático poupa energia, mas também nos afasta do que realmente queremos. Viver com intenção não é controlar tudo: é dar por ti mais vezes e escolher, em vez de apenas reagir.",
      },
      {
        titulo: "Saber, Sentir, Ser",
        texto:
          "SABER é conhecer-te: os teus pensamentos, crenças, valores e aquilo que te dá sentido. SENTIR é a relação com as tuas emoções e com os outros: reconhecer o que sentes, cuidar disso e criar relações saudáveis. SER é agir de acordo com quem és: hábitos, limites e escolhas coerentes com os teus valores, mesmo quando há pressão para seres outra coisa.",
      },
      {
        titulo: "Um pilar de cada vez",
        texto:
          "Ninguém tem os três pilares em equilíbrio perfeito. Há fases em que sabes o que queres mas não tens energia emocional; outras em que sentes muito mas não sabes para onde ir. O caminho 3S não é ser perfeito: é perceber qual o pilar que precisa de cuidado agora e dar-lhe um pequeno passo de cada vez.",
      },
    ],
    ciencia: [
      "Os estudos sobre atenção plena (por exemplo, Killingsworth e Gilbert, Harvard, 2010) mostram que passamos cerca de metade do tempo acordados a pensar noutra coisa que não o que estamos a fazer, e que isso está associado a menos bem-estar.",
      "A investigação sobre bem-estar psicológico de Carol Ryff identifica dimensões como o autoconhecimento, o propósito, as relações positivas e a autonomia, muito próximas dos três pilares Saber, Sentir e Ser.",
    ],
    ideia: "Não precisas de mudar de vida. Precisas de voltar a estar presente nela.",
    exercicio: {
      intro: "Pensa na última semana.",
      perguntas: [
        "Em que momento estiveste mais em piloto automático?",
        "Em que momento te sentiste realmente tu?",
        "Qual dos três pilares (Saber, Sentir, Ser) sentes que precisa de mais cuidado agora?",
      ],
    },
    quiz: [
      {
        p: "Alguém sabe exatamente o que quer, mas vive esgotado/a e desligado/a das próprias emoções. Que pilar precisa de mais cuidado?",
        opcoes: ["Saber", "Sentir", "Ser"],
        certa: 1,
        explica: "O conhecimento existe. Falta cuidar da relação com as emoções: o pilar Sentir.",
      },
      {
        p: "Alguém valoriza a família, mas diz sempre que sim a tudo no trabalho e nunca está em casa. Que pilar está em causa?",
        opcoes: ["Saber", "Sentir", "Ser"],
        certa: 2,
        explica: "Os valores estão claros, mas as escolhas não os seguem: é o pilar Ser.",
      },
      {
        p: "Viver com intenção significa…",
        opcoes: ["Controlar tudo o que acontece", "Dar por ti mais vezes e escolher em vez de reagir", "Nunca sentir emoções difíceis"],
        certa: 1,
        explica: "Não se trata de controlar a vida, mas de estar mais presente e escolher melhor.",
      },
    ],
    desafio: "Três vezes por dia, para durante um minuto e pergunta: o que estou a pensar, o que estou a sentir e isto tem a ver com quem quero ser?",
  },
  {
    titulo: "Saber · Os teus pensamentos e crenças",
    pilar: "Saber",
    duracao: "20 min",
    descricao: "Os pensamentos não são factos. Como as crenças moldam o que sentes e o que fazes, e como as podes questionar.",
    objetivo: "Identificar um pensamento automático e uma crença que te limitam, e criar uma alternativa realista.",
    secoes: [
      {
        titulo: "Pensamento, emoção, ação",
        texto:
          "Perante a mesma situação, duas pessoas sentem coisas diferentes, porque a interpretam de forma diferente. Se alguém não te responde a uma mensagem, podes pensar \"está ocupado/a\" ou \"está chateado/a comigo\". O pensamento que escolhes muda a emoção que sentes e aquilo que fazes a seguir.",
      },
      {
        titulo: "De onde vêm as crenças",
        texto:
          "As crenças são ideias profundas sobre ti, os outros e o mundo, muitas vezes aprendidas cedo: \"tenho de agradar\", \"não sou suficiente\", \"pedir ajuda é fraqueza\". Na altura fizeram sentido e até te protegeram. Hoje, algumas já não te servem e funcionam como regras invisíveis que limitam as tuas escolhas.",
      },
      {
        titulo: "Questionar sem lutar",
        texto:
          "Não precisas de lutar contra um pensamento. Basta examiná-lo: que provas tenho de que é verdade? Que provas tenho do contrário? O que diria a uma pessoa amiga que pensasse isto? Que pensamento mais realista e mais útil posso ter? Com treino, o pensamento antigo perde força e o novo ganha espaço.",
      },
    ],
    ciencia: [
      "A terapia cognitiva, desenvolvida por Aaron Beck a partir dos anos 60, mostrou que os pensamentos automáticos influenciam as emoções e os comportamentos. As abordagens cognitivo-comportamentais estão entre as mais estudadas e eficazes na área da saúde mental.",
      "A técnica de reestruturação cognitiva, que consiste em examinar provas e criar pensamentos alternativos, é usada em programas de desenvolvimento pessoal e de coaching de base científica.",
    ],
    ideia: "Não és os teus pensamentos. És quem os pode observar e escolher.",
    exercicio: {
      intro: "Escolhe uma situação recente que te deixou desconfortável.",
      perguntas: [
        "O que aconteceu (só factos) e o que pensaste nesse momento?",
        "Que provas tens de que esse pensamento é verdade? E do contrário?",
        "Que pensamento mais realista e mais útil podes ter?",
      ],
    },
    quiz: [
      {
        p: "Segundo a abordagem cognitiva, o que determina mais a forma como te sentes numa situação?",
        opcoes: ["Só a situação em si", "A forma como interpretas a situação", "A sorte"],
        certa: 1,
        explica: "A interpretação, ou seja, o pensamento sobre a situação, tem grande influência na emoção.",
      },
      {
        p: "Qual é uma boa pergunta para examinar um pensamento?",
        opcoes: ["Porque é que sou sempre assim?", "Que provas tenho a favor e contra?", "Como faço para nunca mais pensar isto?"],
        certa: 1,
        explica: "Examinar provas ajuda a ver o pensamento com mais realismo, sem lutar contra ele.",
      },
      {
        p: "As crenças limitantes…",
        opcoes: ["Nunca tiveram utilidade", "Podem ter-nos protegido no passado, mas hoje limitar-nos", "São impossíveis de mudar"],
        certa: 1,
        explica: "Muitas crenças tiveram uma função. Reconhecê-lo ajuda a mudá-las com menos culpa.",
      },
    ],
    desafio: "Esta semana, sempre que notares um pensamento duro sobre ti, escreve-o e pergunta: o que diria a uma pessoa amiga que pensasse isto?",
  },
  {
    titulo: "Saber · Propósito e valores",
    pilar: "Saber",
    duracao: "20 min",
    descricao: "O que dá sentido à tua vida e os valores que queres seguir, mesmo quando é difícil.",
    objetivo: "Clarificar os teus valores principais e uma frase de propósito.",
    secoes: [
      {
        titulo: "Propósito não é uma profissão",
        texto:
          "Propósito é a direção que dá sentido ao que fazes. Pode viver-se numa profissão, mas também na forma como cuidas da família, ajudas a tua comunidade ou crias algo. Não precisa de ser grandioso: \"ajudar as pessoas à minha volta a sentirem-se ouvidas\" é um propósito tão válido como mudar o mundo.",
      },
      {
        titulo: "Valores são bússolas",
        texto:
          "Objetivos alcançam-se e terminam. Valores nunca se esgotam: são direções que podes seguir todos os dias. Se valorizas a família, há sempre mais uma forma de estar presente. Quando as tuas escolhas se afastam dos teus valores, aparece um mal-estar difícil de explicar. Quando se aproximam, mesmo os dias difíceis fazem sentido.",
      },
      {
        titulo: "Os teus valores, não os dos outros",
        texto:
          "Muitas pessoas vivem a correr atrás de valores que não são seus: o sucesso que a família esperava, a imagem que as redes sociais vendem, o que \"é suposto\" querer. Pergunta-te: se ninguém soubesse, se ninguém aplaudisse, isto continuava a ser importante para mim? Se sim, é teu.",
      },
    ],
    ciencia: [
      "Patrick Hill e Nicholas Turiano (2014) acompanharam mais de 6000 adultos durante 14 anos: quem relatava maior sentido de propósito tinha menor risco de mortalidade ao longo desse período, em todas as idades.",
      "A Terapia de Aceitação e Compromisso (Steven Hayes) usa a clarificação de valores como um dos seus pilares e tem evidência de eficácia na redução da ansiedade e no aumento do bem-estar.",
    ],
    ideia: "Os objetivos dizem-te onde chegar. Os valores dizem-te como queres viver pelo caminho.",
    exercicio: {
      intro: "Clarifica a tua bússola.",
      perguntas: [
        "Quais são os 3 valores mais importantes para ti? Porquê?",
        "Em que área da tua vida estás mais longe desses valores?",
        "Completa: quero usar o que tenho de melhor para…",
      ],
    },
    quiz: [
      {
        p: "Qual é a principal diferença entre um objetivo e um valor?",
        opcoes: ["Não há diferença", "Um objetivo alcança-se e termina; um valor é uma direção contínua", "Os valores são mais fáceis"],
        certa: 1,
        explica: "Os valores nunca se esgotam: podes segui-los todos os dias.",
      },
      {
        p: "Como sabes se um valor é mesmo teu?",
        opcoes: ["Se a família o aprova", "Se continuava importante mesmo sem ninguém saber ou aplaudir", "Se está na moda"],
        certa: 1,
        explica: "Um valor teu não depende de aprovação externa.",
      },
      {
        p: "No estudo de Hill e Turiano, um maior sentido de propósito estava associado a…",
        opcoes: ["Menor risco de mortalidade", "Mais stress", "Nenhuma diferença"],
        certa: 0,
        explica: "O propósito está ligado à saúde e à longevidade, em todas as idades.",
      },
    ],
    desafio: "Escolhe o valor de que estás mais afastado/a e faz uma pequena ação por dia para te aproximares dele.",
  },
  {
    titulo: "Sentir · Emoções, ansiedade e pressão",
    pilar: "Sentir",
    duracao: "20 min",
    descricao: "Nomear, aceitar e cuidar das emoções, incluindo a ansiedade e a pressão para corresponder ao que os outros esperam.",
    objetivo: "Aprender a reconhecer e a regular as emoções difíceis, sem as esconder nem te deixares levar por elas.",
    secoes: [
      {
        titulo: "Todas as emoções têm uma função",
        texto:
          "O medo protege-te, a tristeza ajuda-te a largar o que perdeste, a raiva mostra-te um limite que foi passado, a ansiedade prepara-te para o que é importante. O problema não está em sentir, mas em fugir das emoções ou em deixar que decidam por ti. Sentir é informação, não é uma ordem.",
      },
      {
        titulo: "Nomear para acalmar",
        texto:
          "Quanto mais precisa é a palavra que dás ao que sentes, mais fácil se torna gerir. \"Estou mal\" é vago. \"Estou desiludido/a porque esperava outro reconhecimento\" já te mostra o caminho. Quando a ansiedade sobe: para, respira devagar, nomeia o que sentes e pergunta \"do que preciso agora?\".",
      },
      {
        titulo: "A pressão para corresponder",
        texto:
          "Vivemos rodeados de comparações: nas redes sociais, no trabalho, na família. Comparar a tua vida real com os melhores momentos dos outros gera ansiedade e sensação de que nunca chega. Repara quando a comparação aparece, lembra-te de que estás a ver apenas uma parte da vida dos outros e volta aos teus valores: estou a fazer isto por mim ou para corresponder?",
      },
    ],
    ciencia: [
      "Matthew Lieberman e colegas (UCLA, 2007) mostraram que pôr nome a uma emoção reduz a ativação da amígdala, a zona do cérebro ligada à reação de alarme.",
      "A investigação de Lisa Feldman Barrett sobre granularidade emocional mostra que as pessoas que distinguem melhor as suas emoções conseguem regulá-las com mais eficácia.",
      "Revisões de estudos sobre redes sociais (por exemplo, Verduyn e colegas, 2017) associam a comparação social frequente, sobretudo com quem parece estar \"melhor\", a menor bem-estar.",
    ],
    ideia: "Não tens de escolher entre esconder o que sentes e deixares-te levar. Podes sentir e escolher.",
    exercicio: {
      intro: "Pensa num momento recente de ansiedade ou pressão.",
      perguntas: [
        "O que sentiste? Tenta dar um nome preciso à emoção.",
        "Do que precisavas nesse momento?",
        "Em que situação sentes mais pressão para corresponder ao que os outros esperam?",
      ],
    },
    quiz: [
      {
        p: "Qual destas afirmações sobre as emoções é verdadeira?",
        opcoes: ["As emoções difíceis devem ser eliminadas", "Todas as emoções têm uma função e trazem informação", "Sentir ansiedade é sinal de fraqueza"],
        certa: 1,
        explica: "As emoções são informação. O objetivo é ouvi-las e escolher como agir.",
      },
      {
        p: "Porque é que ajuda dar um nome preciso ao que sentes?",
        opcoes: ["Porque reduz a reação de alarme e mostra do que precisas", "Porque faz a emoção desaparecer para sempre", "Não ajuda"],
        certa: 0,
        explica: "Nomear acalma o cérebro e aponta o caminho.",
      },
      {
        p: "Quando a comparação com os outros aparece, uma boa pergunta é…",
        opcoes: ["Porque é que não sou como eles?", "Estou a fazer isto por mim ou para corresponder?", "Como posso parecer melhor?"],
        certa: 1,
        explica: "Voltar aos teus valores tira força à pressão externa.",
      },
    ],
    desafio: "Durante uma semana, no fim de cada dia, escreve as duas emoções mais fortes que sentiste e do que precisavas. Reduz em 30 minutos por dia o tempo nas redes sociais e repara na diferença.",
  },
  {
    titulo: "Sentir · Relações e limites",
    pilar: "Sentir",
    duracao: "20 min",
    descricao: "As relações são a maior fonte de bem-estar, e os limites saudáveis são o que as protege.",
    objetivo: "Identificar as relações que te fazem bem e treinar dizer \"não\" com respeito.",
    secoes: [
      {
        titulo: "As relações contam mais do que pensas",
        texto:
          "Quando se pergunta o que faz uma vida boa, muitas pessoas respondem dinheiro, sucesso ou reconhecimento. A investigação de longo prazo aponta noutra direção: a qualidade das relações. Não é a quantidade de pessoas, é ter algumas com quem podes ser tu, contar nos dias difíceis e partilhar os bons.",
      },
      {
        titulo: "O que é um limite",
        texto:
          "Um limite é a linha entre o que aceitas e o que não aceitas, para cuidares de ti. Não é egoísmo nem castigo para os outros: é uma forma de respeito, por ti e pela relação. Sem limites, acumulas cansaço e ressentimento; com limites claros, as relações ficam mais honestas.",
      },
      {
        titulo: "Dizer não sem culpa",
        texto:
          "Um \"não\" saudável é curto, claro e gentil: \"Obrigado/a por te lembrares de mim, mas desta vez não consigo.\" Não precisas de te justificar em excesso. A culpa que aparece no início é normal e vai diminuindo com a prática. Lembra-te: cada \"não\" a algo que não é para ti é um \"sim\" ao que é importante.",
      },
    ],
    ciencia: [
      "O Estudo de Harvard sobre o Desenvolvimento Adulto, que acompanha pessoas há mais de 80 anos (dirigido por Robert Waldinger), concluiu que a qualidade das relações é um dos fatores que mais prevê a saúde e a felicidade ao longo da vida.",
      "Os estudos sobre solidão (por exemplo, Holt-Lunstad e colegas, 2010) associam a falta de relações de apoio a riscos para a saúde comparáveis a fatores como o tabagismo.",
    ],
    ideia: "Um limite não afasta quem gosta de ti. Mostra-lhe como cuidar de ti.",
    exercicio: {
      intro: "Olha para as tuas relações.",
      perguntas: [
        "Com quem podes ser realmente tu? Quando foi a última vez que estiveste com essa pessoa?",
        "Em que situação te custa mais dizer \"não\"?",
        "Escreve o \"não\" gentil que vais usar da próxima vez.",
      ],
    },
    quiz: [
      {
        p: "Segundo o Estudo de Harvard sobre o Desenvolvimento Adulto, o que mais prevê a felicidade e a saúde ao longo da vida?",
        opcoes: ["O dinheiro", "A qualidade das relações", "A fama"],
        certa: 1,
        explica: "Relações de qualidade, não a quantidade, são um dos fatores mais fortes.",
      },
      {
        p: "Um limite saudável é…",
        opcoes: ["Uma forma de castigar os outros", "Uma forma de respeito por ti e pela relação", "Sinal de egoísmo"],
        certa: 1,
        explica: "Os limites protegem a relação e o teu bem-estar.",
      },
      {
        p: "Qual destes é um \"não\" saudável?",
        opcoes: ["Uma longa justificação cheia de desculpas", "\"Obrigado/a por te lembrares de mim, mas desta vez não consigo.\"", "Não responder e desaparecer"],
        certa: 1,
        explica: "Curto, claro e gentil, sem justificações em excesso.",
      },
    ],
    desafio: "Esta semana, marca um momento a sós com uma pessoa que te faz bem. E pratica pelo menos um \"não\" gentil.",
  },
  {
    titulo: "Ser · Ser tu, todos os dias",
    pilar: "Ser",
    duracao: "25 min",
    descricao: "Autocompaixão, hábitos pequenos e coerência com os teus valores. A tua avaliação 3S e o plano de 30 dias.",
    objetivo: "Transformar o que aprendeste em hábitos e sair com um plano concreto.",
    secoes: [
      {
        titulo: "Tratar-te como tratas quem amas",
        texto:
          "Muitas pessoas falam consigo de uma forma que nunca usariam com alguém de quem gostam. A autocompaixão não é ser brando/a contigo nem desistir de crescer: é reconhecer que errar e sofrer faz parte de ser humano e responder com a mesma gentileza que darias a uma pessoa amiga. E é precisamente essa gentileza que dá força para mudar.",
      },
      {
        titulo: "Pequenos passos, todos os dias",
        texto:
          "A mudança que dura raramente é dramática. É feita de pequenos hábitos repetidos: cinco minutos de silêncio de manhã, uma pausa para respirar antes de responder, um \"não\" por semana. Escolhe passos tão pequenos que seja quase impossível falhar. Quando ficarem automáticos, acrescenta outro.",
      },
      {
        titulo: "Ser coerente com quem és",
        texto:
          "Ser é escolher, dia após dia, de acordo com os teus valores, e não de acordo com o medo ou com a pressão dos outros. Usa planos simples: \"Se [situação], então eu [ação]\". Por exemplo: \"Se me pedirem algo que não posso fazer, então digo que não com gentileza.\" Assim, quando o momento chega, já decidiste.",
      },
    ],
    ciencia: [
      "A investigação de Kristin Neff sobre autocompaixão, e meta-análises como a de MacBeth e Gumley (2012), associam níveis mais altos de autocompaixão a menos ansiedade, menos depressão e maior bem-estar.",
      "Phillippa Lally (UCL, 2010) observou que um novo hábito leva, em média, cerca de 66 dias a tornar-se automático. Peter Gollwitzer mostrou que os planos do tipo se… então… aumentam a probabilidade de cumprir o que te propões.",
    ],
    ideia: "Não precisas de ser outra pessoa. Precisas de ser tu mais vezes.",
    exercicio: {
      intro: "Prepara a tua mudança.",
      perguntas: [
        "O que dirias a uma pessoa amiga na tua situação? Escreve isso para ti.",
        "Que hábito pequeno, de 5 minutos, vais começar amanhã?",
        "Escreve um plano se… então… para o teu maior obstáculo.",
      ],
    },
    avaliacao: true,
    quiz: [
      {
        p: "A autocompaixão significa…",
        opcoes: ["Desistir de crescer", "Tratar-te com a gentileza que darias a uma pessoa amiga", "Nunca reconhecer erros"],
        certa: 1,
        explica: "É reconhecer a dificuldade com gentileza, o que dá força para mudar.",
      },
      {
        p: "Qual é a melhor forma de criar um hábito novo?",
        opcoes: ["Mudar tudo de uma vez", "Começar com um passo tão pequeno que seja quase impossível falhar", "Esperar pela motivação certa"],
        certa: 1,
        explica: "Passos pequenos e repetidos criam hábitos que duram.",
      },
      {
        p: "\"Se me pedirem algo que não posso fazer, então digo que não com gentileza\" é…",
        opcoes: ["Uma intenção de implementação (plano se… então…)", "Uma crença limitante", "Um valor"],
        certa: 0,
        explica: "É um plano decidido antes, que facilita agir quando o momento chega.",
      },
    ],
    desafio: "Segue o teu plano de 30 dias. Em cada dia difícil, pergunta-te: o que diria a uma pessoa amiga agora?",
  },
];

// Avaliação 3S de vida (aula 6): 1 = nada, 5 = totalmente
export const AVALIACAO_VIDA_3S = [
  { pilar: "Saber", frase: "Conheço os meus valores e o que dá sentido à minha vida." },
  { pilar: "Saber", frase: "Consigo questionar os meus pensamentos em vez de acreditar logo neles." },
  { pilar: "Saber", frase: "Sei o que quero para os próximos meses." },
  { pilar: "Sentir", frase: "Consigo dar nome ao que sinto e perceber do que preciso." },
  { pilar: "Sentir", frase: "A pressão e a comparação com os outros pesam pouco nas minhas escolhas." },
  { pilar: "Sentir", frase: "Tenho relações onde posso ser eu e consigo dizer \"não\" quando preciso." },
  { pilar: "Ser", frase: "As minhas escolhas do dia a dia estão de acordo com os meus valores." },
  { pilar: "Ser", frase: "Trato-me com gentileza quando erro ou falho." },
  { pilar: "Ser", frase: "Tenho hábitos que cuidam de mim." },
];

export const PLANO_VIDA_3S = {
  Saber: {
    titulo: "Reforçar o Saber: conhecer-te",
    semanas: [
      "Semana 1: escolhe os teus 3 valores e escreve-os num sítio onde os vejas todos os dias.",
      "Semana 2: todas as noites, escreve um pensamento difícil do dia e uma alternativa mais realista.",
      "Semana 3: escreve a tua frase de propósito e partilha-a com uma pessoa de confiança.",
      "Semana 4: define um objetivo para os próximos 3 meses, ligado a um dos teus valores.",
    ],
    seEntao: "Se aparecer o pensamento \"não sou suficiente\", então pergunto: que provas tenho do contrário?",
  },
  Sentir: {
    titulo: "Reforçar o Sentir: cuidar das emoções",
    semanas: [
      "Semana 1: no fim de cada dia, dá nome às duas emoções mais fortes que sentiste.",
      "Semana 2: reduz 30 minutos por dia nas redes sociais e repara como te sentes.",
      "Semana 3: marca um momento com uma pessoa que te faz bem.",
      "Semana 4: pratica um \"não\" gentil por semana, sem justificações em excesso.",
    ],
    seEntao: "Se sentir a ansiedade a subir, então paro, respiro devagar três vezes e pergunto: do que preciso agora?",
  },
  Ser: {
    titulo: "Reforçar o Ser: viver de acordo contigo",
    semanas: [
      "Semana 1: escolhe um hábito de 5 minutos (silêncio, caminhada, escrita) e faz todos os dias.",
      "Semana 2: escreve o que dirias a uma pessoa amiga sempre que te criticares.",
      "Semana 3: identifica uma escolha que fazes só para corresponder aos outros e muda-a.",
      "Semana 4: revê o mês: o que já é hábito e qual é o próximo pequeno passo?",
    ],
    seEntao: "Se cometer um erro, então trato-me como trataria uma pessoa amiga e penso no próximo passo.",
  },
};
