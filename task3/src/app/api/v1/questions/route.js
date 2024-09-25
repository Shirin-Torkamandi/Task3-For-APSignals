import { v4 as uuid } from "uuid";

export let data = [
  {
    id: "1",
    title: "What's your name?",
    typeOfQuestion: "short-answer",
  },
  {
    id: "2",
    title: "How old are you?",
    typeOfQuestion: "multiple-choice",
    options: ["18-25", "26-33", "34-41", "42-49"],
  },
  {
    id: "3",
    title: "What kind of system are you using?",
    typeOfQuestion: "Multiple-Choice",
    options: ["Windows", "Mac", "Linux", "Other"],
  },
  {
    id: "4",
    title: "Do you have good connections?",
    typeOfQuestion: "Multiple-Choice",
    options: ["Yes", "No"],
  },
];

export async function GET() {
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const newPost = {
      ...body,
      id: uuid(),
    };
    data.push(newPost);
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function PATCH(req, { params }) {
  const body = await req.json();
  const { title } = body;
  const index = data.findIndex((post) => post.id === params.id);

  if (index === -1) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }
  data[index].title = title;
  return new Response(JSON.stringify(data[index]), { status: 200 });
}

export async function DELETE(req, { params }) {
  const index = data.findIndex((post) => post.id === params.id);

  if (index === -1) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }
  const deleted = data.splice(index, 1)[0];
  return new Response(JSON.stringify(deleted), { status: 200 });
}
