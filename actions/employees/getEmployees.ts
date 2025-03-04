'use server'

import {EmployeeVm} from "@/types";

export default async function getEmployees(): Promise<{ employees: EmployeeVm[] }> {
  const response = await fetch(process.env.API_URL + "/employees", {
    method: "GET",
  });

  if (!response.ok) {
    return { employees: [] };
  }

  return await response.json();
}