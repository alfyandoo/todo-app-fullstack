import { IBaseUrl } from 'web-init'

export default (props: IBaseUrl) => {
  const host = 'localhost'
  // const host = props.mode === 'dev' ? props.ips.pop() : 'localhost'
  return `http://${host}:3200/`
}
