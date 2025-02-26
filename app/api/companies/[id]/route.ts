import prisma from "@/lib/prisma";

export async function GET(
  _: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const company = await prisma.company.findFirst({
    where: {
      id: parseInt(id),
    }
  });
  return Response.json({company})
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const body = await req.json();
  const updated = await prisma.company.update({
    where: {
      id: parseInt(id),
    },
    data: {
      title: body.title
    }
  })
  return Response.json({updated})
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{id: string}> }
) {
  const { id } = await params;
  const deleted = await prisma.company.delete({
    where: {
      id: parseInt(id)
    }
  });
  return Response.json({deleted})
}