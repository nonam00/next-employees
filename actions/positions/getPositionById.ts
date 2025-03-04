'use server'

import {Position} from "@/types";

export default async function getPositionById(id: number): Promise<{position: Position | null}> {
  const response = await fetch(`${process.env.API_URL}/positions/${id}`, {
    method: 'GET'
  });
  if (!response.ok) {
    return { position: null };
  }
  return response.json();
}