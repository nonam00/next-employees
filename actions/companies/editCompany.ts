'use server'

import {redirect} from "next/navigation";

export default async function editCompany(formData: FormData) {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;

  const response = await fetch(`${process.env.API_URL}/companies/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
    })
  })

  if (response.ok) {
    redirect("/dashboard/companies");
  }
}