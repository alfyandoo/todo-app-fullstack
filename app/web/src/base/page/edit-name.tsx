import { page } from 'web-init'
import EditName from 'src/components/EditName'

export default page({
  url: '/edit-name/:id',
  layout: 'blank',
  component: ({}) => {
    return (
        <EditName />
    )
  },
})
