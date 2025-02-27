import {Position} from "@/types";
import Link from "next/link";
import Form from "next/form";
import deletePosition from "@/actions/positions/deletePosition";

export default function PositionDashboardItem({
  position
}: {
  position: Position
}) {
  return (
    <div className="flex flex-row">
      <p className="flex-1">{position.title}</p>
      <p className="flex-1">{position.salary}</p>
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
        href={`/dashboard/positions/${position.id}`}
      >
        Edit
      </Link>
      <Form action={deletePosition}>
        <input type="hidden" name="id" value={position.id}/>
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