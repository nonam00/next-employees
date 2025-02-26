import prisma from "@/lib/prisma";

export async function POST(
  req: Request,
) {
  const body = await req.json();
  const result = await prisma.company.create({
    data: {
      title: body.title,
    }
  })
  return Response.json({ result })
}

export async function GET() {
  const companies = await prisma.company.findMany();
  return Response.json({ companies });
}