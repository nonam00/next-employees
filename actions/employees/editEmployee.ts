'use server'

import {redirect} from "next/navigation";

export default async function editEmployee(formData: FormData) {
  const id = formData.get("id") as string;

  const employee = {
    name: formData.get("name") as string,
    birthday: new Date(formData.get("birthday") as string),
    position_id: parseInt(formData.get("positionId") as string),
    company_id: parseInt(formData.get("companyId") as string),
  }
  const response = await fetch(`${process.env.API_URL}/employees/${id}`, {
    method: "PUT",
    body: JSON.stringify(employee),
  })

  if (response.ok) {
    redirect("/dashboard/employees");
  }
}