import { page } from 'web-init'
import Home from 'src/components/Home'

export default page({
  url: '/',
  layout: 'blank',
  component: ({}) => {
    return (
      <div>
        <div className="bg-green-200 px-10 py-8 rounded-2xl">
          <Home/>
        </div>
      </div>
    );
  },
})
