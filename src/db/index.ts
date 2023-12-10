import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase.types";

const supabaseUrl = 'https://mmpfhgsiriqzshkikeng.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tcGZoZ3NpcmlxenNoa2lrZW5nIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjA2MTYxMiwiZXhwIjoyMDE3NjM3NjEyfQ.Agpkm8keCIkGLnkzVsBmUd3voRbPSbOoV5pY4pomKdM';
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;