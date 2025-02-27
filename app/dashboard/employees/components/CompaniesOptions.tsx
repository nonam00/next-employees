import getCompanies from "@/actions/companies/getCompanies";

export default async function CompaniesOptions({
  value
}: {
  value?: number
}) {
  const { companies } = await getCompanies();
  return (
    <select
      className="border-1 rounded-sm border-black"
      name="companyId"
      defaultValue={value ?? companies[0]?.id}
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