'use server'

import {redirect} from "next/navigation";

export default async function createEmployee(formData: FormData) {
  const employee = {
    name: formData.get('name') as string,
    birthday: new Date(formData.get('birthday') as string),
    position_id: parseInt(formData.get('positionId') as string),
    company_id: parseInt(formData.get('companyId') as string),
  }

  const response = await fetch(process.env.API_URL + "/employees", {
    method: 'POST',
    body: JSON.stringify(employee),
  })

  if (response.ok) {
    redirect("/dashboard/employees")
  }
}