import { api } from 'web-init'

export default api('/api/todos-delete', async ({ req, reply, db, ext }) => {
  try {
    const { id }: any = req.query;

    await db.todos.delete({
        where: {
            id: Number(id)
        }
    });
    reply.status(200).send({message: "Activity deleted!"});
  } catch (error) {
    reply.send(error);
  }
});
