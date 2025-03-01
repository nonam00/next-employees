import Form from "next/form";
import {redirect} from "next/navigation";
import Link from "next/link";
import CompaniesOptions from "../components/CompaniesOptions";
import PositionsOptions from "../components/PositionsOptions";
import getEmployeeById from "@/actions/employees/getEmployeeById";
import editEmployee from "@/actions/employees/editEmployee";

export default async function EditEmployeePage({
  params
}: {
  params: Promise<{ id: number }>
}) {
  const { id } = await params;
  const { employee } = await getEmployeeById(id);

  if (!employee) {
    return redirect(`/dashboard/employees`);
  }

  const birthday = new Date(employee.birthday);

  const date = {
    year: birthday.getFullYear().toString(),
    month: (birthday.getMonth() + 1).toString().padStart(2, "0"),
    day: birthday.getDate().toString().padStart(2, "0"),
  }

  return (
    <Form action={editEmployee}>
      <input type="hidden" name="id" value={id} />
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label>Name</label>
          <input
            className="border-1 rounded-sm border-black"
            name="name"
            defaultValue={employee.name}
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Birthdate</label>
          <input
            className="border-1 rounded-sm border-black"
            type="date"
            name="birthday"
            defaultValue={`${date.year}-${date.month}-${date.day}`}
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Company</label>
          <CompaniesOptions value={employee.company_id}/>
        </div>
        <div className="flex flex-col flex-1">
          <label>Position</label>
          <PositionsOptions value={employee.position_id}/>
        </div>
      </div>
      <div>
        <button
          className="border-1 border-black rounded-sm px-3 py-1 m-1 hover:bg-gray-100"
          type="submit"
        >
          Save
        </button>
      </div>
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
    </Form>
  )
}