import { createClient } from "@supabase/supabase-js";

// Publishable anon key — safe to ship to the browser.
const SUPABASE_URL = "https://zqrwvzcxhngrhgzycuaq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxcnd2emN4aG5ncmhnenljdWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMTI3ODMsImV4cCI6MjA5ODY4ODc4M30.OR0q3YPYakfMquYjtEsNq3bM4gvVYokVy47KSpy23DQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export type Device = {
  id: string;
  device_id: string;
  device_key: string;
  nome: string | null;
  empresa: string | null;
  email_proprietario: string;
  user_id: string;
  created_at: string;
};

export type Telemetry = {
  id: string;
  device_id: string;
  user_id: string;
  temperatura: number | null;
  umidade: number | null;
  status: string | null;
  energia: boolean | null;
  gerador: boolean | null;
  led_verde: boolean | null;
  led_amarelo: boolean | null;
  led_vermelho: boolean | null;
  botao_verde: boolean | null;
  botao_amarelo: boolean | null;
  botao_vermelho: boolean | null;
  uptime: number | null;
  ip: string | null;
  mac: string | null;
  wifi: number | null;
  timestamp: string;
};

export type LogEntry = {
  id: string;
  device_id: string;
  user_id: string;
  tipo: string;
  mensagem: string;
  created_at: string;
};

export type Alert = {
  id: string;
  device_id: string;
  user_id: string;
  severidade: "info" | "warning" | "critical";
  titulo: string;
  descricao: string | null;
  resolvido: boolean;
  created_at: string;
};