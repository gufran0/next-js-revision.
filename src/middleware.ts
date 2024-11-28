import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url));
// }

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const theme = request.cookies.get("theme");
  if (!theme) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("x-theme", "theme");    
  return response;
  // if(request.nextUrl.pathname === "/about"){
  //     return NextResponse.redirect(new URL("/", request.url));
  // }
}

// export const config = {
//     matcher: "/about",
// };
