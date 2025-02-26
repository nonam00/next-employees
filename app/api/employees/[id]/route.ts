import prisma from "@/lib/prisma";

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