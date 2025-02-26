'use server';

import {revalidatePath} from "next/cache";

export default async function deleteCompany(formData: FormData) {
  const id = formData.get("id") as string;
  const response = await fetch(`http://localhost:3000/api/companies/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    revalidatePath("/dashboard/companies");
  }
}