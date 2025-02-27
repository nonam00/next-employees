'use server';

import {redirect} from "next/navigation";

export default async function createPosition(formData: FormData) {
  const position = {
    title: formData.get("title") as string,
    salary: parseFloat(formData.get("salary") as string),
  }

  const response = await fetch("http://localhost:3000/api/positions", {
    method: "POST",
    body: JSON.stringify(position),
  })

  if (response.ok) {
    redirect("/dashboard/positions");
  }
}