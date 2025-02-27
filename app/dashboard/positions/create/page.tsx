import Form from "next/form";
import createPosition from "@/actions/positions/createPosition";

export default async function PositionCreateForm() {
  return (
    <Form
      className="flex flex-col m-10 w-2"
      action={createPosition}
    >
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label>Title</label>
          <input
            className="border-1 rounded-sm border-black"
            name="title"
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Salary</label>
          <input
            className="border-1 rounded-sm border-black"
            name="salary"
            type="number"
            min={20000}
            required
          />
        </div>
      </div>
      <div>
        <button
          className="border-1 border-black rounded-sm px-3 py-1 m-1 hover:bg-gray-100"
          type="submit"
        >
          Create
        </button>
      </div>
    </Form>
  )
};