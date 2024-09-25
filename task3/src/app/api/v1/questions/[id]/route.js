import { data } from "../route";

export async function GET(req, { params }) {
  const res = data.find((item) => item.id === params.id);
  if (!res) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify(res), { status: 200 });
}
