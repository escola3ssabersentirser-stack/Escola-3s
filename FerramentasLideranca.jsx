import React, { useState } from "react";

// ————————————————————————————————————————————————
// Dados das 16 ferramentas
// ————————————————————————————————————————————————
const TOOLS = [
  {
    id: "grow",
    category: "Coaching",
    title: "Modelo GROW",
    subtitle: "Conversas que geram ação",
    type: "letters",
    items: [
      { code: "G", label: "Goal | Objetivo", desc: "O que quer alcançar?" },
      { code: "R", label: "Reality | Realidade", desc: "Como está a situação hoje?" },
      { code: "O", label: "Options | Opções", desc: "Que alternativas existem?" },
      { code: "W", label: "Will | Compromisso", desc: "O que vai fazer, quando e como?" },
    ],
    quote: "Da conversa nasce o movimento.",
  },
  {
    id: "perguntas-poderosas",
    category: "Coaching",
    title: "Perguntas Poderosas",
    subtitle: "Despertar consciência, abrir possibilidades",
    type: "bullets",
    items: [
      { label: "O que é realmente importante para si?" },
      { label: "Que outras possibilidades existem?" },
      { label: "O que o impede? O que pode ajudar?" },
      { label: "Que resultado deseja alcançar?" },
      { label: "Qual é o primeiro passo?" },
    ],
    quote: "Melhores perguntas, melhores respostas.",
  },
  {
    id: "escuta-ativa",
    category: "Coaching",
    title: "Escuta Ativa",
    subtitle: "Ouvir para compreender e desenvolver",
    type: "bullets",
    items: [
      { label: "Ouça com atenção total (sem interromper)." },
      { label: "Observe emoções e linguagem não verbal." },
      { label: "Identifique o que é dito e o que não é." },
      { label: "Faça perguntas e reflita." },
      { label: "Valide e mostre que compreendeu." },
    ],
    quote: "Ouvir é uma forma de respeito.",
  },
  {
    id: "roda-competencias",
    category: "Coaching",
    title: "Roda de Competências",
    subtitle: "Avalie e defina prioridades de desenvolvimento",
    type: "wheel",
    wheelSkills: [
      "Liderança",
      "Pensamento crítico",
      "Autonomia",
      "Orientação para resultados",
      "Resiliência",
      "Gestão do tempo",
      "Trabalho de equipa",
      "Comunicação",
    ],
    wheelSteps: [
      "Avalie de 1 a 10 cada competência.",
      "Identifique os pontos fortes e as áreas de melhoria.",
      "Defina as 2 a 3 prioridades de desenvolvimento.",
    ],
    quote: "Conhecer-se é o primeiro passo para evoluir.",
  },
  {
    id: "smart",
    category: "Coaching",
    title: "Objetivos SMART",
    subtitle: "Transforme intenções em resultados",
    type: "letters",
    items: [
      { code: "S", label: "Específico", desc: "O que exatamente quer alcançar?" },
      { code: "M", label: "Mensurável", desc: "Como vai medir o progresso?" },
      { code: "A", label: "Alcançável", desc: "É realista e possível?" },
      { code: "R", label: "Relevante", desc: "Por que é importante?" },
      { code: "T", label: "Temporal", desc: "Qual é o prazo?" },
    ],
    quote: "Objetivos claros geram ação consistente.",
  },
  {
    id: "plano-acao",
    category: "Coaching",
    title: "Plano de Ação",
    subtitle: "Do plano à concretização",
    type: "bullets",
    items: [
      { label: "O QUÊ?", desc: "Que ações serão realizadas?" },
      { label: "QUEM?", desc: "Quem é o responsável?" },
      { label: "QUANDO?", desc: "Qual o prazo?" },
      { label: "RECURSOS", desc: "Que recursos são necessários?" },
      { label: "ACOMPANHAMENTO", desc: "Como será medido o progresso?" },
    ],
    quote: "Planos transformam intenções em realidade.",
  },
  {
    id: "metamodelo",
    category: "PNL",
    title: "Metamodelo da Linguagem",
    subtitle: "Questione generalizações, omissões e distorções",
    type: "bullets",
    items: [
      { label: "Generalizações", desc: "\u201cTodos\u201d, \u201cninguém\u201d, \u201csempre\u201d, \u201cnunca\u201d… → O que acontece em concreto?" },
      { label: "Omissões", desc: "O que está a ser deixado de fora? → Pode dar mais detalhes?" },
      { label: "Distorções", desc: "Interpretações que não são factos. → Como sabe? Que evidências tem?" },
    ],
    example: "Torne a linguagem mais precisa: use palavras concretas e descritivas.",
    quote: "Palavras criam realidades. Use-as com precisão.",
  },
  {
    id: "reenquadramento",
    category: "PNL",
    title: "Reenquadramento",
    subtitle: "Encontre novas perspetivas e possibilidades",
    type: "reframe",
    reframePairs: [
      { from: "Isto é um problema.", to: "É um desafio." },
      { from: "Não consigo.", to: "Ainda não consigo, mas posso aprender." },
      { from: "Foi um erro.", to: "É uma aprendizagem." },
      { from: "É demasiado difícil.", to: "É exigente, mas possível." },
      { from: "Não tenho tempo.", to: "É uma questão de prioridade." },
    ],
    quote: "Não mudamos o que acontece, mas a forma como olhamos para o que acontece.",
  },
  {
    id: "posicoes-percetivas",
    category: "PNL",
    title: "Posições Percetivas",
    subtitle: "Veja a situação por diferentes ângulos",
    type: "bullets",
    items: [
      { label: "1. Eu (1ª posição)", desc: "Como eu vejo? O que penso, sinto e quero?" },
      { label: "2. O Outro (2ª posição)", desc: "Como o outro vê? O que pensa, sente e quer?" },
      { label: "3. Observador (3ª posição)", desc: "Que outra perspetiva existe? O que é importante para o todo?" },
    ],
    example: "Utilize as 3 posições para ganhar empatia, clareza e melhores decisões.",
    quote: "A realidade tem muitas perspetivas.",
  },
  {
    id: "rapport",
    category: "PNL",
    title: "Rapport",
    subtitle: "Crie sintonia e confiança",
    type: "bullets",
    items: [
      { label: "Observe e respeite o estilo do outro (linguagem, ritmo, valores)." },
      { label: "Encontre pontos em comum." },
      { label: "Ajuste a sua comunicação (sem perder autenticidade)." },
      { label: "Demonstre interesse genuíno." },
      { label: "Mantenha presença e coerência." },
    ],
    quote: "As pessoas seguem quem as compreende.",
  },
  {
    id: "calibracao",
    category: "PNL",
    title: "Calibração",
    subtitle: "Observe o que não é dito",
    type: "bullets",
    items: [
      { label: "Observe alterações na linguagem não verbal (expressão, postura, gestos)." },
      { label: "Note o tom de voz e o ritmo." },
      { label: "Identifique emoções e estados internos." },
      { label: "Compare o comportamento com o habitual." },
      { label: "Ajuste a sua abordagem em tempo real." },
    ],
    quote: "O corpo também fala. Esteja atento.",
  },
  {
    id: "cnv",
    category: "Comunicação",
    title: "Comunicação Não Violenta",
    subtitle: "Fale com empatia e clareza",
    type: "letters",
    items: [
      { code: "F", label: "Facto", desc: "Descreva o que aconteceu (sem julgamentos)." },
      { code: "S", label: "Sentimento", desc: "Diga o que sente." },
      { code: "N", label: "Necessidade", desc: "Indique o que precisa." },
      { code: "P", label: "Pedido", desc: "Faça um pedido claro e positivo." },
    ],
    example:
      "\u201cQuando o relatório chegou atrasado (facto), senti frustração (sentimento), porque preciso de planeamento (necessidade). Podes avisar-me com antecedência (pedido)?\u201d",
    quote: "Falar com o coração também é liderança.",
  },
  {
    id: "desc",
    category: "Comunicação",
    title: "Modelo DESC",
    subtitle: "Estruture conversas difíceis",
    type: "letters",
    items: [
      { code: "D", label: "Descrever", desc: "Diga os factos de forma objetiva." },
      { code: "E", label: "Expressar", desc: "Diga como se sente." },
      { code: "S", label: "Sugerir", desc: "Apresente a sua proposta." },
      { code: "C", label: "Concluir", desc: "Combine e confirme o próximo passo." },
    ],
    quote: "Conversas difíceis também podem ser construtivas.",
  },
  {
    id: "sbi",
    category: "Comunicação",
    title: "Modelo SBI",
    subtitle: "Dê feedback claro e eficaz",
    type: "letters",
    items: [
      { code: "S", label: "Situação", desc: "Quando e onde aconteceu? (ser específico)" },
      { code: "B", label: "Comportamento", desc: "O que observou? (descrever, não julgar)" },
      { code: "I", label: "Impacto", desc: "Qual foi o resultado? O que isso gerou?" },
    ],
    example:
      "\u201cNa reunião de ontem (S), interrompeste duas vezes o colega (B), o que fez com que ele não conseguisse terminar a sua ideia (I).\u201d",
    quote: "Feedback é uma ponte, não um ataque.",
  },
  {
    id: "feedforward",
    category: "Comunicação",
    title: "Feedforward",
    subtitle: "Foque o futuro e crie possibilidades",
    type: "bullets",
    items: [
      { label: "Comece pelo objetivo que se deseja alcançar." },
      { label: "Partilhe ideias, sugestões e possibilidades." },
      { label: "Convide o outro a refletir e escolher o que faz sentido." },
      { label: "Defina o próximo passo." },
    ],
    example:
      "\u201cPara a próxima apresentação, que tal experimentares esta estrutura? O que achas que poderia funcionar melhor?\u201d",
    quote: "Menos foco no erro, mais foco no futuro.",
  },
  {
    id: "assertiva",
    category: "Comunicação",
    title: "Comunicação Assertiva",
    subtitle: "Diga o necessário com respeito e limites",
    type: "bullets",
    items: [
      { label: "Seja claro e direto." },
      { label: "Respeite o outro e a si mesmo." },
      { label: "Expresse as suas necessidades." },
      { label: "Defina limites com calma e firmeza." },
      { label: "Procure soluções, não culpados." },
    ],
    quote: "Assertividade é coragem com respeito.",
  },
];

const CATEGORIES = ["Todas", "Coaching", "PNL", "Comunicação"];

const CATEGORY_ACCENT = {
  Coaching: "#2C4770",
  PNL: "#A85C32",
  "Comunicação": "#8A6D3B",
};

// ————————————————————————————————————————————————
// Estilo partilhado
// ————————————————————————————————————————————————
const COLORS = {
  cream: "#F3ECDD",
  cardBg: "#FFFCF5",
  ink: "#2A2318",
  inkSoft: "#655B48",
  navy: "#1E3049",
  gold: "#C89B5C",
  hairline: "#E3D8C0",
};

const serif = "Georgia, 'Iowan Old Style', 'Times New Roman', serif";
const sans = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

function Logo3S({ size = 34 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `1.5px solid ${COLORS.navy}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: serif,
        fontStyle: "italic",
        fontSize: size * 0.42,
        color: COLORS.navy,
        flexShrink: 0,
      }}
    >
      3S
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 11,
        letterSpacing: "0.18em",
        color: COLORS.inkSoft,
        fontFamily: sans,
        paddingTop: 18,
        paddingBottom: 4,
      }}
    >
      SABER · SENTIR · SER
    </div>
  );
}

// ————————————————————————————————————————————————
// Cartão da grelha
// ————————————————————————————————————————————————
function ToolCard({ tool, onOpen }) {
  const accent = CATEGORY_ACCENT[tool.category];
  return (
    <button
      onClick={() => onOpen(tool)}
      style={{
        textAlign: "left",
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.hairline}`,
        borderRadius: 14,
        padding: "16px 16px 14px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "100%",
        fontFamily: sans,
      }}
    >
      <div
        style={{
          fontSize: 10.5,
          letterSpacing: "0.14em",
          color: accent,
          fontWeight: 600,
        }}
      >
        {tool.category.toUpperCase()}
      </div>
      <div
        style={{
          fontFamily: serif,
          fontSize: 18,
          color: COLORS.ink,
          lineHeight: 1.25,
        }}
      >
        {tool.title}
      </div>
      <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontStyle: "italic" }}>
        {tool.subtitle}
      </div>
    </button>
  );
}

// ————————————————————————————————————————————————
// Vista de detalhe
// ————————————————————————————————————————————————
function LetterRow({ code, label, desc, accent }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: accent,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: serif,
          fontSize: 14,
          flexShrink: 0,
        }}
      >
        {code}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.ink }}>{label}</div>
        {desc && (
          <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 1 }}>{desc}</div>
        )}
      </div>
    </div>
  );
}

function BulletRow({ label, desc, accent }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: accent,
          marginTop: 7,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 14, fontWeight: desc ? 600 : 400, color: COLORS.ink }}>
          {label}
        </div>
        {desc && (
          <div style={{ fontSize: 13, color: COLORS.inkSoft, marginTop: 1 }}>{desc}</div>
        )}
      </div>
    </div>
  );
}

function ToolDetail({ tool, onBack }) {
  const accent = CATEGORY_ACCENT[tool.category];
  return (
    <div style={{ fontFamily: sans, paddingBottom: 8 }}>
      <button
        onClick={onBack}
        style={{
          border: "none",
          background: "none",
          color: accent,
          fontSize: 13.5,
          fontWeight: 600,
          cursor: "pointer",
          padding: "4px 0 14px",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        ← Ferramentas
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <Logo3S size={30} />
        <div style={{ fontSize: 10.5, letterSpacing: "0.14em", color: accent, fontWeight: 600 }}>
          FERRAMENTA · {tool.category.toUpperCase()}
        </div>
      </div>

      <div style={{ fontFamily: serif, fontSize: 26, color: COLORS.ink, marginTop: 6 }}>
        {tool.title}
      </div>
      <div style={{ fontSize: 14, fontStyle: "italic", color: COLORS.inkSoft, marginBottom: 20 }}>
        {tool.subtitle}
      </div>

      <div
        style={{
          background: COLORS.cardBg,
          border: `1px solid ${COLORS.hairline}`,
          borderRadius: 14,
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {tool.type === "letters" &&
          tool.items.map((it, i) => (
            <LetterRow key={i} {...it} accent={accent} />
          ))}

        {tool.type === "bullets" &&
          tool.items.map((it, i) => <BulletRow key={i} {...it} accent={accent} />)}

        {tool.type === "reframe" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tool.reframePairs.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    color: COLORS.inkSoft,
                    background: COLORS.cream,
                    borderRadius: 8,
                    padding: "6px 10px",
                    flex: "1 1 130px",
                  }}
                >
                  {p.from}
                </span>
                <span style={{ color: accent }}>→</span>
                <span
                  style={{
                    color: COLORS.ink,
                    fontWeight: 600,
                    background: "#fff",
                    border: `1px solid ${accent}33`,
                    borderRadius: 8,
                    padding: "6px 10px",
                    flex: "1 1 130px",
                  }}
                >
                  {p.to}
                </span>
              </div>
            ))}
          </div>
        )}

        {tool.type === "wheel" && (
          <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {tool.wheelSkills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 12,
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: COLORS.cream,
                    color: COLORS.ink,
                    border: `1px solid ${accent}44`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {tool.wheelSteps.map((s, i) => (
                <BulletRow key={i} label={s} accent={accent} />
              ))}
            </div>
          </>
        )}

        {tool.example && (
          <div
            style={{
              fontSize: 12.5,
              color: COLORS.inkSoft,
              background: COLORS.cream,
              borderRadius: 10,
              padding: 12,
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontWeight: 700, color: COLORS.ink }}>Exemplo: </span>
            {tool.example}
          </div>
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          fontFamily: serif,
          fontStyle: "italic",
          fontSize: 14.5,
          color: accent,
          marginTop: 20,
          padding: "0 12px",
        }}
      >
        “{tool.quote}”
      </div>

      <Footer />
    </div>
  );
}

// ————————————————————————————————————————————————
// Componente principal
// ————————————————————————————————————————————————
export default function FerramentasLideranca() {
  const [category, setCategory] = useState("Todas");
  const [selected, setSelected] = useState(null);

  const filtered =
    category === "Todas" ? TOOLS : TOOLS.filter((t) => t.category === category);

  return (
    <div
      style={{
        background: COLORS.cream,
        minHeight: "100vh",
        padding: "20px 16px 32px",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      {selected ? (
        <ToolDetail tool={selected} onBack={() => setSelected(null)} />
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <Logo3S size={36} />
            <div>
              <div
                style={{
                  fontFamily: serif,
                  fontSize: 21,
                  color: COLORS.ink,
                  lineHeight: 1.1,
                }}
              >
                Escola de Liderança
              </div>
              <div style={{ fontSize: 12.5, color: COLORS.inkSoft, fontStyle: "italic" }}>
                Ferramentas de Coaching, PNL e Comunicação
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              margin: "18px 0 16px",
              paddingBottom: 2,
            }}
          >
            {CATEGORIES.map((c) => {
              const active = c === category;
              const accent = c === "Todas" ? COLORS.navy : CATEGORY_ACCENT[c];
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  style={{
                    flexShrink: 0,
                    fontFamily: sans,
                    fontSize: 12.5,
                    fontWeight: 600,
                    padding: "7px 14px",
                    borderRadius: 999,
                    border: `1px solid ${active ? accent : COLORS.hairline}`,
                    background: active ? accent : "transparent",
                    color: active ? "#fff" : COLORS.inkSoft,
                    cursor: "pointer",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            {filtered.map((t) => (
              <ToolCard key={t.id} tool={t} onOpen={setSelected} />
            ))}
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
