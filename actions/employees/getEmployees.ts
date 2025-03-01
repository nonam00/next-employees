'use server'

export default async function getEmployees() {
  const response = await fetch("http://localhost:3000/api/employees", {
    method: "GET",
  });
  return await response.json();
}