'use server';

export default async function getCompanyById(id: number) {
  const response = await fetch(`http://localhost:3000/api/companies/${id}`, {
    method: "GET",
  });
  return await response.json();
}