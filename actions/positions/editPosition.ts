'use server'

import {redirect} from "next/navigation";

export default async function editPosition(formData: FormData): Promise<void> {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const salary = formData.get("salary") as string;

  const response = await fetch(`http://localhost:3000/api/positions/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      salary: parseFloat(salary),
    })
  })

  if (response.ok) {
    redirect("http://localhost:3000/dashboard/positions");
  }
}