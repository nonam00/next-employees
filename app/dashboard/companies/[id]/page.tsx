import Form from "next/form";
import Link from "next/link";
import editCompany from "@/actions/companies/editCompany";
import getCompanyById from "@/actions/companies/getCompanyById";

export default async function CompanyEdit({
  params
}: {
  params: Promise<{id: number}>
}) {
  const { id } = await params;
  const { company } = await getCompanyById(id);
  return (
    <Form
      className="flex flex-col m-10"
      action={editCompany}
    >
      <input type="hidden" name="id" value={company.id}/>
      <div className="flex flex-row gap-4 align-middle">
        <div className="flex flex-col flex-1">
          <label>Title ({company.title})</label>
          <input
            className="border-1 rounded-sm border-black"
            name="title"
            required
          />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="
            rounded-sm
            px-3
            py-1
            m-1
            text-black
            bg-transparent
            hover:bg-blue-500
            hover:text-white
            cursor-pointer
            transition
          "
          type="submit"
        >
          Edit
        </button>
        <Link
          href="/dashboard/companies"
          className="
            rounded-sm
            px-3
            py-1
            m-1
            text-black
            bg-transparent
            hover:bg-red-500
            hover:text-white
            cursor-pointer
            transition
          "
        >
          Cancel
        </Link>
      </div>
    </Form>
  )
}