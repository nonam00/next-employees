export type Company = { id: number; title: string; }

export type EmployeeVm = {
  id: number,
  name: string,
  birthday: Date,
  company: { title: string },
  position: {
    title: string,
    salary: number
  }
}