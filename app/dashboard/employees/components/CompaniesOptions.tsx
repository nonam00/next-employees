import getCompanies from "@/actions/companies/getCompanies";
import {redirect} from "next/navigation";

export default async function CompaniesOptions({
  value
}: {
  value?: number
}) {
  const { companies } = await getCompanies();

  if (companies.length === 0) {
    return redirect("/dashboard/employees")
  }

  return (
    <select
      className="border-1 rounded-sm border-black"
      name="companyId"
      defaultValue={value ?? companies[0].id}
      required
    >
      {companies.map((company) => (
        <option key={company.id} value={company.id}>
          {company.title}
        </option>
      ))}
    </select>
  )
};