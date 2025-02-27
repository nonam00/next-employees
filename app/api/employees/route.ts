import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  await prisma.employee.create({
    data: {
      ...body
    }
  })
  return Response.json({});
}

export async function GET() {
  const employees = await prisma.employee.findMany({
    include: {
      company: {
        select: { title: true },
      },
      position: {
        select: { title: true, salary: true },
      }
    }
  });

  return Response.json({employees: employees});
}