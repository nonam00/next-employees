import prisma from "@/lib/prisma";

export async function GET(
  _: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const employee  = await prisma.employee.findFirst({
    where: {
      id: parseInt(id),
    }
  })
  return Response.json({employee});
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const body = await req.json();
  await prisma.employee.update({
    where: {
      id: parseInt(id)
    },
    data: {
      ...body
    }
  })
  return Response.json({})
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const deleted = await prisma.employee.delete({
    where: {
      id: parseInt(id)
    }
  });
  return Response.json({deleted})
}