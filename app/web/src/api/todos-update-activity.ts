import { api } from 'web-init'

export default api('/api/todos-update-activity', async ({ req, reply, db, ext }) => {
  try {
    const { id }: any = req.query;
    const { activity }: any = req.body;

    const todosUpdateAct = await db.todos.update({
      where: {
        id: Number(id)
      },
      data: {
        activity: String(activity),
      }
    })
    reply.status(200).send(todosUpdateAct);
  } catch (error) {
    reply.send(error);
  }
});
