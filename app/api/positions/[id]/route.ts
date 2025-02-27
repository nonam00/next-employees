import prisma from "@/lib/prisma";

export async function GET(
  _: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const position  = await prisma.position.findFirst({
    where: {
      id: parseInt(id),
    }
  })
  return Response.json({position});
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const body = await req.json();
  await prisma.position.update({
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
  const deleted = await prisma.position.delete({
    where: {
      id: parseInt(id)
    }
  });
  return Response.json({deleted})
}