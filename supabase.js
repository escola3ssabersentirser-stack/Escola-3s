// Ligação real ao projeto Supabase da Escola 3S.
// A "anon key" é pública por natureza (feita para estar no código do
// browser) — a segurança vem das regras (RLS) definidas na base de dados,
// não do segredo desta chave.

import { createClient } from "@supabase/supabase-js";

const url = "https://hspekqrhttxeckghtryi.supabase.co";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcGVrcXJodHR4ZWNrZ2h0cnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyNTc2OTQsImV4cCI6MjEwMzgzMzY5NH0.2MKWYnUYWbxJqogSzpsfbkVHD_J0QqqMse-duNtj_GI";

export const supabase = createClient(url, anonKey);
