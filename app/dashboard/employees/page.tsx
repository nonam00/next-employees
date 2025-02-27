import DashboardHeader from "@/components/DashboardHeader";
import getEmployees from "@/actions/employees/getEmployees";
import {EmployeeVm} from "@/types";
import EmployeeDashboardItem from "./components/EmployeeDashboardItem";
import Link from "next/link";

export const revalidate = 0;

export default async function EmployeesPage() {
  const { employees } = await getEmployees();
  return (
    <>
      <DashboardHeader/>
      <div className="flex flex-col m-15">
        <h1 className="text-3xl m-5">Employees dashboard editor:</h1>
        <div>
          <Link href="/dashboard/employees/create" className="text-cyan-500">
            Create New Employee
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center border-b-1">
            <b className="flex-1">Name</b>
            <b className="flex-1">Position</b>
            <b className="flex-1">Title</b>
            <b className="flex-1">Salary</b>
            <b className="flex-1">Birthday</b>
            <b className="flex-1">Edit</b>
            <b className="flex-1">Delete</b>
          </div>
          <ul className="flex flex-col list-none">
            {employees.map((employee: EmployeeVm) => (
              <EmployeeDashboardItem employee={employee} key={employee.id}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}