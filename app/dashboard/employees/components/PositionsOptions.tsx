import getPositions from "@/actions/positions/getPositions";
import {redirect} from "next/navigation";

export default async function PositionsOptions({
  value
}: {
  value?: number
}) {
  const { positions } = await getPositions();

  if (positions.length === 0) {
    return redirect("/dashboard/employees")
  }

  return (
    <select
      className="border-1 rounded-sm border-black"
      name="positionId"
      defaultValue={value ?? positions[0].id}
      required
    >
      {positions.map((position) => (
        <option key={position.id} value={position.id}>
          {position.title}
        </option>
      ))}
    </select>
  )
};