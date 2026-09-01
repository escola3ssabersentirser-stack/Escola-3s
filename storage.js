// Guarda os dados do utilizador no browser (localStorage).
// Usa a mesma "forma" da API de armazenamento do protótipo do Claude,
// para não ser preciso mudar nada no App.jsx quando ligarmos o Supabase.
//
// Mais tarde, para ligar a sério (multi-dispositivo, várias contas),
// troca as duas funções abaixo por chamadas ao Supabase — o resto da
// app não precisa de saber a diferença.

const PREFIXO = "escola3s:";

export const storage = {
  async get(key) {
    try {
      const raw = window.localStorage.getItem(PREFIXO + key);
      if (raw === null) return null;
      return { key, value: raw, shared: false };
    } catch (e) {
      return null;
    }
  },

  async set(key, value) {
    try {
      window.localStorage.setItem(PREFIXO + key, value);
      return { key, value, shared: false };
    } catch (e) {
      return null;
    }
  },

  async delete(key) {
    try {
      window.localStorage.removeItem(PREFIXO + key);
      return { key, deleted: true, shared: false };
    } catch (e) {
      return null;
    }
  },
};
