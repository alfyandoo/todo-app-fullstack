import { api } from 'web-init'

export default api('/api/todos-post', async ({ req, reply, db, ext }) => {
  try {
    const { activity, completed }: any = req.body;

    await db.todos.create({
      data: { 
        activity: String(activity),
        completed: Boolean(completed)
      }
    });
    reply.status(201).send({ message: "Activity created!"});
  } catch (error) {
    reply.send(error);
  }
});
