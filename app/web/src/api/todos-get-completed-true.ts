import { api } from 'web-init'

export default api('/api/todos-get-completed-true', async ({ req, reply, db, ext }) => {
  try {
    const todosCompletedTrue = await db.todos.findMany({
      where: {
        completed: true
      },
      orderBy: {
        id: 'asc'
      }
    })
    reply.status(200).send(todosCompletedTrue);
  } catch (error) {
    reply.send(error);
  }
});
