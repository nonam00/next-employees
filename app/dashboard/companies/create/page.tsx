import Form from "next/form";
import createCompany from "@/actions/companies/createCompany";

export default async function CompanyCreateForm() {
  return (
    <Form
      className="flex flex-col m-10 w-2"
      action={createCompany}
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
};