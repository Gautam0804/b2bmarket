import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://esusuybqdjrugkgwblzz.supabase.co";
const supabaseAnonKey = "sb_publishable_v5aG4D2xmb7hJpPlFnz5Ig_6Q2ixYVf";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);