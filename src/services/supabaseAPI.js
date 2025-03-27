// src/services/supabaseAPI.js
import { createClient } from '@supabase/supabase-js';

// Remplace par l'URL de ton projet Supabase et ta clé publique
const supabaseUrl = 'https://ohngwxhtlxstnbdzicje.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9obmd3eGh0bHhzdG5iZHppY2plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjEzMDUsImV4cCI6MjA1ODAzNzMwNX0.bBWizaCX-tC7KmuMSABiaL9Fbihpw7pQlOLDovYp7Mc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;