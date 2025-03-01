import Form from "next/form";
import Link from "next/link";
import getPositionById from "@/actions/positions/getPositionById";
import {redirect} from "next/navigation";
import editPosition from "@/actions/positions/editPosition";

export default async function PositionEdit({
  params
}: {
  params: Promise<{id: number}>
}) {
  const { id } = await params;
  const { position } = await getPositionById(id);

  if (!position) {
    return redirect("/dashboard/positions");
  }

  return (
    <Form
      className="flex flex-col m-10"
      action={editPosition}
    >
      <input type="hidden" name="id" value={position.id}/>
      <div className="flex flex-row gap-4 align-middle">
        <div className="flex flex-col flex-1">
          <label>Title</label>
          <input
            className="border-1 rounded-sm border-black"
            name="title"
            defaultValue={position.title}
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Salary</label>
          <input
            className="border-1 rounded-sm border-black"
            name="salary"
            type="number"
            defaultValue={position.salary}
            min="20000"
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
          href="/dashboard/positions"
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