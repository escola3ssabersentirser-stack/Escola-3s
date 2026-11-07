// Envia por correio eletrónico um relatório de perfil (Liderança, Vida, Desporto)
// para a própria pessoa (e, opcionalmente, para outro endereço), com cópia para a Escola 3S.
import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? ""; // chave guardada só no servidor
const EMAIL_DONA = "escola3s.saber.sentir.ser@gmail.com";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const ANON = Deno.env.get("SUPABASE_ANON_KEY")!;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json",
};
const esc = (v: unknown) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
const emailValido = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);

type Seccao = { titulo?: string; texto?: string; itens?: string[] };

function html(titulo: string, nome: string, seccoes: Seccao[]) {
  const blocos = seccoes.slice(0, 20).map((s) => `
    <div style="background:#FFFFFF;border:1px solid #E7D7B5;border-radius:14px;padding:16px 18px;margin:0 0 12px">
      ${s.titulo ? `<p style="font-family:Georgia,serif;font-size:18px;color:#1B3355;margin:0 0 6px">${esc(s.titulo).slice(0, 200)}</p>` : ""}
      ${s.texto ? `<p style="font-size:14px;line-height:1.55;color:#2A2A2A;margin:0">${esc(s.texto).slice(0, 1500)}</p>` : ""}
      ${Array.isArray(s.itens) && s.itens.length ? `<ul style="margin:6px 0 0;padding-left:18px">${s.itens.slice(0, 15).map((i) => `<li style="font-size:14px;line-height:1.5;color:#2A2A2A;margin:0 0 4px">${esc(i).slice(0, 500)}</li>`).join("")}</ul>` : ""}
    </div>`).join("");
  return `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#FBF7F0;padding:28px;border-radius:16px;color:#1B3355">
    <p style="letter-spacing:3px;font-size:11px;color:#C6A253;margin:0 0 6px">ESCOLA 3S · SABER · SENTIR · SER</p>
    <h1 style="font-family:Georgia,serif;font-weight:normal;font-size:28px;margin:4px 0 6px">${esc(titulo)}</h1>
    <p style="font-size:14px;color:#4A5A75;margin:0 0 18px">${nome ? esc(nome) + ", aqui" : "Aqui"} está o teu relatório. Guarda-o e volta a ele sempre que precisares.</p>
    ${blocos}
    <a href="https://escola-3s.pt" style="display:inline-block;background:#1B3355;color:#FBF7F0;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;margin-top:8px">Marcar sessão gratuita de 20 min</a>
    <p style="font-size:11px;color:#6B7690;margin-top:24px">Este relatório é um instrumento de autoconhecimento e não substitui avaliação psicológica ou médica. Escola 3S · escola-3s.pt</p>
  </div>`;
}

async function enviar(to: string, subject: string, corpo: string) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Escola 3S <perfil@escola-3s.pt>", to: [to], subject, html: corpo }),
  });
  return r.ok;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const auth = req.headers.get("Authorization");
    if (!auth) return new Response(JSON.stringify({ erro: "Entra na tua conta para receberes o perfil." }), { status: 401, headers: cors });
    const cliente = createClient(SUPABASE_URL, ANON, { global: { headers: { Authorization: auth } } });
    const { data: u } = await cliente.auth.getUser();
    const email = u?.user?.email;
    if (!email) return new Response(JSON.stringify({ erro: "Sessão inválida. Entra de novo." }), { status: 401, headers: cors });
    const nome = String(u.user.user_metadata?.nome || "").split(" ")[0];

    const { titulo, seccoes, outro } = await req.json();
    if (!titulo || !Array.isArray(seccoes) || !seccoes.length) return new Response(JSON.stringify({ erro: "Relatório vazio." }), { status: 400, headers: cors });
    const t = String(titulo).slice(0, 80);
    const corpo = html(t, nome, seccoes);

    const ok = await enviar(email, `O teu ${t} · Escola 3S`, corpo);
    if (!ok) return new Response(JSON.stringify({ erro: "O envio falhou. Tenta de novo daqui a pouco." }), { status: 502, headers: cors });
    let para = email;
    if (outro && emailValido(String(outro)) && String(outro).toLowerCase() !== email.toLowerCase()) {
      await enviar(String(outro), `${t} de ${nome || email} · Escola 3S`, corpo);
      para += ` e ${outro}`;
    }
    await enviar(EMAIL_DONA, `[Cópia] ${t} — ${email}`, corpo);
    return new Response(JSON.stringify({ sucesso: true, para }), { headers: cors });
  } catch (e) {
    return new Response(JSON.stringify({ erro: e instanceof Error ? e.message : "Erro desconhecido." }), { status: 500, headers: cors });
  }
});
