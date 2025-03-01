import DashboardHeader from "@/components/DashboardHeader";
import Link from "next/link";
import {Company} from "@/types";
import getCompanies from "@/actions/companies/getCompanies";
import CompanyDashboardItem from "./components/CompanyDashboardItem";

// force dynamic rendering
export const revalidate = 0;

export default async function CompaniesPage() {
  const { companies } = await getCompanies();
  return (
    <>
      <DashboardHeader/>
      <div className="flex flex-col m-15">
        <h1 className="text-3xl m-5">Companies dashboard editor:</h1>
        <div>
          <Link href="/dashboard/companies/create" className="text-cyan-500">
            Create New Company
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-100">
          <div className="flex flex-row items-center w-100 border-b-1">
            <b className="flex-1">Title</b>
            <b className="flex-1">Edit</b>
            <b className="flex-1">Delete</b>
          </div>
          <ul className="flex flex-col list-none w-full">
            {companies.map((company: Company) => (
              <CompanyDashboardItem company={company} key={company.id}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}