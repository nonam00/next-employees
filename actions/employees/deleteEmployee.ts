'use server'

import {revalidatePath} from "next/cache";

export default async function deleteEmployee(formData: FormData) {
  const id = formData.get("id") as string;
  const response = await fetch(`${process.env.API_URL}/employees/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    revalidatePath("/dashboard/employees");
  }
}