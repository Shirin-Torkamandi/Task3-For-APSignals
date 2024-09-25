"use server";

import { revalidateTag } from "next/cache";

export async function addQuestion(questionTitle) {
  await fetch("http://localhost:3000/api/v1/questions", {
    method: "POST",
    body: JSON.stringify({ title: questionTitle }),
  });
  revalidateTag("question");
}

export async function editQuestion(id, questionTitle) {
  await fetch(`http://localhost:3000/api/v1/questions/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ title: questionTitle }),
  });
  revalidateTag("question");
}
export async function deleteQuestion(id) {
  await fetch(`http://localhost:3000/api/v1/questions/${id}`, {
    method: "DELETE",
  });
  revalidateTag("question");
}
