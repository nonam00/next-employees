'use server'

import {Company} from "@/types";

export default async function getCompanies(): Promise<{ companies: Company[] }> {
  const response = await fetch(process.env.API_URL + "/companies", {
    method: "GET",
  });

  if (response.ok) {
    return response.json();
  }

  return { companies: [] };
}