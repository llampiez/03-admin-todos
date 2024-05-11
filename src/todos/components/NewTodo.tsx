'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoTrashOutline } from 'react-icons/io5';
import { deleteCompletedTodos, newTodo } from '@/todos';

export const NewTodo = () => {
  const [description, setDescription] = useState('');
  const route = useRouter();

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    if (!description.trim()) return;

    newTodo(description);
    setDescription('');

    route.refresh();
  };

  const deletedCompleted = () => {
    deleteCompletedTodos()

    route.refresh()
  }


  return (
    <form onSubmit={submit} className='flex w-full'>
      <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        type='text'
        className='w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all'
        placeholder='¿Qué necesita ser hecho?'
      />

      <button
        type='submit'
        className='flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all'
      >
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={deletedCompleted}
        type='button'
        className='flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all'
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
