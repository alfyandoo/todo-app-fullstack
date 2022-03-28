import { page } from 'web-init'
import { useState } from 'react'
import Header from 'src/components/Header'
import TodoList from 'src/components/TodoList'

export default page({
  url: '/action',
  layout: 'blank',
  component: ({}) => {
    const [refresh, setRefresh] = useState(true);

    const handleRefresh = (status) => {
      setRefresh(status);
    }

    return (
        <div className="max-w-full bg-green-200 px-10 py-8 rounded-2xl">
            <Header handleRefresh={handleRefresh} />
            <TodoList handleRefresh={handleRefresh} refresh={refresh} />
        </div>
    );
  },
})
