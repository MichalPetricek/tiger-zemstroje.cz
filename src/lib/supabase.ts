import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
	process.env.NEXT_PUBLIC_SUPABASE_URL ||
	"https://dfwdaapyyonqxmmfpled.supabase.co";
const supabasePublishableKey =
	process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
	"sb_publishable_t9P7ts6DheBN59g84-TaVg_YapfJRaH";

if (!supabasePublishableKey) {
	throw new Error(
		"Missing Supabase key. Set NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (preferred) or NEXT_PUBLIC_SUPABASE_ANON_KEY."
	);
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
