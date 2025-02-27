import getPositions from "@/actions/positions/getPositions";

export default async function PositionsOptions({
  value
}: {
  value?: number
}) {
  const { positions } = await getPositions();
  return (
    <select
      className="border-1 rounded-sm border-black"
      name="positionId"
      defaultValue={value ?? positions[0]?.id}
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