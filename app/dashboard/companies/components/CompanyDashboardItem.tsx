import {Company} from "@/types";
import Link from "next/link";
import Form from "next/form";
import deleteCompany from "@/actions/companies/deleteCompany";

export default async function CompanyDashboardItem({
  company
}: {
  company: Company
}) {
  return (
    <div className="flex flex-row">
      <p className="flex-1">{company.title}</p>
      <Link
        className="
          flex-1
          rounded-sm
          bg-transparent
          text-black
          hover:bg-blue-500
          hover:text-white
          cursor-pointer
          transition
        "
        href={`/dashboard/companies/${company.id}`}
      >
        Edit
      </Link>
      <Form action={deleteCompany}>
        <input type="hidden" name="id" value={company.id} />
        <button
          className="
            flex-1
            rounded-sm
            bg-transparent
            text-black
            hover:bg-red-500
            hover:text-white
            cursor-pointer
            transition
          "
          type="submit"
        >
          Delete
        </button>
      </Form>
    </div>
  )
}