'use server'

import {Employee} from "@/types";

export default async function getEmployeeById(id: number): Promise<{ employee: Employee | null}> {
  const response = await fetch(process.env.API_URL + "/employees/" + id);
  if (!response.ok) {
    return { employee: null }
  }
  return await response.json();
}