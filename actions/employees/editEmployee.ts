import {id} from "postcss-selector-parser";
import {redirect} from "next/navigation";

export default async function editEmployee(formData: FormData) {
  const employee = {
    name: formData.get("name"),
    date: new Date(formData.get("birthday") as string),
    position_id: parseInt(formData.get("positionId") as string),
    company_id: parseInt(formData.get("companyId") as string),
  }
  const response = await fetch(`http://localhost:3000/api/employees/${id}`, {
    method: "PUT",
    body: JSON.stringify(employee),
  })

  if (response.ok) {
    redirect("/dashboard/employees");
  }
}