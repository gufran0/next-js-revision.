
import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if (comment) {
    return Response.json(comment);
  } else {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = await request.json();
  const updatedComment = { ...comment, id: parseInt(params.id) };
  return Response.json(updatedComment);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments.splice(commentIndex, 1);
  return Response.json(deletedComment);
}
