'use server'

export default async function getEmployees() {
  const response = await fetch(process.env.API_URL + "/employees", {
    method: "GET",
  });
  return await response.json();
}