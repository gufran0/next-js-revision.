import { NextRequest } from "next/server";
import { comments } from "./data";
import { log } from "console";

export async function GET(request: NextRequest) {
//   console.log("GET request received",re);
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (query) {
    return Response.json(comments.filter((comment) => comment.text.includes(query)));
  }
  return Response.json(comments);
}

export async function POST(request: Request) {
  
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
