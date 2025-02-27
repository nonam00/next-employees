'use server'

import {revalidatePath} from "next/cache";

export default async function deletePosition(formData: FormData) {
  const id = formData.get("id");
  const response = await fetch(`http://localhost:3000/api/positions/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    revalidatePath("/dashboard/positions");
  }
}