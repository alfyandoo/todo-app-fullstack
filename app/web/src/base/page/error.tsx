import { page } from 'web-init'

export default page({
  url: '*',
  layout: 'blank',
  component: ({}) => {
    return (
      <div>
        <h1 className='text-center font-bold'>404 Not Found</h1>
      </div>
    );
  },
})
