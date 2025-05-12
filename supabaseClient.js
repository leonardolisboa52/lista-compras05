// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://wqrvadycionozczmqgoj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93c3hobG9xbHlzeXp4YWZiYWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU3MDksImV4cCI6MjA2MjExMTcwOX0.Zqi4P4NIIJV_ZipQOUb6ly1RmT1mvclXKgyLNqviIn0'
)