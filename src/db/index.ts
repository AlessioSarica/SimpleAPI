import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase.types";

const supabaseUrl = 'your supabase url';
const supabaseKey = 'your supabase key';
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;