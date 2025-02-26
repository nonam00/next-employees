'use server';

import {redirect} from "next/navigation";

export default async function createCompany(formData: FormData) {
  const title = formData.get("title") as string;

  const response = await fetch("http://localhost:3000/api/companies", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
    }),
  });

  if (response.ok) {
    redirect("http://localhost:3000/dashboard/companies");
  }
}