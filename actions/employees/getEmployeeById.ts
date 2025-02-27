'use server'

import {Employee} from "@/types";

export default async function getEmployeeById(id: number): Promise<{ employee: Employee | null}> {
  const response = await fetch("http://localhost:3000/api/employees/" + id);
  if (!response.ok) {
    return { employee: null }
  }
  return await response.json();
}