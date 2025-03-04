'use server'

import {Position} from "@/types";

export default async function getPositions(): Promise<{ positions: Position[]} > {
  const response = await fetch(process.env.API_URL + '/positions');
  if (!response.ok) {
    return { positions: [] }
  }
  return await response.json();
}