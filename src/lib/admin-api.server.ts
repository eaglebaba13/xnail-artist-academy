import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export async function requireAdmin(request: Request) {
  const token=request.headers.get("authorization")?.replace(/^Bearer\s+/i,"");
  if(!token) return null;
  const url=process.env['SUPABASE_URL']; const key=process.env['SUPABASE_PUBLISHABLE_KEY'];
  if(!url||!key) throw new Error("Backend configuration is unavailable");
  const client=createClient<Database>(url,key,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}});
  const {data}=await client.auth.getUser(token); if(!data.user) return null;
  const {data:isAdmin}=await client.rpc("has_role",{_user_id:data.user.id,_role:"admin"});
  return isAdmin?{client,user:data.user}:null;
}
export const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{"Cache-Control":"no-store"}});
