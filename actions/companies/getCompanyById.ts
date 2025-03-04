'use server'

export default async function getCompanyById(id: number) {
  const response = await fetch(process.env.API_URL + `/companies/${id}`, {
    method: "GET",
  });
  return await response.json();
}