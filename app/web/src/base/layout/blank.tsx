import { layout } from 'web-init'
import { useGlobal } from '../../../../../pkgs/web/init/node_modules/web-utils/src'
import { globalLayout } from '../global/layout'
import Footer from 'src/components/Footer'

export default layout({
  component: ({ children }) => {
    const meta = useGlobal(globalLayout)

    return (
      <div>
        <ul className="flex content-between bg-green-200 rounded-xl">
          {meta.menu.map((el, i) => {
            return (
              <div key={i} onClick={() => navigate(el.url)}>
                <li className="mr-6 flex-auto list-none cursor-pointer ">
                  <h2 className="text-orange-600 text-center hover:text-slate-700">{el.title}</h2>
                </li>
              </div>
            )
          })}
        </ul>
        <div>{children}</div>
        <Footer/>
      </div>
    )
  },
})