import DashboardHeader from "@/components/DashboardHeader";
import Link from "next/link";
import getPositions from "@/actions/positions/getPositions";
import PositionDashboardItem from "@/app/dashboard/positions/components/PositionDashboardItem";

// force dynamic rendering
export const revalidate = 0;

export default async function PositionsPage() {
  const { positions } = await getPositions();
  return (
    <>
      <DashboardHeader/>
      <div className="flex flex-col m-15">
        <h1 className="text-3xl m-5">Positions dashboard editor:</h1>
        <div>
          <Link href="/dashboard/positions/create" className="text-cyan-500">
            Create New Position
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-100">
          <div className="flex flex-row items-center w-100 border-b-1">
            <b className="flex-1">Title</b>
            <b className="flex-1">Salary</b>
            <b className="flex-1">Edit</b>
            <b className="flex-1">Delete</b>
          </div>
          <ul className="flex flex-col list-none w-full">
            {positions.map((position) => (
              <PositionDashboardItem position={position} key={position.id}/>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}