import Form from "next/form";
import CompaniesOptions from "../components/CompaniesOptions";
import PositionsOptions from "../components/PositionsOptions";
import createEmployee from "@/actions/employees/createEmployee";

// force dynamic rendering
export const revalidate = 0;

export default function CreateEmployeePage() {
  return (
    <Form action={createEmployee}>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label>Name</label>
          <input
            className="border-1 rounded-sm border-black"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Birthdate</label>
          <input
            className="border-1 rounded-sm border-black"
            type="date"
            name="birthday"
            required
          />
        </div>
        <div className="flex flex-col flex-1">
          <label>Company</label>
          <CompaniesOptions/>
        </div>
        <div className="flex flex-col flex-1">
          <label>Position</label>
          <PositionsOptions />
        </div>
      </div>
      <div>
        <button
          className="border-1 border-black rounded-sm px-3 py-1 m-1 hover:bg-gray-100"
          type="submit"
        >
          Add
        </button>
      </div>
    </Form>
  )
}