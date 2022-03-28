import { login } from 'platform'

export default login(async ({ db, req, reply, ext }) => {
  // const user = await db.p_user.findFirst({
  //   where: {
  //     username: req.body.username,
  //   },
  //   include: {
  //     p_role: true,
  //   },
  // })
  // if (!!user) {
  //   if (ext.Password.verify(req.body.password, user.password)) {
  //     const u = {} as any
  //     for (let [k, v] of Object.entries(user)) {
  //       if (k !== 'password') u[k] = v
  //     }
  //     u.role = user.p_role.id

  //     for (let [key,value] of Object.entries(u)) {
  //       req.session[key] = value
  //     }

  //     reply.send(u)
  //     return
  //   }
  // }
  // reply.code(403).send({
  //   reason: 'Username and/or password does not found',
  // })

  reply.send({ username: req.body.username, role: 'admin' })
  return
})
