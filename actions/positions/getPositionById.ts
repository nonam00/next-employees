'use server'

import {Position} from "@/types";

export default async function getPositionById(id: number): Promise<{position: Position | null}> {
  const response = await fetch(`http://localhost:3000/api/positions/${id}`, {
    method: 'GET'
  });
  if (!response.ok) {
    return { position: null };
  }
  return response.json();
}