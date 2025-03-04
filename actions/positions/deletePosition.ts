'use server'

import {revalidatePath} from "next/cache";

export default async function deletePosition(formData: FormData) {
  const id = formData.get("id");
  const response = await fetch(`${process.env.API_URL}/positions/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    revalidatePath("/dashboard/positions");
  }
}