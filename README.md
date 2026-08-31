# Escola 3S — como pôr isto online

Este projeto está pronto a publicar. Não precisas de saber programar —
só precisas de seguir os passos abaixo, uma vez. Depois disso, sempre
que quiseres mudar alguma coisa, pedes-me (ao Claude) e eu trato da
parte técnica.

Custo: **0€ para começar.** Tudo o que é usado aqui tem um plano
gratuito que chega perfeitamente para uma escola a arrancar.

---

## Passo 1 — Criar conta no GitHub (grátis)

O GitHub é onde o código da tua app fica guardado.

1. Vai a [github.com](https://github.com) e cria uma conta gratuita.
2. Clica no botão verde **"New"** (ou no `+` no canto superior direito → "New repository").
3. Dá-lhe o nome `escola-3s`. Deixa "Public" selecionado. **Não marques**
   nenhuma opção de "Add a README" — este projeto já vem com um.
4. Clica em **"Create repository"**.

### Carregar os ficheiros (sem terminal, direto no browser)

1. Na página do repositório que acabaste de criar, procura o link
   **"uploading an existing file"** (aparece no meio da página, nas
   instruções de arranque).
2. Extrai o `.zip` que te enviei no teu computador (duplo-clique nele,
   ou "Extrair tudo").
3. Arrasta **todo o conteúdo** da pasta extraída (todos os ficheiros e
   pastas — `src`, `public`, `package.json`, etc.) para a área de
   upload do GitHub.
4. Em baixo, onde diz "Commit changes", podes deixar o texto como
   está, e clicas no botão verde **"Commit changes"**.

Pronto — o código já está no GitHub.

## Passo 2 — Criar conta na Vercel (grátis)

A Vercel é quem publica a tua app na internet, com um link (URL) que
podes partilhar.

1. Vai a [vercel.com](https://vercel.com) e cria conta — o mais
   simples é escolher "Continue with GitHub", usando a conta que
   acabaste de criar.
2. Clica em "Add New… → Project".
3. Escolhe o repositório `escola-3s` que criaste no Passo 1.
4. A Vercel deteta sozinha que é um projeto Vite/React. Não precisas
   de mudar nenhuma definição — clica em "Deploy".
5. Ao fim de um minuto, tens um link como
   `escola-3s.vercel.app` — a tua app está online.

A partir daqui, sempre que o código no GitHub for atualizado, a
Vercel publica a nova versão sozinha, automaticamente.

## Passo 3 — Criar conta no Supabase (grátis para começar)

Isto é o que vai tratar dos logins a sério, das marcações, do
progresso de cada aluno — tudo isto guardado numa base de dados real,
em vez de só no telemóvel de cada pessoa.

1. Vai a [supabase.com](https://supabase.com) e cria uma conta.
2. Cria um novo projeto (dá-lhe o nome que quiseres, ex. "Escola 3S").
3. Quando estiver pronto, vai a **Project Settings → API**. Vais
   encontrar duas coisas: o **Project URL** e a **anon public key**.
4. Diz-me quando as tiveres — eu ligo isso ao projeto e trato de
   criar as tabelas todas (utilizadores, cursos, marcações, etc.).

Enquanto não fizeres este passo, a app **já funciona na mesma** —
os dados ficam guardados no telemóvel/computador de cada pessoa
(através do ficheiro `src/lib/storage.js`). Só não são partilhados
entre dispositivos diferentes.

## Ícone da app (instalar no telemóvel/computador)

Este projeto já vem com o logótipo da Escola 3S preparado como ícone
(`public/icons/`). Assim que a app estiver publicada (Passo 2), quem a
visitar pode "Adicionar ao ecrã principal" (no telemóvel) ou instalar
como app (no computador, através do ícone que aparece na barra de
endereço do Chrome) — e o ícone que aparece já é o teu, não um
genérico.

---

## No dia a dia

Não precisas de voltar a estes passos técnicos. Sempre que quiseres:

- Mudar um texto, uma cor, um preço
- Acrescentar um curso, um workshop, um material
- Corrigir alguma coisa que não está a funcionar bem

...é só pedires-me, aqui ou no Claude Code. Eu faço a alteração no
código e publico a nova versão — tu só vês a app atualizada.

## Se quiseres testar no teu computador antes de publicar

Só é preciso se quiseres — a Vercel trata de tudo sozinha. Mas se
tiveres o [Node.js](https://nodejs.org) instalado e quiseres ver a
app a correr no teu computador:

```
npm install
npm run dev
```

Depois abre o link que aparecer no terminal (normalmente
`http://localhost:5173`).
