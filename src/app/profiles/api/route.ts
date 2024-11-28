import { headers , cookies} from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const headersList = await headers();
  const cookiesStore = await cookies();
  cookiesStore.set("name", "John");     
  const referer = headersList.get("referer");
  return new Response(JSON.stringify({ referer, cookiesStore }), {
    headers: { "Content-Type": "application/json", "Set-Cookie": "name=John" },
  });
}
