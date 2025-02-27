import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  await prisma.position.create({
    data: {
      ...body
    }
  })
  return Response.json({})
}

export async function GET() {
  const positions = await prisma.position.findMany({});
  return Response.json({positions});
}