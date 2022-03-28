import { api } from 'web-init'

export default api('/api/todos-update-completed', async ({ req, reply, db, ext }) => {
  try {
    const { id }: any = req.query;
    const { completed }: any = req.body;

    const todosUpdate = await db.todos.update({
      where: {
        id: Number(id)
      },
      data: {
        completed: Boolean(completed)
      }
    })
    reply.status(200).send(todosUpdate);
  } catch (error) {
    reply.send(error);
  }
});
