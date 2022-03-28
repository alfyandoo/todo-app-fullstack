import { api } from 'web-init'

export default api('/api/todos-get-id/:id', async ({ req, reply, db, ext }) => {
  try {
    const { id }: any = req.params;

    const todosGetId = await db.todos.findUnique({
      where: {
          id: Number(id)
      }
    });
    reply.status(200).send(todosGetId);
  } catch (error) {
    reply.send(error);
  }
});
