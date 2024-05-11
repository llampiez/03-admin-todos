export const updateTodo = async (id: string, complete: boolean) => {
  const body = { complete };

  await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export const newTodo = async (description: string) => {
  const body = { description };

  await fetch(`/api/todos/`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export const deleteCompletedTodos = async () => {
  await fetch ('/api/todos/', {
    method: 'DELETE',

  }).then((response)=> response.json())
}