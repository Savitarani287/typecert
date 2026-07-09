

const SUPABASE_URL  = 'https://oakuzklpkqoyxvsdaaji.supabase.co';      // e.g. https://xyzabc.supabase.co
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ha3V6a2xwa3FveXh2c2RhYWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMDYwNjcsImV4cCI6MjA5Nzc4MjA2N30.oI_77fmm0NO7x74qBmbrPXKNLSf0nl7j0c5QfG4HtZ0';  // starts with eyJ...

// ─── DO NOT EDIT BELOW THIS LINE ─────────────────────────────────────────────

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

// ─── Auth helpers used across pages ─────────────────────────────────────────

/** Returns the logged-in user object, or null if logged out */
export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

/** Redirect to auth page if not logged in. Call at top of protected pages. */
export async function requireAuth() {
  const user = await getUser();
  if (!user) {
    window.location.href = 'auth.html?next=' + encodeURIComponent(window.location.pathname);
  }
  return user;
}

/** Sign out and redirect home */
export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
}