'use server';

import {Position} from "@/types";

export default async function getPositions(): Promise<{ positions: Position[]} > {
  const response = await fetch('http://localhost:3000/api/positions');
  if (!response.ok) {
    return { positions: [] }
  }
  return await response.json();
}