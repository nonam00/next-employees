'use server';

import {revalidatePath} from "next/cache";

export default async function deleteEmployee(formData: FormData) {
  const id = formData.get("id") as string;
  const response = await fetch(`http://localhost:3000/employees/${id}`, {
    method: "DELETE",
  })
  if (response.ok) {
    revalidatePath("http://localhost:3000/dashboard/employees");
  }
}