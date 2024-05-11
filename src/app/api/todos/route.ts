import prisma from '@/lib/prisma'
import { strict } from 'assert';
import { boolean, object, string } from 'yup'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skip = Number(searchParams.get('skip') ?? '0')
  const take = Number(searchParams.get('take') ?? '10')

  if (isNaN(skip)) {
    return Response.json({ message: 'Skip tiene que ser un número' }, { status: 400 })
  }

  if (isNaN(take)) {
    return Response.json({ message: 'Take tiene que ser un número' }, { status: 400 })
  }

  const todos = await prisma.todo.findMany({
    skip,
    take
  })

  return Response.json(todos);
}

let todoSchema = object({
  description: string().required(),
  complete: boolean().optional().default(false)
}).noUnknown(true).strict()

export async function POST(request: Request) {

  try {
    const body = await todoSchema.validate(await request.json())
    const todo = await prisma.todo.create({
      data: body
    })

    return Response.json(todo)

  } catch (error) {
    return Response.json(error, { status: 400 })
  }

}

export async function DELETE(request: Request) {
  try {
    const deletedTodo = await prisma.todo.deleteMany({
      where: {
        complete: true
      },
    });

    return Response.json(deletedTodo);
  } catch (error) {
    return Response.json(error)
  }
}