import { api } from 'web-init'

export default api('/api/todos-get-completed-false', async ({ req, reply, db, ext }) => {
	try {
    const todosCompletedFalse = await db.todos.findMany({
      where: {
        completed: false
      },
      orderBy: {
        id: 'asc'
      }
    })
    reply.status(200).send(todosCompletedFalse);
  } catch (error) {
    reply.send(error);
  }
});
