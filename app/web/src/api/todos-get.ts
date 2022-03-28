import { api } from 'web-init'

export default api('/api/todos-get', async ({ req, reply, db, ext }) => {
  try {
    const todosGet = await db.todos.findMany({
      orderBy: {
        id: 'asc'
      }
    });
    reply.status(200).send(todosGet);
  } catch (error) {
    reply.send(error);
  }
});
