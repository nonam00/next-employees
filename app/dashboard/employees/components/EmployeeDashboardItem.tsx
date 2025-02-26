import {EmployeeVm} from "@/types";
import Link from "next/link";
import Form from "next/form";
import deleteEmployee from "@/actions/employees/deleteEmployee";

export default async function EmployeeDashboardItem({
  employee
}: {
  employee: EmployeeVm
}) {
  const birthday = new Date(employee.birthday);
  return (
    <div className="flex flex-row">
      <p className="flex-1">{employee.name}</p>
      <p className="flex-1">{employee.position.title}</p>
      <p className="flex-1">{employee.company.title}</p>
      <p className="flex-1">{employee.position.salary}</p>
      <p className="flex-1">
        {birthday.getDay()}/{birthday.getMonth() + 1}/{birthday.getFullYear()}
      </p>
      <Link
        href={`/dashboard/employees/${employee.id}`}
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
      >
        Edit
      </Link>
      <Form action={deleteEmployee}>
        <input type="hidden" name="id" value={employee.id}/>
        <button className="
          flex-1
          rounded-sm
          bg-transparent
          text-black
          hover:bg-red-500
          hover:text-white
          cursor-pointer
          transition
        ">
          Delete
        </button>
      </Form>
    </div>
  )
}