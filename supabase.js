// Liga aqui o Supabase quando tiveres o projeto criado.
// 1. Cria a conta em https://supabase.com
// 2. Copia o "Project URL" e a "anon public key" das definições do projeto
// 3. Cola-os no ficheiro .env (vê o .env.example)
//
// Enquanto não fizeres isto, a app funciona à mesma — usa o armazenamento
// local do browser (ver src/lib/storage.js) em vez de uma base de dados real.

import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;
