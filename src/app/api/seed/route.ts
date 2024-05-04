import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  await prisma.todo.deleteMany()

  await prisma.todo.createMany({
    data: [
      {
        description: 'Piedra del alma',
      },
      {
        description: 'Piedra del poder',
      },
      {
        description: 'Piedra del tiempo',
      },
      {
        description: 'Piedra del espacio',
      },
      { description: 'Piedra de la realidad', complete: true },
    ]
  })


  return Response.json({
    message: 'Seed Executed'
  })
}