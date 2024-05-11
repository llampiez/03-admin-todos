import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { boolean, object, string } from 'yup';

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id);
  if (!todo) {
    return Response.json({ message: `Todo con el ID: ${params.id} no existe.` }, { status: 404 });
  }

  return Response.json(todo);
}

let putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
})
  .noUnknown(true)
  .strict();

export async function PUT(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id);

  if (!todo) {
    return Response.json({ message: `Todo con el ID: ${params.id} no existe.` }, { status: 404 });
  }

  try {
    const body = await putSchema.validate(await request.json());
    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: body,
    });

    return Response.json(updatedTodo);
  } catch (error) {
    return Response.json(error);
  }
}
